// ─── State ────────────────────────────────────────────────
let selectedQuestions = [];
let currentQuestion   = 0;
let score             = 0;
let examTimer;
let examTimeLeft      = 60 * 60; // 60 minutes in seconds
let userAnswers       = [];
let selectedMulti     = new Set();
let dragState         = {};
let answerLocked      = false;

// ─── Utilities ────────────────────────────────────────────
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ─── Guaranteed minimums per exam size ────────────────────
const EXAM_GUARANTEES = {
    10:  { multi: 2,  drag: 1  },
    25:  { multi: 5,  drag: 2  },
    50:  { multi: 10, drag: 4  },
    75:  { multi: 15, drag: 6  },
    100: { multi: 20, drag: 8  },
};

function buildExam(count) {
    const doShuffle = document.getElementById("shuffleQuestions").checked;

    let singlePool = questionBank.filter(q => q.type === "single");
    let multiPool  = questionBank.filter(q => q.type === "multi");
    let dragPool   = questionBank.filter(q => q.type === "drag");

    if (doShuffle) { shuffle(singlePool); shuffle(multiPool); shuffle(dragPool); }

    const g          = EXAM_GUARANTEES[count] || { multi: 0, drag: 0 };
    const wantMulti  = Math.min(g.multi, multiPool.length);
    const wantDrag   = Math.min(g.drag,  dragPool.length);
    const wantSingle = count - wantMulti - wantDrag;

    let chosen = [
        ...multiPool.slice(0, wantMulti),
        ...dragPool.slice(0, wantDrag),
    ];

    let singleFill = [...singlePool];
    while (singleFill.length < wantSingle) singleFill = singleFill.concat(singlePool);
    chosen = chosen.concat(singleFill.slice(0, wantSingle));

    shuffle(chosen);
    return chosen;
}

// ─── Start Exam ───────────────────────────────────────────
function startExam() {
    const count       = parseInt(document.getElementById("questionCount").value);
    selectedQuestions = buildExam(count);
    currentQuestion   = 0;
    score             = 0;
    userAnswers       = [];
    examTimeLeft      = 60 * 60;

    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("examScreen").style.display = "block";

    startExamTimer();
    loadQuestion();
}

// ─── Exam-wide Timer ──────────────────────────────────────
function startExamTimer() {
    clearInterval(examTimer);
    updateTimerDisplay();
    examTimer = setInterval(function() {
        examTimeLeft--;
        updateTimerDisplay();
        if (examTimeLeft <= 0) {
            clearInterval(examTimer);
            examTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins    = Math.floor(examTimeLeft / 60);
    const secs    = examTimeLeft % 60;
    const display = mins + ":" + (secs < 10 ? "0" : "") + secs;
    const el      = document.getElementById("timer");
    el.textContent = display;
    el.className   = examTimeLeft <= 300 ? "timer-urgent" : "";
}

function examTimeUp() {
    // Record the current unanswered question if any
    if (!answerLocked && currentQuestion < selectedQuestions.length) {
        const q = selectedQuestions[currentQuestion];
        let correctText = getCorrectText(q);
        userAnswers.push({
            question:  q.question,
            type:      q.type,
            selected:  "Time expired",
            correct:   correctText,
            isCorrect: false
        });
    }
    showResults();
}

function getCorrectText(q) {
    if (q.type === "drag")       return q.pairs.map(p => p.item + " -> " + p.match).join(" | ");
    else if (q.type === "multi") return q.answer.join(", ");
    else                         return q.answer;
}

// ─── Load Question ────────────────────────────────────────
function loadQuestion() {
    answerLocked = false;
    selectedMulti.clear();
    dragState = {};

    if (currentQuestion >= selectedQuestions.length) {
        clearInterval(examTimer);
        showResults();
        return;
    }

    const q = selectedQuestions[currentQuestion];

    document.getElementById("progress").textContent =
        "Question " + (currentQuestion + 1) + " / " + selectedQuestions.length;

    document.getElementById("question").innerHTML = q.question;
    document.getElementById("answerFeedback").innerHTML = "";
    document.getElementById("answerFeedback").className = "feedback";

    const typeTag = document.getElementById("questionType");
    if (q.type === "multi") {
        typeTag.textContent = "Select " + q.answer.length;
        typeTag.className   = "q-type-badge multi";
    } else if (q.type === "drag") {
        typeTag.textContent = "Drag & Drop";
        typeTag.className   = "q-type-badge drag";
    } else {
        typeTag.textContent = "Single Choice";
        typeTag.className   = "q-type-badge single";
    }

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    if (q.type === "single") renderSingle(q, answersDiv);
    if (q.type === "multi")  renderMulti(q, answersDiv);
    if (q.type === "drag")   renderDrag(q, answersDiv);
}

// ─── Single Choice ────────────────────────────────────────
function renderSingle(q, container) {
    let options = [...q.options];
    if (document.getElementById("shuffleAnswers").checked) shuffle(options);

    options.forEach(function(opt) {
        const btn       = document.createElement("button");
        btn.className   = "option-btn";
        btn.textContent = opt;
        btn.onclick     = function() { submitSingle(opt, q); };
        container.appendChild(btn);
    });
}

function submitSingle(selected, q) {
    if (answerLocked) return;
    answerLocked = true;

    const isCorrect = selected === q.answer;
    if (isCorrect) score++;

    document.querySelectorAll(".option-btn").forEach(function(btn) {
        btn.disabled = true;
        if (btn.textContent === q.answer)              btn.classList.add("correct");
        if (btn.textContent === selected && !isCorrect) btn.classList.add("wrong");
    });

    showFeedback(isCorrect, q.answer);

    userAnswers.push({
        question:  q.question,
        type:      "single",
        selected:  selected,
        correct:   q.answer,
        isCorrect: isCorrect
    });

    showNextButton();
}

// ─── Multi-select ─────────────────────────────────────────
function renderMulti(q, container) {
    let options = [...q.options];
    if (document.getElementById("shuffleAnswers").checked) shuffle(options);

    const hint       = document.createElement("p");
    hint.className   = "multi-hint";
    hint.textContent = "Select " + q.answer.length + " answer" + (q.answer.length > 1 ? "s" : "");
    container.appendChild(hint);

    options.forEach(function(opt) {
        const btn       = document.createElement("button");
        btn.className   = "option-btn";
        btn.textContent = opt;
        btn.onclick     = function() { toggleMulti(btn, opt, q); };
        container.appendChild(btn);
    });

    const submitBtn       = document.createElement("button");
    submitBtn.id          = "multiSubmit";
    submitBtn.className   = "submit-btn";
    submitBtn.textContent = "Submit";
    submitBtn.disabled    = true;
    submitBtn.onclick     = function() { submitMulti(q); };
    container.appendChild(submitBtn);
}

function toggleMulti(btn, opt, q) {
    if (answerLocked) return;
    if (selectedMulti.has(opt)) {
        selectedMulti.delete(opt);
        btn.classList.remove("selected");
    } else {
        if (selectedMulti.size < q.answer.length) {
            selectedMulti.add(opt);
            btn.classList.add("selected");
        }
    }
    document.getElementById("multiSubmit").disabled = (selectedMulti.size !== q.answer.length);
}

function submitMulti(q) {
    if (answerLocked) return;
    answerLocked = true;

    const selected  = [...selectedMulti];
    const correct   = q.answer;
    const isCorrect = correct.length === selected.length &&
        correct.every(function(a) { return selected.includes(a); });

    if (isCorrect) score++;

    document.querySelectorAll(".option-btn").forEach(function(btn) {
        btn.disabled = true;
        if (correct.includes(btn.textContent))          btn.classList.add("correct");
        else if (selected.includes(btn.textContent))    btn.classList.add("wrong");
    });

    showFeedback(isCorrect, correct.join(" AND "));

    userAnswers.push({
        question:  q.question,
        type:      "multi",
        selected:  selected.join(", "),
        correct:   correct.join(", "),
        isCorrect: isCorrect
    });

    showNextButton();
}

// ─── Drag and Drop ────────────────────────────────────────
function renderDrag(q, container) {
    const items        = q.pairs.map(function(p) { return p.item; });
    const shuffledItems = document.getElementById("shuffleAnswers").checked
        ? shuffle([...items]) : [...items];

    const labels         = q.pairs.map(function(p) { return p.match; });
    const shuffledLabels = shuffle([...labels]);

    q._correctMap = {};
    q.pairs.forEach(function(p) { q._correctMap[p.item] = p.match; });

    dragState = { dragging: null, placements: {} };

    const wrapper     = document.createElement("div");
    wrapper.className = "drag-wrapper";

    // LEFT — draggable chips
    const leftCol     = document.createElement("div");
    leftCol.className = "drag-col drag-left";
    shuffledItems.forEach(function(item) {
        const chip        = document.createElement("div");
        chip.className    = "drag-chip";
        chip.textContent  = item;
        chip.draggable    = true;
        chip.dataset.item = item;
        chip.addEventListener("dragstart", function(e) {
            dragState.dragging = item;
            e.dataTransfer.effectAllowed = "move";
            chip.classList.add("dragging");
        });
        chip.addEventListener("dragend", function() { chip.classList.remove("dragging"); });
        chip.addEventListener("touchstart", touchStart, { passive: true });
        chip.addEventListener("touchend",   touchEnd,   { passive: true });
        leftCol.appendChild(chip);
    });

    // RIGHT — drop zones
    const rightCol     = document.createElement("div");
    rightCol.className = "drag-col drag-right";
    shuffledLabels.forEach(function(label) {
        const zone         = document.createElement("div");
        zone.className     = "drag-zone";
        zone.dataset.label = label;

        const labelEl       = document.createElement("span");
        labelEl.className   = "drag-zone-label";
        labelEl.textContent = label;

        const slot          = document.createElement("div");
        slot.className      = "drag-slot";
        slot.textContent    = "Drop here";

        zone.appendChild(labelEl);
        zone.appendChild(slot);

        zone.addEventListener("dragover", function(e) {
            e.preventDefault();
            zone.classList.add("drag-over");
        });
        zone.addEventListener("dragleave", function() { zone.classList.remove("drag-over"); });
        zone.addEventListener("drop", function(e) {
            e.preventDefault();
            zone.classList.remove("drag-over");
            if (!dragState.dragging) return;
            const item = dragState.dragging;

            // Remove item from its previous slot
            document.querySelectorAll(".drag-slot").forEach(function(s) {
                if (s.dataset.occupant === item) {
                    s.textContent      = "Drop here";
                    s.dataset.occupant = "";
                    delete dragState.placements[item];
                }
            });

            // Evict existing occupant
            if (slot.dataset.occupant) delete dragState.placements[slot.dataset.occupant];

            slot.textContent           = item;
            slot.dataset.occupant      = item;
            dragState.placements[item] = label;
            dragState.dragging         = null;
            updateDragSubmit(q);
        });
        zone.addEventListener("touchmove", touchMove, { passive: false });
        rightCol.appendChild(zone);
    });

    wrapper.appendChild(leftCol);
    wrapper.appendChild(rightCol);
    container.appendChild(wrapper);

    const submitBtn       = document.createElement("button");
    submitBtn.id          = "dragSubmit";
    submitBtn.className   = "submit-btn";
    submitBtn.textContent = "Submit";
    submitBtn.disabled    = true;
    submitBtn.onclick     = function() { submitDrag(q); };
    container.appendChild(submitBtn);
}

// Touch drag helpers
let _touchItem  = null;
let _touchClone = null;
function touchStart(e) {
    _touchItem         = e.currentTarget.dataset.item;
    dragState.dragging = _touchItem;
    _touchClone        = e.currentTarget.cloneNode(true);
    _touchClone.style.cssText = "position:fixed;opacity:0.75;pointer-events:none;z-index:9999;font-size:13px;padding:6px 10px;background:#2a2a2a;border-radius:6px;color:white;border:1px solid #666;";
    document.body.appendChild(_touchClone);
}
function touchMove(e) {
    e.preventDefault();
    if (!_touchClone) return;
    const t = e.touches[0];
    _touchClone.style.left = (t.clientX - 40) + "px";
    _touchClone.style.top  = (t.clientY - 20) + "px";
}
function touchEnd(e) {
    if (_touchClone) { document.body.removeChild(_touchClone); _touchClone = null; }
    if (!_touchItem) return;
    const t    = e.changedTouches[0];
    const el   = document.elementFromPoint(t.clientX, t.clientY);
    const zone = el ? el.closest(".drag-zone") : null;
    if (zone) {
        const label = zone.dataset.label;
        const slot  = zone.querySelector(".drag-slot");
        document.querySelectorAll(".drag-slot").forEach(function(s) {
            if (s.dataset.occupant === _touchItem) {
                s.textContent = "Drop here"; s.dataset.occupant = "";
                delete dragState.placements[_touchItem];
            }
        });
        if (slot.dataset.occupant) delete dragState.placements[slot.dataset.occupant];
        slot.textContent      = _touchItem;
        slot.dataset.occupant = _touchItem;
        dragState.placements[_touchItem] = label;
    }
    dragState.dragging = null;
    _touchItem         = null;
    const q = selectedQuestions[currentQuestion];
    updateDragSubmit(q);
}

function updateDragSubmit(q) {
    const placed = Object.keys(dragState.placements).length;
    const btn    = document.getElementById("dragSubmit");
    if (btn) btn.disabled = (placed < q.pairs.length);
}

function submitDrag(q) {
    if (answerLocked) return;
    answerLocked = true;

    let allCorrect = true;
    const results  = [];

    q.pairs.forEach(function(pair) {
        const placed = dragState.placements[pair.item];
        const ok     = placed === pair.match;
        if (!ok) allCorrect = false;
        results.push({ item: pair.item, placed: placed, correct: pair.match, ok: ok });
    });

    if (allCorrect) score++;

    // Colour slots
    document.querySelectorAll(".drag-slot").forEach(function(slot) {
        const occupant = slot.dataset.occupant;
        if (!occupant) return;
        const pair   = q.pairs.find(function(p) { return p.item === occupant; });
        const placed = dragState.placements[occupant];
        slot.classList.add(pair && placed === pair.match ? "correct-slot" : "wrong-slot");
    });

    // Show corrections on wrong zones
    document.querySelectorAll(".drag-zone").forEach(function(zone) {
        const label   = zone.dataset.label;
        const correct = q.pairs.find(function(p) { return p.match === label; });
        if (!correct) return;
        const slot = zone.querySelector(".drag-slot");
        if (slot.dataset.occupant !== correct.item) {
            const hint       = document.createElement("div");
            hint.className   = "drag-hint";
            hint.textContent = "Should be: " + correct.item;
            zone.appendChild(hint);
        }
    });

    document.getElementById("dragSubmit").disabled = true;
    showFeedback(allCorrect, allCorrect ? "All correct!" : "See corrections above");

    userAnswers.push({
        question:  q.question,
        type:      "drag",
        selected:  results.map(function(r) { return r.item + " -> " + (r.placed || "?"); }).join(", "),
        correct:   q.pairs.map(function(p) { return p.item + " -> " + p.match; }).join(", "),
        isCorrect: allCorrect
    });

    showNextButton();
}

// ─── Feedback ─────────────────────────────────────────────
function showFeedback(isCorrect, correctText) {
    const el     = document.getElementById("answerFeedback");
    el.className = "feedback " + (isCorrect ? "correct" : "wrong");
    el.innerHTML = isCorrect
        ? "✅ Correct!"
        : "❌ Wrong! <br><small>Correct: " + correctText + "</small>";
}

// ─── Next Button ──────────────────────────────────────────
function showNextButton() {
    const feedback = document.getElementById("answerFeedback");

    const isLast = (currentQuestion + 1) >= selectedQuestions.length;
    const label  = isLast ? "View Results" : "Next Question";

    const btn       = document.createElement("button");
    btn.id          = "nextBtn";
    btn.className   = "next-btn";
    btn.innerHTML   = label + " &nbsp;→&nbsp; <kbd>Enter</kbd>";
    btn.onclick     = advance;
    feedback.appendChild(btn);

    document.addEventListener("keydown", onEnterNext);
}

function onEnterNext(e) {
    if (e.key === "Enter") {
        document.removeEventListener("keydown", onEnterNext);
        advance();
    }
}

function advance() {
    document.removeEventListener("keydown", onEnterNext);
    currentQuestion++;
    loadQuestion();
}

// ─── Results ──────────────────────────────────────────────
function showResults() {
    clearInterval(examTimer);
    document.getElementById("examScreen").style.display  = "none";
    document.getElementById("resultScreen").style.display = "block";

    const total = selectedQuestions.length;
    const pct   = Math.round((score / total) * 100);
    const grade = pct >= 80 ? "🎉 Pass" : pct >= 60 ? "⚠️ Close" : "❌ Fail";

    const used     = 3600 - examTimeLeft;
    const usedMins = Math.floor(used / 60);
    const usedSecs = used % 60;
    const timeUsed = usedMins + "m " + (usedSecs < 10 ? "0" : "") + usedSecs + "s";

    document.getElementById("score").innerHTML =
        score + " / " + total + " &nbsp; (" + pct + "%) &nbsp; " + grade +
        "<br><small style='font-size:14px;color:#aaa;font-weight:400;'>Time used: " + timeUsed + "</small>";

    const review = document.getElementById("review");
    review.innerHTML = "";

    userAnswers.forEach(function(item, idx) {
        const div     = document.createElement("div");
        div.className = "review-item " + (item.isCorrect ? "review-correct" : "review-wrong");
        div.innerHTML =
            "<div class='review-num'>Q" + (idx + 1) +
            " <span class='q-type-badge " + item.type + "'>" + item.type + "</span></div>" +
            "<b>" + item.question + "</b>" +
            "<div class='review-row'><span class='review-label'>Your answer:</span>" +
            "<span class='" + (item.isCorrect ? "correct" : "wrong") + "'>" + item.selected + "</span></div>" +
            "<div class='review-row'><span class='review-label'>Correct answer:</span>" +
            "<span class='correct'>" + item.correct + "</span></div>";
        review.appendChild(div);
    });
}

function restartExam() {
    clearInterval(examTimer);
    location.reload();
}
