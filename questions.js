// ─── Question Bank — CIS Data Foundations (CMDB & CSDM) — MASTER ─────────────
// Merged & de-duplicated from: questions1.js, questions2.js, questions3.js,
// questions4.js, questions5.js. Covers full PDF (CIS_DF_1, pages 1-98) plus
// supplementary CSDM/CMDB fundamentals questions.
// Fixed: one mis-typed entry (multi -> single) that had a 1-element array answer.
// Types: "single" | "multi" | "drag"

const questionBank = [

  {
    type: "single",
    question: "What is the primary purpose of the Configuration Management Database (CMDB)?",
    options: [
      "To manage incidents",
      "To store configuration item information and relationships",
      "To manage user accounts",
      "To track software licenses only"
    ],
    answer: "To store configuration item information and relationships",
  },

  {
    type: "single",
    question: "What does CSDM stand for?",
    options: [
      "Common Service Data Model",
      "Configuration Service Data Management",
      "Common System Data Management",
      "Configuration System Data Model"
    ],
    answer: "Common Service Data Model",
  },

  {
    type: "single",
    question: "Which CSDM layer contains Business Applications?",
    options: [
      "Foundation",
      "Design",
      "Manage Technical Services",
      "Sell / Consume"
    ],
    answer: "Design",
  },

  {
    type: "single",
    question: "A Configuration Item (CI) is:",
    options: [
      "Only hardware assets",
      "Any component that needs to be managed",
      "Only software applications",
      "Only cloud resources"
    ],
    answer: "Any component that needs to be managed",
  },

  {
    type: "single",
    question: "What is a relationship in CMDB?",
    options: [
      "A user assignment",
      "A dependency or connection between CIs",
      "A catalog item",
      "An SLA definition"
    ],
    answer: "A dependency or connection between CIs",
  },

  {
    type: "single",
    question: "Which CMDB class is typically used for servers?",
    options: [
      "cmdb_ci_server",
      "cmdb_ci_service",
      "cmdb_ci_network",
      "cmdb_ci_business_app"
    ],
    answer: "cmdb_ci_server",
  },

  {
    type: "single",
    question: "What is Service Mapping primarily used for?",
    options: [
      "Incident creation",
      "Discovering service dependencies",
      "User provisioning",
      "Knowledge management"
    ],
    answer: "Discovering service dependencies",
  },

  {
    type: "single",
    question: "Discovery helps populate the CMDB by:",
    options: [
      "Creating incidents",
      "Automatically identifying infrastructure components",
      "Approving changes",
      "Managing SLAs"
    ],
    answer: "Automatically identifying infrastructure components",
  },

  {
    type: "single",
    question: "Which CSDM domain focuses on consumer-facing services?",
    options: [
      "Sell/Consume",
      "Foundation",
      "Design",
      "Manage Technical Services"
    ],
    answer: "Sell/Consume",
  },

  {
    type: "single",
    question: "What is an Application Service?",
    options: [
      "A server",
      "A database",
      "A logical representation of an application and its supporting infrastructure",
      "A user account"
    ],
    answer: "A logical representation of an application and its supporting infrastructure",
  },

  {
    type: "single",
    question: "Which table is the CMDB base table?",
    options: [
      "cmdb_ci",
      "task",
      "cmn_location",
      "sys_user"
    ],
    answer: "cmdb_ci",
  },

  {
    type: "single",
    question: "The Foundation domain contains:",
    options: [
      "Business capabilities",
      "Core data required across the platform",
      "Incidents",
      "Knowledge articles"
    ],
    answer: "Core data required across the platform",
  },

  {
    type: "single",
    question: "Business Capability represents:",
    options: [
      "Infrastructure components",
      "What an organization does",
      "Network devices",
      "Software licenses"
    ],
    answer: "What an organization does",
  },

  {
    type: "single",
    question: "What is the purpose of CI Identification?",
    options: [
      "Prevent duplicate CIs",
      "Create incidents",
      "Generate reports",
      "Assign users"
    ],
    answer: "Prevent duplicate CIs",
  },

  {
    type: "single",
    question: "A Business Application is:",
    options: [
      "A physical server",
      "A software application delivering business functionality",
      "A router",
      "A discovery sensor"
    ],
    answer: "A software application delivering business functionality",
  },

  {
    type: "single",
    question: "What is Data Certification in CMDB?",
    options: [
      "Verifying CMDB data accuracy",
      "Creating changes",
      "Managing users",
      "Building reports"
    ],
    answer: "Verifying CMDB data accuracy",
  },

  {
    type: "single",
    question: "Which process ensures CMDB data quality?",
    options: [
      "Discovery only",
      "Governance and data management",
      "Incident management",
      "Problem management"
    ],
    answer: "Governance and data management",
  },

  {
    type: "single",
    question: "A Technical Service belongs primarily to which domain?",
    options: [
      "Manage Technical Services",
      "Sell/Consume",
      "Design",
      "Foundation"
    ],
    answer: "Manage Technical Services",
  },

  {
    type: "single",
    question: "What is the benefit of a healthy CMDB?",
    options: [
      "Better visibility and impact analysis",
      "More incidents",
      "Fewer users",
      "Reduced storage"
    ],
    answer: "Better visibility and impact analysis",
  },

  {
    type: "single",
    question: "What is the purpose of CI Relationships?",
    options: [
      "To model dependencies and impacts",
      "To assign approvals",
      "To manage SLAs",
      "To create catalog items"
    ],
    answer: "To model dependencies and impacts",
  },

  {
    type: "single",
    question: "What is the purpose of the Identification and Reconciliation Engine (IRE)?",
    options: [
      "Create users automatically",
      "Prevent duplicate CI creation and reconcile updates",
      "Manage incidents",
      "Generate reports"
    ],
    answer: "Prevent duplicate CI creation and reconcile updates",
  },

  {
    type: "single",
    question: "What relationship normally exists between an Application Service and Application?",
    options: [
      "Runs on",
      "Depends on",
      "Application Service supports the Application",
      "Hosted on"
    ],
    answer: "Application Service supports the Application",
  },

  {
    type: "single",
    question: "Which table stores Business Applications?",
    options: [
      "cmdb_ci_service",
      "cmdb_ci_business_app",
      "cmdb_ci_appl",
      "cmdb_ci_server"
    ],
    answer: "cmdb_ci_business_app",
  },

  {
    type: "single",
    question: "What is a Technical Service in CSDM?",
    options: [
      "A customer-facing service",
      "A service that provides technical capabilities",
      "A user account",
      "An incident category"
    ],
    answer: "A service that provides technical capabilities",
  },

  {
    type: "single",
    question: "Which CMDB Health KPI measures missing required attributes?",
    options: [
      "Compliance",
      "Completeness",
      "Correctness",
      "Reconciliation"
    ],
    answer: "Completeness",
  },

  {
    type: "single",
    question: "Which CMDB Health KPI measures adherence to governance rules?",
    options: [
      "Compliance",
      "Completeness",
      "Correctness",
      "Coverage"
    ],
    answer: "Compliance",
  },

  {
    type: "single",
    question: "Which CMDB Health KPI focuses on duplicate and stale records?",
    options: [
      "Compliance",
      "Completeness",
      "Correctness",
      "Governance"
    ],
    answer: "Correctness",
  },

  {
    type: "single",
    question: "What is a Service Offering?",
    options: [
      "A CI relationship",
      "A variation of a service available to consumers",
      "A server",
      "A discovery pattern"
    ],
    answer: "A variation of a service available to consumers",
  },

  {
    type: "single",
    question: "Which CSDM domain contains Service Offerings?",
    options: [
      "Build",
      "Design",
      "Sell / Consume",
      "Manage Portfolio"
    ],
    answer: "Sell / Consume",
  },

  {
    type: "single",
    question: "What is the recommended source for populating CMDB infrastructure data?",
    options: [
      "Manual entry",
      "Discovery",
      "Excel imports only",
      "Incidents"
    ],
    answer: "Discovery",
  },

  {
    type: "single",
    question: "Which relationship type commonly indicates hosting?",
    options: [
      "Depends on",
      "Runs on",
      "Contains",
      "Consumes"
    ],
    answer: "Runs on",
  },

  {
    type: "single",
    question: "What is the goal of reconciliation rules?",
    options: [
      "Delete records",
      "Determine which data source can update attributes",
      "Create incidents",
      "Approve changes"
    ],
    answer: "Determine which data source can update attributes",
  },

  {
    type: "single",
    question: "Which CSDM construct represents a customer-facing service?",
    options: [
      "Business Service",
      "Server",
      "Database",
      "Application Component"
    ],
    answer: "Business Service",
  },

  {
    type: "single",
    question: "Which table stores CI relationships?",
    options: [
      "cmdb_ci",
      "cmdb_rel_ci",
      "task",
      "sys_user"
    ],
    answer: "cmdb_rel_ci",
  },

  {
    type: "single",
    question: "Which CSDM domain contains Business Capabilities?",
    options: [
      "Design",
      "Build",
      "Sell/Consume",
      "Manage Technical Services"
    ],
    answer: "Design",
  },

  {
    type: "single",
    question: "Which application helps visualize CI relationships?",
    options: [
      "Dependency View",
      "Flow Designer",
      "Virtual Agent",
      "Service Portal"
    ],
    answer: "Dependency View",
  },

  {
    type: "single",
    question: "What is a Technical Service Offering?",
    options: [
      "A variation of a technical service",
      "A business capability",
      "A server relationship",
      "An application component"
    ],
    answer: "A variation of a technical service",
  },

  {
    type: "single",
    question: "Which CSDM layer contains Application Services?",
    options: [
      "Build",
      "Design",
      "Sell/Consume",
      "Foundation"
    ],
    answer: "Build",
  },

  {
    type: "single",
    question: "What is a Dynamic CI Group?",
    options: [
      "A group based on query criteria",
      "A user group",
      "A support group",
      "A project team"
    ],
    answer: "A group based on query criteria",
  },

  {
    type: "single",
    question: "What is a Business Service?",
    options: [
      "A service delivered to customers or users",
      "A server",
      "A database",
      "A CI relationship"
    ],
    answer: "A service delivered to customers or users",
  },

  {
    type: "single",
    question: "What does Discovery use to identify devices?",
    options: [
      "Credentials and probes",
      "Incidents",
      "Knowledge articles",
      "Catalog tasks"
    ],
    answer: "Credentials and probes",
  },

  {
    type: "single",
    question: "What is the goal of Service-aware CMDB?",
    options: [
      "Link infrastructure to business services",
      "Store incidents",
      "Create workflows",
      "Manage approvals"
    ],
    answer: "Link infrastructure to business services",
  },

  {
    type: "single",
    question: "Which table contains all CI classes through extension?",
    options: [
      "cmdb_ci",
      "task",
      "sys_user",
      "cmdb_rel_ci"
    ],
    answer: "cmdb_ci",
  },

  {
    type: "single",
    question: "What is a CI Identifier?",
    options: [
      "A rule used by IRE to uniquely identify a CI",
      "A user role",
      "A report",
      "A dashboard widget"
    ],
    answer: "A rule used by IRE to uniquely identify a CI",
  },

  {
    type: "single",
    question: "What is the purpose of CMDB Governance?",
    options: [
      "Maintain CMDB quality and ownership",
      "Create incidents",
      "Build workflows",
      "Manage approvals"
    ],
    answer: "Maintain CMDB quality and ownership",
  },

  {
    type: "single",
    question: "Which CMDB feature determines which source can update CI attributes?",
    options: [
      "Discovery",
      "Reconciliation Rules",
      "Service Mapping",
      "Flow Designer"
    ],
    answer: "Reconciliation Rules",
  },

  {
    type: "single",
    question: "What is an Application Portfolio?",
    options: [
      "A collection of business applications",
      "A collection of incidents",
      "A collection of users",
      "A CMDB relationship list"
    ],
    answer: "A collection of business applications",
  },

  {
    type: "single",
    question: "Which component helps avoid duplicate CI creation?",
    options: [
      "Service Mapping",
      "IRE",
      "Flow Designer",
      "Performance Analytics"
    ],
    answer: "IRE",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to minimize stale CIs. Which CMDB Health Dashboard scorecard displays this information?",
    options: [
      "Completeness",
      "Correctness",
      "Compliance"
    ],
    answer: "Correctness",
  },

  {
    type: "single",
    question: "After installing the Service Graph Connector Central plugin, which workspace will have the new tab available?",
    options: [
      "Service Graph Connector Workspace",
      "CMDB Workspace",
      "Discovery Admin Workspace"
    ],
    answer: "CMDB Workspace",
  },

  {
    type: "single",
    question: "A Configuration Manager needs to remove records from a CI Class while retaining the ability to restore them. Which policy type should they create?",
    options: [
      "Certification",
      "Delete",
      "Retire",
      "Archive"
    ],
    answer: "Archive",
  },

  {
    type: "single",
    question: "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    options: [
      "My Tasks in the Application Navigator",
      "The de-duplication task module",
      "The de-duplication dashboard on the CMDB workspace"
    ],
    answer: "The de-duplication dashboard on the CMDB workspace",
  },

  {
    type: "single",
    question: "A Business Relationship Manager wants to implement SPM and present offerings to business consumers. Which CSDM Domain does this align with?",
    options: [
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Design and Planning (Design)",
      "Service Delivery"
    ],
    answer: "Service Consumption (Sell/Consume)",
  },

  {
    type: "single",
    question: "A Service Owner needs to view related items such as Active Incidents and Planned Changes directly on the home node of the Unified Map. Which work area would allow this?",
    options: [
      "Tool box",
      "Map",
      "Contextual side panel",
      "Content controls"
    ],
    answer: "Contextual side panel",
  },

  {
    type: "single",
    question: "A CMDB Configuration Manager needs to implement delete and archive policies for server records in the New York datacenter. In which lifecycle state would servers be affected?",
    options: [
      "End of Life - Retired",
      "Missing - Stolen",
      "Inventory - Available",
      "In any lifecycle state"
    ],
    answer: "End of Life - Retired",
  },

  {
    type: "single",
    question: "Where can de-duplication tasks generated from the IRE be located in the CMDB Workspace?",
    options: [
      "Total status tile under the My Work tab",
      "CMDB feature adoption tile under the Insights tab",
      "Important actions tile under the Home tab"
    ],
    answer: "Important actions tile under the Home tab",
  },

  {
    type: "single",
    question: "An organization needs to maintain non-discoverable attributes such as warranty expiration dates. Which method ensures these attributes are accurately maintained?",
    options: [
      "Use a scheduled data import to update the attributes from an external source",
      "Create a new CI class specifically for non-discoverable attributes",
      "Use the CMDB Reconciliation Engine to update the attributes"
    ],
    answer: "Use a scheduled data import to update the attributes from an external source",
  },

  {
    type: "single",
    question: "A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technical Service Offerings, and Application Services. Which CSDM domain provides this?",
    options: [
      "Build and Integration (Build)",
      "Foundation",
      "Design and Planning (Design)",
      "Service Consumption (Sell / Consume)",
      "Service Delivery (Manage Technical Services)"
    ],
    answer: "Service Delivery (Manage Technical Services)",
  },

  {
    type: "single",
    question: "Which CMDB Data Manager policy type does a Configuration Management team create to confirm all servers are correctly associated with their location?",
    options: [
      "Retire",
      "Delete",
      "Attestation",
      "Certification",
      "Archive"
    ],
    answer: "Certification",
  },

  {
    type: "single",
    question: "Where can an administrator perform Natural Language Queries (NLQ)?",
    options: [
      "CMDB Data Manager",
      "CI Class Manager",
      "CMDB Workspace",
      "CMDB Health Dashboard"
    ],
    answer: "CMDB Workspace",
  },

  {
    type: "single",
    question: "Which is the best criterion attribute for a new application identification rule that considers the potential for the same application installed more than once on the same server?",
    options: [
      "Configuration File Name",
      "Configuration File Path",
      "Class",
      "Version",
      "Port"
    ],
    answer: "Configuration File Path",
  },

  {
    type: "single",
    question: "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    options: [
      "CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the CMDB 360 tab",
      "Saved queries window on the Insights tab"
    ],
    answer: "Saved queries window on the CMDB 360 tab",
  },

  {
    type: "single",
    question: "Which CI Class Manager feature will help a CI Class Owner responsible for Windows Servers streamline their task?",
    options: [
      "Search CI Classes",
      "Pinned Classes",
      "CI Favorites"
    ],
    answer: "Pinned Classes",
  },

  {
    type: "single",
    question: "A Configuration Management Governance team is transitioning from legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    options: [
      "Life Cycle Stages [life_cycle_stage]",
      "Life Cycle Controls [life_cycle_control]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
      "Life Cycle Mapping [life_cycle_mapping]"
    ],
    answer: "Life Cycle Mapping [life_cycle_mapping]",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to prevent duplicate CI creation from import sets loading data from vendor shipment files. How can the Administrator do this?",
    options: [
      "Create comparison rules in the IRE",
      "Use the CMDBTransformUtil API in the transform script",
      "Set the system property to utilize the IRE within transform maps",
      "Set the coalesce on two mappings within the transform map"
    ],
    answer: "Set the coalesce on two mappings within the transform map",
  },

  {
    type: "single",
    question: "A Configuration Manager wants to confirm that all servers are correctly associated with their location. Which CMDB Data Manager policy type should be created?",
    options: [
      "Retire",
      "Delete",
      "Certification"
    ],
    answer: "Certification",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs the fastest time to value solution for ingesting, managing, and maintaining CIs from SCCM. Which tool will accomplish this?",
    options: [
      "Import set using JDBC data source connection to SCCM using transform maps",
      "SCCM Usage Metering Spoke",
      "SCCM Service Graph Connector",
      "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
    ],
    answer: "SCCM Service Graph Connector",
  },

  {
    type: "single",
    question: "A Configuration Manager needs to help the CMDB owner implement end to end service modeling and wants status and playbooks for improving quality. What should the Configuration Manager reference?",
    options: [
      "CMDB Data Foundation Dashboard",
      "CMDB Workspace",
      "CSDM Data Foundation Dashboard",
      "Service Mapping Data Foundation Dashboard"
    ],
    answer: "CSDM Data Foundation Dashboard",
  },

  {
    type: "single",
    question: "A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other. Which tool can be used?",
    options: [
      "Relationship Map",
      "Unified Map",
      "Business Service Map"
    ],
    answer: "Relationship Map",
  },

  {
    type: "single",
    question: "A CMDB team noticed that hardware CIs are missing serial number information. Which tool accomplishes a structured approach to identify and address these gaps?",
    options: [
      "CMDB Data Foundation Playbook",
      "CI Class Manager",
      "Service Graph Connectors"
    ],
    answer: "CMDB Data Foundation Playbook",
  },

  {
    type: "single",
    question: "A CMDB Administrator notices CIs do not have a support group. How can the support group be automatically populated and maintained on the CI record?",
    options: [
      "Dynamic CI group",
      "Technology Management Service (Technical Service)",
      "CI Class Manager",
      "Technology Management Service Offering (Technical Service Offering)"
    ],
    answer: "Technology Management Service (Technical Service)",
  },

  {
    type: "single",
    question: "Where does a user with appropriate role(s) review and manage generated tasks after configuring CMDB Data Manager policies?",
    options: [
      "CMDB Health Dashboard > Duplicate CIs tab",
      "CMDB Workspace > My Work tab",
      "CMDB Workspace > Management tab",
      "CMDB Health Dashboard > Audit tab"
    ],
    answer: "CMDB Workspace > My Work tab",
  },

  {
    type: "single",
    question: "A Configuration Management team needs to prevent duplicate server records. Server records are processed via the IRE. Where would identification rules be configured?",
    options: [
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CMDB CI Class Manager",
      "CMDB Data Manager"
    ],
    answer: "CMDB CI Class Manager",
  },

  {
    type: "single",
    question: "What factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    options: [
      "Establishing clear governance and continuously monitoring CMDB health",
      "Relying on automated discovery tools to maintain and update CMDB records",
      "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
    ],
    answer: "Establishing clear governance and continuously monitoring CMDB health",
  },

  {
    type: "single",
    question: "Which is the recommended field to be used for a policy task assignment aligned with the group assigned to a class in CI Class Manager?",
    options: [
      "Approval group",
      "Managed by group",
      "Change group",
      "Support group"
    ],
    answer: "Managed by group",
  },

  {
    type: "single",
    question: "A CMDB CI Class Owner needs to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use?",
    options: [
      "Basic Info",
      "Suggested Relationships",
      "CI List",
      "Attributes"
    ],
    answer: "Basic Info",
  },

  {
    type: "single",
    question: "What is the relationship between an application and a server?",
    options: [
      "Application > Runs on::Runs > Server",
      "Application > Uses::Used by > Server",
      "Application > Used by::Uses > Server",
      "Application > Runs::Runs On > Server"
    ],
    answer: "Application > Runs::Runs On > Server",
  },

  {
    type: "single",
    question: "How does a CMDB Administrator use the ServiceNow Platform to ensure data quality associated with CIs in the CMDB?",
    options: [
      "Data Quality Business Rule",
      "CMDB Workspace",
      "Data Quality Scheduled Job",
      "CMDB Audit Business Rule"
    ],
    answer: "Data Quality Scheduled Job",
  },

  {
    type: "single",
    question: "A Configuration Manager responsible for a specific region wants a CMDB Health score for regionally relevant CIs. How can the Configuration Manager get this?",
    options: [
      "Create CMDB groups with type, health, by region",
      "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "On the CMDB health settings, activate the option, Group scores by region"
    ],
    answer: "Create CMDB groups with type, health, by region",
  },

  {
    type: "single",
    question: "The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard. Which feature can the group utilize?",
    options: [
      "Health Inclusion Rules",
      "Data Refresh Rules",
      "Reconciliation Rules",
      "Identification Rules"
    ],
    answer: "Health Inclusion Rules",
  },

  {
    type: "single",
    question: "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    options: [
      "Retire, Archive, Attestation, Certification, and Delete",
      "Archive and Delete",
      "Delete, Attestation, Retire, and Certification",
      "Attestation, Retire, and Certification"
    ],
    answer: "Retire, Archive, Attestation, Certification, and Delete",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    options: [
      "Reconciliation Rules",
      "CMDB Workspace",
      "CMDB Data Manager",
      "CMDB 360/Multisource CMDB"
    ],
    answer: "CMDB 360/Multisource CMDB",
  },

  {
    type: "single",
    question: "A Configuration Manager needs to ingest third-party CIs into the CMDB. Which method minimizes the risk of technical debt?",
    options: [
      "Table API",
      "Vendor-provided integration",
      "Service Graph Connector",
      "Import Sets and Transform Maps"
    ],
    answer: "Service Graph Connector",
  },

  {
    type: "single",
    question: "The ITSM Manager wants to use Technical Service Offerings to populate the support group of associated CIs. What CSDM stage would this be completed in?",
    options: [
      "Crawl",
      "Run",
      "Fly",
      "Walk",
      "Foundation"
    ],
    answer: "Run",
  },

  {
    type: "single",
    question: "A Configuration Manager is reviewing the life cycle of CIs to ensure data accuracy. Where are legacy status values and their equivalent CSDM life cycle stage values reviewed?",
    options: [
      "Life cycle properties",
      "Life cycle choice list",
      "Life cycle mappings"
    ],
    answer: "Life cycle mappings",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    options: [
      "It is a free application on the ServiceNow Innovation Lab.",
      "It is a paid application on the ServiceNow Store.",
      "It is a free application on the ServiceNow Store.",
      "It is active by default."
    ],
    answer: "It is a free application on the ServiceNow Store.",
  },

  {
    type: "single",
    question: "A CMDB Administrator viewing the CMDB Data Foundations Dashboard notices the Unique Locations Result percentage is low. What is the recommended process from the associated playbook?",
    options: [
      "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "Keep both locations as either can be used as a valid alternate location",
      "Review both locations, update CIs with the correct location and delete the duplicate location",
      "Use the Duplicate CI Remediator to merge the duplicate location records"
    ],
    answer: "Review both locations, update CIs with the correct location and delete the duplicate location",
  },

  {
    type: "single",
    question: "Using CI Class Manager, the Tomcat identification rule has Class and Install Directory criterion attributes configured. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    options: [
      "Applies to",
      "Independent",
      "Allow fallback to parent's rules",
      "Criterion attributes"
    ],
    answer: "Allow fallback to parent's rules",
  },

  {
    type: "single",
    question: "A CMDB Administrator has installed a Service Graph Connector (SGC) and then made customizations to the mappings. Which is a consequence of this action?",
    options: [
      "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
      "The customization will prevent the SGC from executing without an approval record attached to the affected mapping record.",
      "Fields populated by a customization will have a special tag associated with them in the CMDB."
    ],
    answer: "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
  },

  {
    type: "single",
    question: "A Configuration Manager needs to help the CMDB owner with end to end service modeling status and playbooks. What should the Configuration Manager reference?",
    options: [
      "CMDB Data Foundation Dashboard",
      "CMDB Workspace",
      "CSDM Data Foundation Dashboard",
      "Service Mapping Data Foundation Dashboard"
    ],
    answer: "CSDM Data Foundation Dashboard",
  },

  {
    type: "single",
    question: "A CMDB Administrator is working in CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
    options: [
      "Click the Principal Class UI Action button",
      "Check the Principal Class check box",
      "Select 'Yes' from the Principal Class choice list"
    ],
    answer: "Check the Principal Class check box",
  },

  {
    type: "single",
    question: "The following identification rule for a CI class has been defined. Two new CI records are imported into the hardware class. CI1 matches by name, CI2 matches by IP address of an existing Network Adapter. Which is correct?",
    options: [
      "CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "CI1 and CI2 both will be inserted as new records."
    ],
    answer: "CI1 will be updated with matching record and CI2 will be inserted as new record.",
  },

  {
    type: "multi",
    question: "Which are CMDB Data Manager end of life policy types? (Select 2)",
    options: [
      "Retire",
      "Lost",
      "Decommission",
      "Disposed",
      "Archive"
    ],
    answer: ["Retire","Archive"],
  },

  {
    type: "multi",
    question: "What are benefits of using the CMDB Data Foundations Dashboard? (Select 2)",
    options: [
      "Has a framework to create custom metrics for the CMDB",
      "Checks that important data is valid and properly configured",
      "Provides playbooks to assist in the remediation of potential risks",
      "Uses automation to remediate potential risks"
    ],
    answer: ["Checks that important data is valid and properly configured","Provides playbooks to assist in the remediation of potential risks"],
  },

  {
    type: "multi",
    question: "What insights are gained from CMDB 360 queries? (Select 2)",
    options: [
      "Unique CIs created from different data sources",
      "Gaps in attribute data from different data sources",
      "Different attribute values from different data sources",
      "Orphan CIs created from different data sources",
      "Duplicate configuration items from different data sources"
    ],
    answer: ["Gaps in attribute data from different data sources","Different attribute values from different data sources"],
  },

  {
    type: "multi",
    question: "Which actions can the CMDB Administrator take to improve the CMDB Health when the Data Foundations Dashboard shows low scores? (Select 2)",
    options: [
      "Use the Remediation Playbooks linked beside each metric",
      "Focus on metric(s) with Critical and High priorities",
      "Remove non-operational and retired CIs",
      "Adjust the metrics using exclusion rules to improve the scores"
    ],
    answer: ["Use the Remediation Playbooks linked beside each metric","Focus on metric(s) with Critical and High priorities"],
  },

  {
    type: "multi",
    question: "Which roles are needed to add or remove classes from the Principal Class filter? (Select 2)",
    options: [
      "cmdb_query_builder",
      "personalize_dictionary",
      "sn_csdm_admin",
      "sn_cmdb_admin"
    ],
    answer: ["personalize_dictionary","sn_cmdb_admin"],
  },

  {
    type: "multi",
    question: "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this? (Select 2)",
    options: [
      "Ensure one-to-one physical mapping between Asset and CI",
      "Ensure that the business rule to update Asset fields on change on the CI table is active",
      "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update CI fields on change on the asset table is active"
    ],
    answer: ["Ensure that the business rule to update Asset fields on change on the CI table is active","Ensure that the business rule to update CI fields on change on the asset table is active"],
  },

  {
    type: "multi",
    question: "Which classes of CSDM are used on the Incident form? (Select 2)",
    options: [
      "Business Application",
      "Service Offering",
      "Application Service",
      "Service Portfolio"
    ],
    answer: ["Service Offering","Application Service"],
  },

  {
    type: "multi",
    question: "A global enterprise integrates data from multiple discovery sources (ServiceNow Discovery, SCCM, AWS, manual uploads). Each source categorizes CIs differently, leading to duplicates and inconsistencies. What actions does the CMDB team take to resolve the issue? (Select 2)",
    options: [
      "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "Allow each discovery source to define its own CI class, even if it results in inconsistencies",
      "Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification",
      "Create a custom script to manually adjust incoming data before storing it in the CMDB"
    ],
    answer: ["Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources","Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification"],
  },

  {
    type: "multi",
    question: "Which categories of Service Graph Connectors are available to the Administrator? (Select 2)",
    options: [
      "Workflow Automation",
      "Cloud",
      "DevOps",
      "Observability"
    ],
    answer: ["Cloud","Observability"],
  },

  {
    type: "multi",
    question: "Which steps does an organization take to build a CMDB Query Builder query for all application services with a database that has incidents and all infrastructure in those application services? (Select 2)",
    options: [
      "Add a non-CMDB table to the query",
      "Use a Service Mapping Query to include non-CMDB tables like the Incident table",
      "Use a Service Mapping Query to find all incidents related to the database",
      "Use a CMDB Query to include application services and their related infrastructure"
    ],
    answer: ["Use a Service Mapping Query to find all incidents related to the database","Use a CMDB Query to include application services and their related infrastructure"],
  },

  {
    type: "multi",
    question: "Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service? (Select 2)",
    options: [
      "IntegrationHub ETL",
      "Service Mapping",
      "Data Manager",
      "Event Management",
      "Discovery"
    ],
    answer: ["Service Mapping","Discovery"],
  },

  {
    type: "multi",
    question: "How is the CMDB aligned to business processes? (Select 2)",
    options: [
      "Extends service delivery management to all enterprise departments",
      "Enhances decision-making and operational efficiency across the organization",
      "Enables the CFO/CIO to track software licenses",
      "Provides a centralized view of configuration items and their relationships"
    ],
    answer: ["Enhances decision-making and operational efficiency across the organization","Provides a centralized view of configuration items and their relationships"],
  },

  {
    type: "multi",
    question: "A CMDB Administrator is using the Duplicate CI Remediator. On the first tab of the wizard, the Main CI is selected. Which attributes are used to identify the Main CI? (Select 2)",
    options: [
      "Oldest Created",
      "Newest Created",
      "Least Related Items",
      "Most Related Items"
    ],
    answer: ["Oldest Created","Most Related Items"],
  },

  {
    type: "multi",
    question: "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise? (Select 2)",
    options: [
      "Application Service Owner",
      "Application Owner",
      "Enterprise Architect",
      "Business Relationship Manager"
    ],
    answer: ["Application Owner","Enterprise Architect"],
  },

  {
    type: "multi",
    question: "An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones need to be removed from the Principal Class filter. Which roles are needed? (Select 2)",
    options: [
      "cmdb_query_builder",
      "personalize_dictionary",
      "sn_csdm_admin",
      "sn_cmdb_admin"
    ],
    answer: ["personalize_dictionary","sn_cmdb_admin"],
  },

  {
    type: "drag",
    question: "Drag and drop the application service type to the best description.",
    pairs: [
      { item: "Service Mapping (Connection Suggestion)", match: "Ideal for custom-built applications and leverages fingerprinting to generate service maps in timely manner" },
      { item: "Service Mapping (Top-down)", match: "Recommended for mission-critical applications that require a precise approach using patterns" },
      { item: "Dynamic CI Group", match: "Ideal for small application services that can be easily built using filters and CMDB queries" },
      { item: "Tag-Based", match: "Best fit to map cloud-native, container-based, or machine environments" }
    ],
  },

  {
    type: "drag",
    question: "Drag and drop each de-duplication feature with its corresponding outcome.",
    pairs: [
      { item: "De-Duplication Tasks", match: "Can be assigned to groups for resolving duplicate CIs" },
      { item: "CMDB Health Dashboard Correctness Scorecard", match: "Offers insight into duplicate CIs within the CMDB" },
      { item: "De-Duplication Templates", match: "Offers a solution to resolve de-duplication tasks in bulk" },
      { item: "Duplicate CI Remediator", match: "Provides a wizard to resolve de-duplication tasks individually" }
    ],
  },

  {
    type: "drag",
    question: "The CMDB Health Dashboard is based on three KPIs: Correctness, Compliance, and Completeness. Drag the sub-metrics to the correct KPI.",
    pairs: [
      { item: "Required", match: "Completeness" },
      { item: "Audit", match: "Compliance" },
      { item: "Orphan", match: "Correctness" }
    ],
  },

  {
    type: "drag",
    question: "A CMDB Administrator needs to set up CMDB 360/Multisource CMDB. Drag and drop the system property to the functionality.",
    pairs: [
      { item: "Enables CMDB 360", match: "glide.identification_engine.multisource_enabled" },
      { item: "Enables capturing CMDB 360 data for CIs from non-CMDB classes", match: "glide.identification_engine.multisource_cmdb_ci_enabled" },
      { item: "Enables logging for CMDB 360", match: "glide.cmdb.logger.source.cmdb_multisource" },
      { item: "Maximum number of CIs that can be included in a CMDB 360 recompute operation", match: "glide.identification_engine.multisource.recompute.max.ci.limit" }
    ],
  },

  {
    type: "drag",
    question: "ServiceNow provides a suite of CMDB management tools. Drag and drop the design architecture to its management tool.",
    pairs: [
      { item: "Automated agent-based solution running patterns", match: "Agent Client Collector" },
      { item: "Organization-built solution using transform maps", match: "Import Sets" },
      { item: "Third-party integrations from other vendors", match: "Service Graph Connector" },
      { item: "Automated agentless solution running patterns", match: "ServiceNow Discovery" }
    ],
  },

  {
    type: "drag",
    question: "A Platform Owner is building the governance team to support the CSDM. Drag the domain to the roles that make up the governance team.",
    pairs: [
      { item: "Foundation Domain", match: "Service Owner(s), Platform Owner" },
      { item: "Portfolio Domain", match: "Technology Service Owner(s), Application Service Owner(s), Platform Owner" },
      { item: "Design Domain", match: "Enterprise Architect(s), Platform Owner" },
      { item: "Technical Domain", match: "Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner" }
    ],
  },

  {
    type: "drag",
    question: "An Enterprise Architect needs to help the CMDB owner understand the benefits of CSDM. Drag the CSDM domains to the respective benefits.",
    pairs: [
      { item: "Design and Planning", match: "Understand CIs related to business application and related capabilities, identify redundancies, monitor costs and make better investment roadmap" },
      { item: "Service Delivery", match: "Understand technical services, technical service offerings, service support and all relationships to underlying technology CIs" },
      { item: "Service Consumption", match: "Understand business services and ownership, cost, scope of what is delivered to the business/consumer and request access to the business service" },
      { item: "Foundation", match: "Use the base system tables when implementing the CSDM to derive highest value from ServiceNow products and the Now Platform" }
    ],
  },

  {
    type: "drag",
    question: "Drag and drop the product to its description.",
    pairs: [
      { item: "ServiceNow Discovery", match: "Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information" },
      { item: "Service Graph Connectors", match: "Facilitates integration between ServiceNow and external systems to import and synchronize data" },
      { item: "Service Mapping", match: "Complete topology of the services and shows how they are supported by underlying infrastructure and applications" },
      { item: "Agent Client Collector (ACC)", match: "Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information" }
    ],
  },

  {
    type: "drag",
    question: "Drag and drop each CMDB 360 query insight to its correct category.",
    pairs: [
      { item: "Shows gaps in attribute data across sources", match: "Gaps" },
      { item: "Shows different attribute values per source", match: "Conflicts" },
      { item: "Shows CI records with no relationships", match: "Orphans" },
      { item: "Shows CI records from a single source only", match: "Unique" }
    ],
  },

  {
    type: "single",
    question: "A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM sell/consume domain?",
    options: [
      "Business Service Offering, Business Service",
      "Business Capability, Information Object, Business Application",
      "Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)"
    ],
    answer: "Business Service Offering, Business Service",
  },

  {
    type: "single",
    question: "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    options: [
      "Completeness",
      "Correctness",
      "Compliance"
    ],
    answer: "Correctness",
  },

  {
    type: "single",
    question: "A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. The Platform Owner knows that the new Service Graph Connector Central plugin is just what is needed. After installing the plugin, what workspace will have the new Service Graph Connector Central tab available?",
    options: [
      "Service Graph Connector Workspace",
      "CMDB Workspace",
      "Discovery Admin Workspace"
    ],
    answer: "CMDB Workspace",
  },

  {
    type: "single",
    question: "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    options: [
      "Certification",
      "Delete",
      "Retire",
      "Archive"
    ],
    answer: "Archive",
  },

  {
    type: "single",
    question: "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Which CSDM Domain does this align with?",
    options: [
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Design and Planning (Design)",
      "Service Delivery"
    ],
    answer: "Service Consumption (Sell/Consume)",
  },

  {
    type: "single",
    question: "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    options: [
      "End of Life - Retired",
      "Missing - Stolen",
      "Inventory - Available",
      "In any lifecycle state"
    ],
    answer: "End of Life - Retired",
  },

  {
    type: "single",
    question: "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    options: [
      "Total status tile under the My Work tab",
      "CMDB feature adoption tile under the Insights tab",
      "Important actions tile under the Home tab"
    ],
    answer: "Important actions tile under the Home tab",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining CIs and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    options: [
      "Import set using JDBC data source connection to SCCM using transform maps",
      "SCCM Usage Metering Spoke",
      "SCCM Service Graph Connector",
      "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
    ],
    answer: "SCCM Service Graph Connector",
  },

  {
    type: "single",
    question: "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    options: [
      "CMDB Data Foundation Dashboard",
      "CMDB Workspace",
      "CSDM Data Foundation Dashboard",
      "Service Mapping Data Foundation Dashboard"
    ],
    answer: "CSDM Data Foundation Dashboard",
  },

  {
    type: "single",
    question: "A CMDB team has noticed that some hardware CIs are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    options: [
      "CMDB Data Foundation Playbook",
      "CI Class Manager",
      "Service Graph Connectors"
    ],
    answer: "CMDB Data Foundation Playbook",
  },

  {
    type: "single",
    question: "Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: Class and Install Directory. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    options: [
      "Applies to",
      "Independent",
      "Allow fallback to parent's rules",
      "Criterion attributes"
    ],
    answer: "Allow fallback to parent's rules",
  },

  {
    type: "single",
    question: "A CMDB CI Class Owner responsible for the Windows Servers needs to manage the Windows Server class. Which CI Class Manager feature will help the CI Class Owner streamline this task?",
    options: [
      "Search CI Classes",
      "Pinned Classes",
      "CI Favorites"
    ],
    answer: "Pinned Classes",
  },

  {
    type: "single",
    question: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    options: [
      "Life Cycle Stages [life_cycle_stage]",
      "Life Cycle Controls [life_cycle_control]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
      "Life Cycle Mapping [life_cycle_mapping]"
    ],
    answer: "Life Cycle Mapping [life_cycle_mapping]",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data into the CMDB from vendor shipment files containing CI information. How can the Administrator do this?",
    options: [
      "Create comparison rules in the IRE",
      "Use the CMDBTransformUtil API in the transform script",
      "Set the system property to utilize the IRE within transform maps",
      "Set the coalesce on two mappings within the transform map"
    ],
    answer: "Set the coalesce on two mappings within the transform map",
  },

  {
    type: "single",
    question: "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
    options: [
      "Retire",
      "Delete",
      "Attestation",
      "Certification",
      "Archive"
    ],
    answer: "Certification",
  },

  {
    type: "single",
    question: "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule of lowest value for the Disk Space (GB) field, while the Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule of most reported for the Disk Space (GB) field. Given the following data sources that populate Windows Server data into the CMDB 360/Multisource CMDB — Field: 75, ServiceNow: 75, LANDesk: 50, Altiris: 80 — Which value would be added to the CMDB for the Disk Space (GB) field of a Windows Server [cmdb_ci_win_server] record?",
    options: [
      "80",
      "75",
      "50"
    ],
    answer: "75",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    options: [
      "Configuration File Name",
      "Configuration File Path",
      "Class",
      "Version",
      "Port"
    ],
    answer: "Configuration File Path",
  },

  {
    type: "single",
    question: "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    options: [
      "Assignment Group on the CI record",
      "Affected CIs in the Incident record",
      "Service classification in the Technical Service",
      "Business Criticality in the Service Offering"
    ],
    answer: "Business Criticality in the Service Offering",
  },

  {
    type: "single",
    question: "The Change Management team in an organization wants to implement a Change across multiple CIs at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
    options: [
      "Configuration Item",
      "Business Service",
      "Service Offering"
    ],
    answer: "Configuration Item",
  },

  {
    type: "single",
    question: "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework. What is the purpose of an information object?",
    options: [
      "It describes data in general on a group of Configuration Items.",
      "It describes the logical data to the Business Applications.",
      "It describes data exchanged between an API interface and an Application."
    ],
    answer: "It describes the logical data to the Business Applications.",
  },

  {
    type: "single",
    question: "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
    options: [
      "Click the Principal Class UI Action button",
      "Check the Principal Class check box",
      "Select 'Yes' from the Principal Class choice list"
    ],
    answer: "Check the Principal Class check box",
  },

  {
    type: "single",
    question: "A CMDB Administrator notices that CIs do not have a support group. How can the support group be automatically populated and maintained on the CI record?",
    options: [
      "Dynamic CI group",
      "Technology Management Service (Technical Service)",
      "CI Class Manager",
      "Technology Management Service Offering (Technical Service Offering)"
    ],
    answer: "Technology Management Service (Technical Service)",
  },

  {
    type: "single",
    question: "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    options: [
      "CMDB Health Dashboard > Duplicate CIs tab",
      "CMDB Workspace > My Work tab",
      "CMDB Workspace > Management tab",
      "CMDB Health Dashboard > Audit tab"
    ],
    answer: "CMDB Workspace > My Work tab",
  },

  {
    type: "single",
    question: "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
    options: [
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CMDB CI Class Manager",
      "CMDB Data Manager"
    ],
    answer: "CMDB CI Class Manager",
  },

  {
    type: "single",
    question: "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    options: [
      "Establishing clear governance and continuously monitoring CMDB health",
      "Relying on automated discovery tools to maintain and update CMDB records",
      "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
    ],
    answer: "Establishing clear governance and continuously monitoring CMDB health",
  },

  {
    type: "single",
    question: "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group assigned to a class in CI Class Manager. Which is the recommended field to be used for a policy task assignment?",
    options: [
      "Approval group",
      "Managed by group",
      "Change group",
      "Support group"
    ],
    answer: "Managed by group",
  },

  {
    type: "single",
    question: "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
    options: [
      "Basic Info",
      "Suggested Relationships",
      "CI List",
      "Attributes"
    ],
    answer: "Basic Info",
  },

  {
    type: "single",
    question: "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class. How can the Configuration Manager get a score for regionally relevant CIs?",
    options: [
      "Create CMDB groups with type, health, by region",
      "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "On the CMDB health settings, activate the option, Group scores by region"
    ],
    answer: "Create CMDB groups with type, health, by region",
  },

  {
    type: "single",
    question: "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    options: [
      "Data Quality Business Rule",
      "CMDB Workspace",
      "Data Quality Scheduled Job",
      "CMDB Audit Business Rule"
    ],
    answer: "Data Quality Scheduled Job",
  },

  {
    type: "single",
    question: "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs. What CSDM stage would this be completed in?",
    options: [
      "Crawl",
      "Run",
      "Fly",
      "Walk",
      "Foundation"
    ],
    answer: "Run",
  },

  {
    type: "multi",
    question: "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application? (Select 2)",
    options: [
      "Has a framework to create custom metrics for the CMDB",
      "Checks that important data is valid and properly configured",
      "Provides playbooks to assist in the remediation of potential risks",
      "Uses automation to remediate potential risks"
    ],
    answer: ["Checks that important data is valid and properly configured","Uses automation to remediate potential risks"],
  },

  {
    type: "multi",
    question: "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data. What insights are gained from CMDB 360 queries? (Select 2)",
    options: [
      "Unique CIs created from different data sources",
      "Gaps in attribute data from different data sources",
      "Different attribute values from different data sources",
      "Orphan CIs created from different data sources",
      "Duplicate configuration items from different data sources"
    ],
    answer: ["Gaps in attribute data from different data sources","Different attribute values from different data sources"],
  },

  {
    type: "multi",
    question: "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health? (Select 2)",
    options: [
      "Use the Remediation Playbooks linked beside each metric",
      "Focus on metric(s) with Critical and High priorities",
      "Remove non-operational and retired CIs",
      "Adjust the metrics using exclusion rules to improve the scores"
    ],
    answer: ["Use the Remediation Playbooks linked beside each metric","Focus on metric(s) with Critical and High priorities"],
  },

  {
    type: "multi",
    question: "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate? (Select 2)",
    options: [
      "Business Application",
      "Service Offering",
      "Application Service",
      "Service Portfolio"
    ],
    answer: ["Service Offering","Application Service"],
  },

  {
    type: "multi",
    question: "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same CIs differently, leading to duplicate records and inconsistencies across the system. What actions does the CMDB team take to resolve the issue? (Select 2)",
    options: [
      "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "Allow each discovery source to define its own CI class, even if it results in inconsistencies",
      "Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification",
      "Create a custom script to manually adjust incoming data before storing it in the CMDB"
    ],
    answer: ["Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources","Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification"],
  },

  {
    type: "multi",
    question: "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator? (Select 2)",
    options: [
      "Workflow Automation",
      "Cloud",
      "DevOps",
      "Observability"
    ],
    answer: ["Cloud","Observability"],
  },

  {
    type: "multi",
    question: "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. Which steps does the organization take to build this query? (Select 2)",
    options: [
      "Add a non-CMDB table to the query",
      "Use a Service Mapping Query to include non-CMDB tables like the Incident table",
      "Use a Service Mapping Query to find all incidents related to the database",
      "Use a CMDB Query to include application services and their related infrastructure"
    ],
    answer: ["Use a Service Mapping Query to find all incidents related to the database","Use a CMDB Query to include application services and their related infrastructure"],
  },

  {
    type: "multi",
    question: "A CMDB Administrator is using the Duplicate CI Remediator to address a de-duplication task. On the first tab of the wizard, the Main CI is selected. Which attributes are used to identify the Main CI? (Select 2)",
    options: [
      "Oldest Created",
      "Newest Created",
      "Least Related Items",
      "Most Related Items"
    ],
    answer: ["Oldest Created","Most Related Items"],
  },

  {
    type: "single",
    question: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    options: [
      "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
    ],
    answer: "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
  },

  {
    type: "drag",
    question: "A CMDB Administrator seeks to understand the available tools for preventing, addressing, and remediating duplicate CIs. Drag and drop each feature with the corresponding outcome.",
    pairs: [
      { item: "De-Duplication Tasks", match: "Can be assigned to groups for resolving duplicate CIs" },
      { item: "CMDB Health Dashboard Correctness Scorecard", match: "Offers insight into duplicate CIs within the CMDB" },
      { item: "De-Duplication Templates", match: "Offers a solution to resolve de-duplication tasks in bulk" },
      { item: "Duplicate CI Remediator", match: "Provides a wizard to resolve de-duplication tasks individually" }
    ],
  },

  {
    type: "drag",
    question: "The CMDB Health Dashboard is based on three Key Performance Indicators (KPIs): Correctness, Compliance, and Completeness. Each KPI includes several sub-metrics. Drag the sub-metrics to the KPI.",
    pairs: [
      { item: "Required", match: "Completeness" },
      { item: "Audit", match: "Compliance" },
      { item: "Orphan", match: "Correctness" }
    ],
  },

  {
    type: "drag",
    question: "ServiceNow provides a suite of CMDB management tools designed to effectively ingest, manage, and maintain CIs and relationships. Drag and drop the design architecture to its management tool.",
    pairs: [
      { item: "Automated agent-based solution running patterns", match: "Agent Client Collector" },
      { item: "Organization-built solution using transform maps", match: "Import Sets" },
      { item: "Third-party integrations from other vendors", match: "Service Graph Connector" },
      { item: "Automated agentless solution running patterns", match: "ServiceNow Discovery" }
    ],
  },

  {
    type: "single",
    question: "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance management tool will accomplish this?",
    options: [
      "CI Class Manager",
      "CMDB and CSDM Data Foundations Dashboard",
      "CMDB Health Dashboard",
      "CMDB Data Manager",
      "De-duplication Templates"
    ],
    answer: "CMDB Data Manager",
  },

  {
    type: "multi",
    question: "What types of policies can be created within CMDB Data Manager?",
    options: [
      "De-duplication",
      "Archive",
      "Reconciliation",
      "Retire"
    ],
    answer: ["De-duplication","Retire"],
  },

  {
    type: "multi",
    question: "A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace. What actions can be initiated from the CMDB Workspace?",
    options: [
      "Execute ServiceNow Discovery",
      "Create a CMDB Data Manager certification policy",
      "Remediate duplicate CI records",
      "Create a new CMDB class"
    ],
    answer: ["Execute ServiceNow Discovery","Remediate duplicate CI records"],
  },

  {
    type: "single",
    question: "A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact of this change?",
    options: [
      "The Data Source for the SCCM Service Graph Connector will be marked as Inactive.",
      "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured.",
      "Any updates for the SCCM Service Graph Connector will be skipped during the upgrade."
    ],
    answer: "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured.",
  },

  {
    type: "single",
    question: "Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
    options: [
      "Be marked as inactive",
      "Be marked as critical",
      "Be retired and in end of life",
      "Be fully operational and in use"
    ],
    answer: "Be retired and in end of life",
  },

  {
    type: "single",
    question: "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
    options: [
      "Run",
      "Foundation",
      "Crawl",
      "Walk",
      "Fly"
    ],
    answer: "Foundation",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed. After retiring the CI records, which recommended action does the CMDB Administrator take?",
    options: [
      "Create a delete policy",
      "Create a scheduled job",
      "Create a business rule"
    ],
    answer: "Create a delete policy",
  },

  {
    type: "single",
    question: "A CMDB Administrator group aims to establish a process for receiving task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
    options: [
      "Technical Service Offerings and Dynamic CI groups",
      "CMDB Workspace and Scheduled Jobs",
      "Dynamic CI groups and CMDB groups",
      "CI Class Manager and Health Preferences"
    ],
    answer: "CI Class Manager and Health Preferences",
  },

  {
    type: "single",
    question: "A CMDB Administrator is asked to create a query using the CMDB Query Builder that displays all operational CIs belonging to a specific application service. Which steps provide the desired outcome?",
    options: [
      "1. Add the Business Application, Application Service, and Configuration Item classes to the canvas. 2. Define a filter for the application service name and the operational status of the configuration items. 3. Configure the relationship between the classes. 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status of the configuration items. 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Add the Operational Status and Name fields as columns. 4. Run the query."
    ],
    answer: "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status of the configuration items. 4. Run the query.",
  },

  {
    type: "multi",
    question: "What is the value of using the CMDB in security operations?",
    options: [
      "Allows security team to assess and remediate an incident",
      "Enables audits and attestations across CIs",
      "Auto-resolves a vulnerability",
      "Identifies the IT infrastructure with a vulnerability"
    ],
    answer: ["Allows security team to assess and remediate an incident","Identifies the IT infrastructure with a vulnerability"],
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to set a CI Class as a Principal Class. Which CI Class Manager tab would need to be accessed?",
    options: [
      "Health > Attributes",
      "Class Info > Basic Info",
      "Class Info > Attributes"
    ],
    answer: "Class Info > Basic Info",
  },

  {
    type: "single",
    question: "An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records. Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
    options: [
      "Data Refresh Rules",
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules"
    ],
    answer: "Data Refresh Rules",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. What is the default duration of this metric?",
    options: [
      "24 hours",
      "30 days",
      "7 days",
      "60 days"
    ],
    answer: "60 days",
  },

  {
    type: "drag",
    question: "Drag and drop the CMDB Health Dashboard metric to the description.",
    pairs: [
      { item: "Duplicate", match: "CMDB records that represent the same physical or logical asset multiple times" },
      { item: "Required", match: "Fields necessary to create or update a CI record in the CMDB" },
      { item: "Orphan", match: "CMDB records that no longer maintain their logical or physical relationships with other CIs" },
      { item: "Stale", match: "CMDB records that are no longer actively updated, but remain stored in the database" },
      { item: "Recommended", match: "Fields that support the accuracy, completeness, and usability of CI records in the CMDB" },
      { item: "Audit", match: "Actual values of specified fields are compared to the expected values defined in a template" }
    ],
  },

  {
    type: "multi",
    question: "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data, and made the CMDB service-aware using Service Mapping. How will these improvements enhance the change management process?",
    options: [
      "Automatically schedules and deploys changes without human review or approval",
      "Provides insight into the potential impact of the change",
      "Ensures that no changes result in service downtime, regardless of planning or execution",
      "Enables auto population of the assignment group field to dynamically route changes"
    ],
    answer: ["Provides insight into the potential impact of the change","Enables auto population of the assignment group field to dynamically route changes"],
  },

  {
    type: "single",
    question: "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook. What Governance process play can prevent this from recurring?",
    options: [
      "Make the field Managed by mandatory on all CIs",
      "Make the field Owned by mandatory",
      "Set a default value on the Service Owner field so that is never empty"
    ],
    answer: "Make the field Owned by mandatory",
  },

  {
    type: "single",
    question: "A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested relationships for several classes. Which central location does the CMDB Administrator use to collect this information?",
    options: [
      "CI Class Manager",
      "CMDB Data Manager",
      "CI Identifiers",
      "CMDB Workspace"
    ],
    answer: "CI Class Manager",
  },

  {
    type: "multi",
    question: "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager:\n• Table: Server [cmdb_ci_server]\n• Filter: Operating System | contains | Server OR Operating System | contains | Linux\nWhich operating systems are affected by this policy?",
    options: [
      "AIX",
      "Windows Server 2022 Datacenter",
      "Linux CentOS",
      "Windows 2019 Datacenter"
    ],
    answer: ["Windows Server 2022 Datacenter","Linux CentOS"],
  },

  {
    type: "single",
    question: "A Configuration Manager needs to restrict the number of classes available in a Configuration Item reference field on an incident form. How does the Manager set Principal Classes?",
    options: [
      "By using the Principal Class check box on the CI Class Manager's 'Attributes' tab for a Class",
      "By using the Principal Class check box on the CMDB Workspace",
      "By using the Principal Class attribute on the CI",
      "By using the Principal Class check box on the CI Class Manager's 'Basic Info' tab for a Class"
    ],
    answer: "By using the Principal Class check box on the CI Class Manager's 'Basic Info' tab for a Class",
  },

  {
    type: "multi",
    question: "A CMDB Administrator is comparing the Unified Map to the Service Mapping map. What are additional capabilities of the Unified Map?",
    options: [
      "Visibility to an application and the host it is installed on",
      "Number of levels displayed on a map can be modified",
      "Map nodes can be filtered based on user preferences",
      "Map can be zoomed in and out"
    ],
    answer: ["Number of levels displayed on a map can be modified","Map nodes can be filtered based on user preferences"],
  },

  {
    type: "multi",
    question: "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'?",
    options: [
      "Managed By Group",
      "Support Group",
      "Assignment Group",
      "Owned by Group"
    ],
    answer: ["Managed By Group","Support Group"],
  },

  {
    type: "single",
    question: "A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices. What is the next step to take after selecting the Enable Life Cycle Sync button?",
    options: [
      "Fix the incorrect values in the Life Cycle Stage to match legacy values",
      "Activate the CSDM Life Cycle field mappings",
      "Resolve any incomplete field mappings identified in the Discrepancy Report"
    ],
    answer: "Resolve any incomplete field mappings identified in the Discrepancy Report",
  },

  {
    type: "single",
    question: "The Configuration Management team finds value in the reports from CMDB 360/Multisource CMDB and wants to use it for all CI data. Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
    options: [
      "ServiceNow Discovery must be used to populate the CI data.",
      "Reconciliation rules with priorities must be configured.",
      "The CI data must go through the IRE.",
      "The CI data must be from an authorized Service Graph Connector."
    ],
    answer: "The CI data must go through the IRE.",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
    options: [
      "Principal Class",
      "Independent",
      "Extensible",
      "Main Record"
    ],
    answer: "Principal Class",
  },

  {
    type: "single",
    question: "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). Which process occurred?",
    options: [
      "Class Switch",
      "Class Change",
      "Class Upgrade",
      "Class Downgrade"
    ],
    answer: "Class Upgrade",
  },

  {
    type: "multi",
    question: "How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery?",
    options: [
      "Assist integration choices",
      "Gain visibility and control",
      "Enhanced Service Management operations",
      "Reduced hardware costs"
    ],
    answer: ["Gain visibility and control","Enhanced Service Management operations"],
  },

  {
    type: "multi",
    question: "A Configuration Manager wants to manage manually maintained data attributes of CIs. Which group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups?",
    options: [
      "Change group",
      "CMDB group",
      "Approval group",
      "Support group"
    ],
    answer: ["Change group","Support group"],
  },

  {
    type: "single",
    question: "A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Which tab in the CSDM Data Foundation Dashboard provides this information?",
    options: [
      "Crawl",
      "Walk",
      "Fly",
      "Run"
    ],
    answer: "Walk",
  },

  {
    type: "single",
    question: "A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. Which action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
    options: [
      "Use Service Catalog to define the new CI class, as the CI Class Manager is only for service-related records and not for hardware CIs",
      "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type",
      "Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity"
    ],
    answer: "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
  },

  {
    type: "multi",
    question: "What are the characteristics or functions of ServiceNow IntegrationHub ETL?",
    options: [
      "Integrates third-party data into the CMDB or into non-CMDB tables",
      "Performs discovery data collection and updates the CMDB",
      "Uses the IRE to process and integrate data",
      "Imports Microsoft SCCM/Intune data into the CMDB"
    ],
    answer: ["Integrates third-party data into the CMDB or into non-CMDB tables","Uses the IRE to process and integrate data"],
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. Which ingestion method brings the fastest time to value?",
    options: [
      "Import Sets",
      "Agent Client Collector",
      "Service Graph Connectors",
      "IntegrationHub ETL"
    ],
    answer: "Service Graph Connectors",
  },

  {
    type: "single",
    question: "The following identification rule is defined for a CI class (Hardware: serial_number @100, Hardware: serial_number @200, Hardware: name @300, Network Adapter: mac_address,name @400). Two new CI records are imported: CI1 has a name matching an existing CI record; CI2 has an IP address matching an existing CI record. Which is correct?",
    options: [
      "CI1 and CI2 both will be updated with matching records.",
      "CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "CI1 will be inserted as new record and CI2 will be updated with matching record.",
      "CI1 and CI2 both will be inserted as new records."
    ],
    answer: "CI1 will be updated with matching record and CI2 will be inserted as new record.",
  },

  {
    type: "multi",
    question: "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. Which types of documentation can they expect to be provided in a playbook?",
    options: [
      "Problem Analysis",
      "Root Cause",
      "Problem Overview",
      "Automated Remediations"
    ],
    answer: ["Problem Analysis","Problem Overview"],
  },

  {
    type: "drag",
    question: "Given a list of Service types in the platform, drag the appropriate service to its definition.",
    pairs: [
      { item: "Application Service", match: "Logical representation of a deploy system or application stack." },
      { item: "Technology Management Service (Technical Service)", match: "Published to Service Owners and underpins one or more business or application Services." },
      { item: "Business Service", match: "Published to Business Users and underpins one or more business capabilities." }
    ],
  },

  {
    type: "single",
    question: "A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. What is a benefit of this dashboard?",
    options: [
      "Provides the ability to configure health-related metrics",
      "Provides key health-related metrics to make decisions",
      "Provides the ability to resolve certification policy tasks"
    ],
    answer: "Provides key health-related metrics to make decisions",
  },

  {
    type: "single",
    question: "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
    options: [
      "To identify CI attributes from multiple data sources",
      "To ingest data from multiple data sources using Service Graph Connector(s)",
      "To ingest data from multiple data sources using Import Set(s)",
      "To populate the CMDB from multiple data sources"
    ],
    answer: "To identify CI attributes from multiple data sources",
  },

  {
    type: "single",
    question: "The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type would the team create?",
    options: [
      "Attestation",
      "Delete",
      "Retire",
      "Archive",
      "Certification"
    ],
    answer: "Attestation",
  },

  {
    type: "single",
    question: "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. How does the Administrator achieve this?",
    options: [
      "Configure and run a custom de-duplication background script",
      "Create and run a de-duplication template",
      "Create de-duplication tasks manually and remediate each",
      "Utilize the Duplicate CI Remediator Wizard"
    ],
    answer: "Create and run a de-duplication template",
  },

  {
    type: "single",
    question: "A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?",
    options: [
      "glide.identification_engine.multisource_enabled",
      "glide.identification_engine.multisource.query.max.limit",
      "glide.identification_engine.multisource_cmdb_ci_enabled",
      "glide.identification_engine.multisource_non_cmdb_ci_enabled"
    ],
    answer: "glide.identification_engine.multisource_enabled",
  },

  {
    type: "single",
    question: "A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature will show that information?",
    options: [
      "Integration Hub",
      "CMDB Integrations Dashboard",
      "IntegrationHub ETL"
    ],
    answer: "IntegrationHub ETL",
  },

  {
    type: "multi",
    question: "A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature?",
    options: [
      "Offers insight into the downstream impacts of poorly performing metrics",
      "Offers remediation templates to improve poorly performing metrics",
      "Offers remediation options to address and improve poorly performing metrics",
      "Offers automated scripts to resolve poorly performing metrics"
    ],
    answer: ["Offers remediation templates to improve poorly performing metrics","Offers remediation options to address and improve poorly performing metrics"],
  },

  {
    type: "single",
    question: "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager: Managed by Group = Enterprise IT Services. Technical Service Offering: Managed by Group = Windows Support, Change Group = Change Management Team. What would be the Managed By Group for CIs from this class based on the configured values?",
    options: [
      "Enterprise IT Services",
      "Change Management Team",
      "Windows Support"
    ],
    answer: "Windows Support",
  },

  {
    type: "single",
    question: "A Configuration Management team has successfully developed a healthy and trusted CMDB. Which field on a Change Request form is automatically populated after a CI is selected that references an appropriate change group?",
    options: [
      "Managed by Group",
      "Change Group",
      "Assignment Group",
      "Support Group",
      "Assigned to"
    ],
    answer: "Assignment Group",
  },

  {
    type: "multi",
    question: "A Windows administration team wants a grouping of CIs using CMDB groups. Which methods can be used?",
    options: [
      "Tag-based queries",
      "Encoded queries",
      "Scripted queries",
      "Saved queries"
    ],
    answer: ["Saved queries","Encoded queries"],
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class. How are these rules utilized by the IRE?",
    options: [
      "To narrow the scope of CIs included in the identification process",
      "To reduce the data ingested into the CMDB",
      "To reconcile specific attributes based on data sources"
    ],
    answer: "To narrow the scope of CIs included in the identification process",
  },

  {
    type: "single",
    question: "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?",
    options: [
      "Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application.",
      "Create fields on the Business Application record to mark the Business Application as containing patient information, and then ask the Business Application owner to mark the application as having patient information or not.",
      "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner."
    ],
    answer: "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner.",
  },

  {
    type: "single",
    question: "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
    options: [
      "Promotion",
      "Verification",
      "Attestation",
      "Certification"
    ],
    answer: "Attestation",
  },

  {
    type: "single",
    question: "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt. Which is the starting prefix for all custom CMDB tables?",
    options: [
      "cmdb_ci",
      "u_cmdb_ci",
      "u_ci_cmdb",
      "ci_cmdb"
    ],
    answer: "u_cmdb_ci",
  },

  {
    type: "multi",
    question: "ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management?",
    options: [
      "Mapped services provide visibility to users consuming the service",
      "Binding of alerts to specific CIs",
      "Correlation of alerts to knowledge base articles",
      "Mapped services provide visibility to the business impact of an alert"
    ],
    answer: ["Binding of alerts to specific CIs","Mapped services provide visibility to the business impact of an alert"],
  },

  {
    type: "multi",
    question: "A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class?",
    options: [
      "API Integrations",
      "IRE Application",
      "CI Class Manager",
      "CI Identifiers module"
    ],
    answer: ["CI Class Manager","CI Identifiers module"],
  },

  {
    type: "single",
    question: "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. What CSDM domain should the inventory management team map the catalog item to?",
    options: [
      "Design and Planning (Design)",
      "Build and Integration (Build)",
      "Service Delivery (Manage Technical Service)",
      "Foundation",
      "Service Consumption (Sell/Consume)"
    ],
    answer: "Service Consumption (Sell/Consume)",
  },

  {
    type: "single",
    question: "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities. Which CSDM 5 domain is used?",
    options: [
      "Foundation",
      "Build and Integration (Build)",
      "Design and Planning (Design)",
      "Service Consumption (Sell/Consume)",
      "Service Delivery (Manage Technical)"
    ],
    answer: "Design and Planning (Design)",
  },

  {
    type: "single",
    question: "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. Which field is used to calculate the duration of this metric?",
    options: [
      "Last modified on (last_modified)",
      "Created (sys_created_on)",
      "Updated (sys_updated_on)",
      "First discovered (first_discovered)",
      "Most recent discovery (last_discovery)"
    ],
    answer: "Updated (sys_updated_on)",
  },

  {
    type: "single",
    question: "A CMDB Architect intends to populate the CMDB using the CSDM guidance. Which key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl Stage?",
    options: [
      "Business Service Manager, Technology Service Owner",
      "Application Owner, Application Service Owner",
      "Customer Service Manager, Infrastructure Manager"
    ],
    answer: "Business Service Manager, Technology Service Owner",
  },

  {
    type: "single",
    question: "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. How can Playbooks assist the Administrator in resolving these issues?",
    options: [
      "Playbooks can automatically track common CMDB issues and output metrics.",
      "Playbooks can be installed in the instance to automatically fix issues.",
      "Playbooks can help analyze and fix issues."
    ],
    answer: "Playbooks can help analyze and fix issues.",
  },

  {
    type: "single",
    question: "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI. Which panel will give the manager visibility and details?",
    options: [
      "Overview",
      "Application services",
      "Related items",
      "Attributes"
    ],
    answer: "Related items",
  },

  {
    type: "single",
    question: "A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on. What stage of CSDM would map this relationship?",
    options: [
      "Fly",
      "Crawl",
      "Foundation",
      "Run",
      "Walk"
    ],
    answer: "Run",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to track which CIs and CI classes are missing key data. Which CMDB Health Dashboard scorecard supports tracking this requirement?",
    options: [
      "Compliance",
      "Correctness",
      "Completeness"
    ],
    answer: "Completeness",
  },

  {
    type: "single",
    question: "During a CMDB implementation, a team member is tasked with ensuring the accuracy and completeness of CI data. This person is also responsible for maintaining data quality and resolving discrepancies. Which role is responsible for these tasks?",
    options: [
      "Service Owner",
      "CMDB Architect",
      "Configuration Manager",
      "IT Asset Manager"
    ],
    answer: "Configuration Manager",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs insights into how their CMDB is configured according to ServiceNow recommended practice. Which should be used?",
    options: [
      "CMDB Data Foundation Dashboard",
      "CMDB Workspace",
      "CMDB Health Dashboard",
      "CMDB Data Manager"
    ],
    answer: "CMDB Data Foundation Dashboard",
  },

  {
    type: "single",
    question: "A customer wants to model their business applications and would like to capture different types of data that includes Personally Identifiable Information (PII) data. Based on these requirements, which CMDB class needs to be leveraged to achieve this?",
    options: [
      "Business Capability",
      "API Component",
      "Information Object",
      "Data Classification"
    ],
    answer: "Information Object",
  },

  {
    type: "multi",
    question: "A CMDB Administrator needs to create a new CI class for the Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this specific activity?",
    options: [
      "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
      "Modify an existing class",
      "Add a new class under an appropriate parent class",
      "Delete an unused class, and replace it with the new one"
    ],
    answer: ["Install or update the CMDB CI Class Models store application, and verify the class does not already exist","Add a new class under an appropriate parent class"],
  },

  {
    type: "single",
    question: "A CMDB Data Manager needs to access the ServiceNow platform to create, publish, and manage policies that automate and govern CI lifecycle operations, ensuring the CMDB remains healthy and efficient. Where can the Data Manager do this?",
    options: [
      "CMDB Workspace CMDB 360 tab",
      "Service Operations Workspace",
      "CI Class Manager",
      "CMDB Workspace Management tab"
    ],
    answer: "CMDB Workspace Management tab",
  },

  {
    type: "single",
    question: "What ensures data volume in the CMDB is manageable?",
    options: [
      "Scheduled Jobs",
      "Business Rules",
      "Archive Policies"
    ],
    answer: "Archive Policies",
  },

  {
    type: "multi",
    question: "Which are business values of CMDB?",
    options: [
      "Collecting and managing financial data",
      "Streamlining incident and change management",
      "Strengthening operational resiliency",
      "Automating maintenance for CI relationships"
    ],
    answer: ["Streamlining incident and change management","Strengthening operational resiliency"],
  },

  {
    type: "multi",
    question: "Which ServiceNow solution creates automatic relationships?",
    options: [
      "Discovery",
      "Workflow Studio",
      "Service Mapping",
      "IntegrationHub ETL"
    ],
    answer: ["Discovery","Service Mapping"],
  },

  {
    type: "drag",
    question: "A CMDB Owner starts on the CSDM journey and needs to become familiar with the CSDM domains. Drag the CMDB objects to the correct CSDM domains.",
    pairs: [
      { item: "Business Application", match: "Design and Planning domain" },
      { item: "Business Process", match: "Foundation domain" },
      { item: "Application Service", match: "Service Delivery domain" },
      { item: "Business Service", match: "Sell / Consume domain" }
    ],
  },

  {
    type: "single",
    question: "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?",
    options: [
      "onComplete",
      "onBefore",
      "onStart",
      "onAfter"
    ],
    answer: "onBefore",
  },

  {
    type: "multi",
    question: "A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel?",
    options: [
      "Discovery source",
      "Managed by group",
      "Business criticality",
      "CI type"
    ],
    answer: ["Discovery source","CI type"],
  },

  {
    type: "single",
    question: "In a company there is a need to understand the CSDM maturity level needed. Which use case requires information objects?",
    options: [
      "The Asset Management team wants to understand the asset life cycle compliancy in a Business Application context.",
      "The SecOps team wants to understand the operational risk in the Business Application context.",
      "The Business Service Management team wants to understand the operational impact for their consumer parties.",
      "The Event Operations team wants to automate their events into incident for operational actions.",
      "The Customer Service team wants to onboard pro-active case management."
    ],
    answer: "The SecOps team wants to understand the operational risk in the Business Application context.",
  },

  {
    type: "single",
    question: "A customer wants recently imported server records to be automatically reclassified into more specific CMDB classes after being discovered using ServiceNow Discovery. During the discovery process, if existing Server [cmdb_ci_server] records are reclassified into the Linux [cmdb_ci_linux_server] and Windows Server [cmdb_ci_win_server] classes, which reclassification operation occurred?",
    options: [
      "Class Switch",
      "Class Downgrade",
      "Class Upgrade"
    ],
    answer: "Class Upgrade",
  },

  {
    type: "single",
    question: "A CMDB Administrator is reviewing the health of the CMDB and notices a large percentage of the Hardware CIs are missing serial numbers. The Administrator is concerned this may cause duplicate CIs and would like to resolve the issue in a timely manner. What structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue?",
    options: [
      "CSDM Now Create Playbooks",
      "CMDB Data Foundations Dashboard Playbooks",
      "CMDB Health Dashboard Playbooks",
      "CSDM Data Foundations Dashboard Playbooks"
    ],
    answer: "CMDB Data Foundations Dashboard Playbooks",
  },

  {
    type: "single",
    question: "A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use?",
    options: [
      "Service Delivery (Manage Technical)",
      "Foundation",
      "Build and Integration (Build)",
      "Design and Planning (Design)",
      "Service Consumption (Sell/Consume)"
    ],
    answer: "Service Delivery (Manage Technical)",
  },

  {
    type: "multi",
    question: "The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard?",
    options: [
      "It provides actionable insights to improve data quality and completeness.",
      "It enables monitoring and tracking of CMDB health over time.",
      "It automates the approval process for change management.",
      "It helps detect and eliminate duplicate records in the CMDB."
    ],
    answer: ["It provides actionable insights to improve data quality and completeness.","It enables monitoring and tracking of CMDB health over time."],
  },

  {
    type: "drag",
    question: "A manufacturing organization has implemented Incident Management in ServiceNow and wants to integrate additional products to enhance its functionality. Drag each ServiceNow product to the value it brings to supporting Incident Management.",
    pairs: [
      { item: "Hardware Asset Management", match: "Delivers asset actions and events for the management and maintenance of assets during incidents" },
      { item: "Risk Management", match: "Supplies critical IT and financial risk data, enabling the team to assess the broader impact of incidents on business operations" },
      { item: "Discovery", match: "Offers detailed operational-level data on hardware and application CIs to improve incident resolution" },
      { item: "Service Portfolio Management", match: "Provides life cycle information about services, helping to align incidents with the status and history of services" }
    ],
  },

  {
    type: "single",
    question: "A Configuration Manager is planning the implementation of the CMDB. Which is the prescribed CSDM rollout order?",
    options: [
      "Initiate, Plan, Execute, Deliver, Close",
      "Architecture, Business, Technical, Governance",
      "Foundation, Crawl, Walk, Run, Fly",
      "Initial, Developing, Defined, Managed"
    ],
    answer: "Foundation, Crawl, Walk, Run, Fly",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to import external data into the CMDB. The Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, ensuring that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
    options: [
      "Import Sets and Transform Maps",
      "IntegrationHub ETL",
      "Table API (REST API or SOAP API)"
    ],
    answer: "IntegrationHub ETL",
  },

  {
    type: "single",
    question: "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    options: [
      "Automates the enforcement of relationship rules between CIs in the CMDB",
      "Automates the archival and deletion of records based on retention policies",
      "Encrypts archived records for enhanced security"
    ],
    answer: "Automates the archival and deletion of records based on retention policies",
  },

  {
    type: "multi",
    question: "The following Reconciliation Rules were configured for ServiceNow (priority 100), Altiris (priority 200), and SCCM (priority 300) for Windows Server [cmdb_ci_win_server]. Which are true?",
    options: [
      "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM.",
      "Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server [cmdb_ci_win_server] table.",
      "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table.",
      "Data collected with a discovery source of SCCM can update any record in the Windows Server [cmdb_ci_win_server] table because it has the highest priority number."
    ],
    answer: ["Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM.","Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table."],
  },

  {
    type: "single",
    question: "A CMDB Manager wants to improve data quality using the CMDB Health Dashboard. What needs to happen to generate CMDB health scores?",
    options: [
      "The scheduled jobs for the CMDB Health Dashboard must be activated",
      "Nothing, CMDB health scores are calculated by default",
      "The plugin, CMDB health calculation, needs to be installed"
    ],
    answer: "The scheduled jobs for the CMDB Health Dashboard must be activated",
  },

  {
    type: "single",
    question: "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan CI and Stale CI metrics. Which scorecard provides this information on the CMDB Health Dashboard?",
    options: [
      "Correctness",
      "Compliance",
      "Completeness"
    ],
    answer: "Correctness",
  },

  {
    type: "multi",
    question: "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used?",
    options: [
      "Govern Data",
      "Report Data",
      "Fix Data"
    ],
    answer: ["Govern Data","Fix Data"],
  },

  {
    type: "single",
    question: "The following identification rule is defined (Serial Number: serial_number, serial_number_type @100; Hardware: serial_number @200; Hardware: name @300; Network Adapter: mac_address, name @400). Two new CI records are imported: CI1 has a name matching an existing CI record; CI2 has an IP address matching an existing CI record. Which is correct?",
    options: [
      "CI1 will be inserted as new record and CI2 will be updated with matching record.",
      "CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "CI1 and CI2 both will be updated with matching records.",
      "CI1 and CI2 both will be inserted as new records."
    ],
    answer: "CI1 will be updated with matching record and CI2 will be inserted as new record.",
  },

  {
    type: "single",
    question: "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
    options: [
      "Percentage of Custom Status Values for CI Life Cycle Stages",
      "Named Product Models without Product Owners",
      "Locations without a Parent Location",
      "Application Services with Business Application Relationships"
    ],
    answer: "Application Services with Business Application Relationships",
  },

  {
    type: "drag",
    question: "Some steps need to be taken to transition from using different status attributes in the CMDB to life cycle objects. Drag and drop the objects/attributes to the description.",
    pairs: [
      { item: "life_cycle_mapping", match: "This table is pre-populated with mappings for legacy status values, based on its table, to the best-fit CSDM life-cycle value pair." },
      { item: "life_cycle_stage", match: "This is a record attribute that reflects a meta-level state of the record in its life cycle." },
      { item: "life_cycle_stage_status", match: "This is a record attribute that reflects a sub-level state of the record in its life cycle." },
      { item: "life_cycle_object", match: "This table uses the type of CI (hardware, document, logical, etc.) to determine which sub-level life cycle state values are available." }
    ],
  },

  {
    type: "single",
    question: "Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
    options: [
      "A new Apache Web Server CI is created.",
      "The Apache Web Server CI will be reclassified as a Web Server CI.",
      "The existing Apache Web Server CI will be reconciled and its version will be updated.",
      "A duplication error will occur."
    ],
    answer: "The existing Apache Web Server CI will be reconciled and its version will be updated.",
  },

  {
    type: "single",
    question: "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. As a result, which base system field on the incident form will be automatically populated after selecting a CI?",
    options: [
      "Change group",
      "Assignment group",
      "Managed by group",
      "Approval group"
    ],
    answer: "Assignment group",
  },

  {
    type: "single",
    question: "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
    options: [
      "CMDB Health Dashboard",
      "De-duplication templates",
      "CMDB Data Manager"
    ],
    answer: "CMDB Data Manager",
  },

  {
    type: "single",
    question: "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    options: [
      "Compliance",
      "Audit",
      "Attestation",
      "Certification"
    ],
    answer: "Certification",
  },

  {
    type: "multi",
    question: "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)?",
    options: [
      "Network devices in the DMZ",
      "Devices in secure environments",
      "Servers in the data center",
      "Devices that intermittently connect to the network"
    ],
    answer: ["Devices in secure environments","Devices that intermittently connect to the network"],
  },

  {
    type: "single",
    question: "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
    options: [
      "Configure data refresh rules with a specific time period",
      "Assign a priority to each data source in the reconciliation rules",
      "Manually run the data source updates in the correct order",
      "Assign a run order to each data source in the identification rules"
    ],
    answer: "Assign a priority to each data source in the reconciliation rules",
  },

  {
    type: "single",
    question: "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal?",
    options: [
      "Delete",
      "Attestation",
      "Certification",
      "Retire"
    ],
    answer: "Attestation",
  },

  {
    type: "multi",
    question: "A CMDB Administrator wants to create a CMDB query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions does the company take to build this query?",
    options: [
      "Add a filter to the database node for location = Seattle",
      "Add to the canvas the Incident table from the Non-CMDB Tables list",
      "Set the relationship level to 'Up to 2nd level relationships'",
      "Add property columns to the application service node"
    ],
    answer: ["Add a filter to the database node for location = Seattle","Add to the canvas the Incident table from the Non-CMDB Tables list"],
  },

  {
    type: "single",
    question: "A CMDB Administrator identifies duplicate CIs. One was created by a manual import, and the other one was created by automated discovery. The discovered CI has the latest IP address, while the manually imported CI has an accurate relationship to a critical business application. How does the Administrator use the Duplicate CI Remediator to resolve this issue?",
    options: [
      "Merge the two CIs automatically, retaining all attributes from the discovered CI",
      "Retain the discovered CI, and delete the manually imported CI",
      "Retain the discovered CI, but merge the relationship from the manually imported CI",
      "Retain the manually imported CI, and delete the discovered CI"
    ],
    answer: "Retain the discovered CI, but merge the relationship from the manually imported CI",
  },

  {
    type: "multi",
    question: "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?",
    options: [
      "Determine the root cause of the change issue",
      "Identify blackout windows for the change",
      "Understand the impact of the change on services",
      "Route the change dynamically"
    ],
    answer: ["Understand the impact of the change on services","Route the change dynamically"],
  },

  {
    type: "drag",
    question: "A new ServiceNow customer is assembling a Configuration Management team to support their CMDB. Drag each role to its corresponding job description.",
    pairs: [
      { item: "CI Analyst", match: "Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards" },
      { item: "Service or Product Owner", match: "Accountable for managing all elements that make up a portfolio throughout their entire lifecycle" },
      { item: "Configuration Manager/CMDB Admin", match: "Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records" },
      { item: "CMDB Process Owner", match: "Obtains highest level role for CMDB privileges" }
    ],
  },

  {
    type: "single",
    question: "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store the information that will be used to satisfy the audits?",
    options: [
      "Customer Service Offerings and Databases",
      "Business Applications and Information Objects",
      "Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups"
    ],
    answer: "Business Applications and Information Objects",
  },

  {
    type: "multi",
    question: "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundation Dashboard. Which benefits support the decision to continually monitor the results on this dashboard?",
    options: [
      "Provides metrics for CIs Processed by the IRE",
      "Reports on all orphan CIs in the CMDB",
      "Provides metrics on active CIs updated in the last 90 days",
      "Provides a list of all CIs that failed health audits"
    ],
    answer: ["Provides metrics for CIs Processed by the IRE","Provides metrics on active CIs updated in the last 90 days"],
  },

  {
    type: "single",
    question: "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
    options: [
      "CI Class Manager",
      "CMDB Workspace",
      "CMDB Data Manager"
    ],
    answer: "CMDB Workspace",
  },

  {
    type: "single",
    question: "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
    options: [
      "CMBD 360/Multisource is a platform product that can be used immediately.",
      "ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules.",
      "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."
    ],
    answer: "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled.",
  },

  {
    type: "single",
    question: "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
    options: [
      "Many-to-one",
      "Many-to-many",
      "One-to-many",
      "One-to-one"
    ],
    answer: "Many-to-many",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
    options: [
      "Use the CSDM Data Foundations Dashboard",
      "Use the default configured CMDB Health Dashboard",
      "Start the ServiceNow Health Scan"
    ],
    answer: "Use the CSDM Data Foundations Dashboard",
  },

  {
    type: "single",
    question: "What is the difference between Data Certification and Attestation policies when managing a CI?",
    options: [
      "Attestation can be scheduled, while Data Certification cannot be scheduled.",
      "Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists.",
      "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
      "Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual."
    ],
    answer: "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
  },

  {
    type: "single",
    question: "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
    options: [
      "Enterprise Architect",
      "Application Service Owners",
      "Technology Service Owners"
    ],
    answer: "Technology Service Owners",
  },

  {
    type: "single",
    question: "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    options: [
      "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      "Improves the implementation velocity of APM Foundation for future business application rationalization",
      "Enables impact assessments for incident, problem, and change on Business Services"
    ],
    answer: "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
  },

  {
    type: "single",
    question: "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    options: [
      "All",
      "Child",
      "Added",
      "Derived"
    ],
    answer: "Added",
  },

  {
    type: "single",
    question: "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers. For the Duplicate metric, it shows Healthy CIs/Evaluated as 59,000/60,000. For the Orphan metric, it shows Healthy CIs/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server CIs (60,000 vs. 50,000) evaluated between the two metrics?",
    options: [
      "The Orphan metric has a CMDB Group configured for the Server class.",
      "The Duplicate metric has a Health Inclusion rule configured for the Server class.",
      "The Orphan metric has a Health Inclusion rule configured for the Server class.",
      "The Duplicate metric has a CMDB Group configured for the Server class."
    ],
    answer: "The Orphan metric has a Health Inclusion rule configured for the Server class.",
  },

  {
    type: "single",
    question: "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
    options: [
      "Service Offerings by Department or Location",
      "Affected CI [task_ci] related list",
      "Application Service environment attribute",
      "Incident history of similar CIs"
    ],
    answer: "Service Offerings by Department or Location",
  },

  {
    type: "single",
    question: "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
    options: [
      "Create a business rule",
      "Create a scheduled job",
      "Create an archive policy"
    ],
    answer: "Create an archive policy",
  },

  {
    type: "single",
    question: "The CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given discovery sources: Tivoli=4096, ServiceNow=4096, LANDesk=2048, Altiris=8192. Which value would be added to the CMDB for RAM for a 'Server' CI?",
    options: [
      "2,048 MB",
      "4,096 MB",
      "8,192 MB"
    ],
    answer: "8,192 MB",
  },

  {
    type: "single",
    question: "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
    options: [
      "The upgrade stops and reports an error.",
      "A skipped change is created and no change is made to the script transform definition.",
      "The Service Graph Connector upgrade refuses to start."
    ],
    answer: "A skipped change is created and no change is made to the script transform definition.",
  },

  {
    type: "multi",
    question: "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. A CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
    options: [
      "Most Reported",
      "Last Created",
      "Last Updated",
      "Smallest Value"
    ],
    answer: ["Most Reported","Smallest Value"],
  },

  {
    type: "multi",
    question: "Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are in the CMDB Health Dashboard?",
    options: [
      "Downgraded CIs",
      "Duplicate CIs",
      "Missing CIs",
      "Stale CIs",
      "Upgraded CIs"
    ],
    answer: ["Duplicate CIs","Stale CIs"],
  },

  {
    type: "single",
    question: "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
    options: [
      "To understand the business impact of CIs",
      "To understand the physical location of CIs",
      "To identify which devices will go offline first"
    ],
    answer: "To understand the business impact of CIs",
  },

  {
    type: "multi",
    question: "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group?",
    options: [
      "Approval Group",
      "Managed by Group",
      "Support Group",
      "Owned by Group"
    ],
    answer: ["Managed by Group","Support Group"],
  },

  {
    type: "multi",
    question: "A Configuration Management Process Owner is preparing solution options for ingesting custom CIs to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
    options: [
      "Repurposing a base CI class and rename attributes, as required",
      "Extending an existing Asset class table to accommodate the custom CI class attributes",
      "Extending an existing CI class table to accommodate the custom CI class attributes",
      "Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class accommodating any new attributes"
    ],
    answer: ["Extending an existing CI class table to accommodate the custom CI class attributes","Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class accommodating any new attributes"],
  },

  {
    type: "single",
    question: "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    options: [
      "CMDB Data Manager",
      "CI Class Manager",
      "System Properties",
      "CMDB Workspace"
    ],
    answer: "CI Class Manager",
  },

  {
    type: "single",
    question: "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    options: [
      "data_classification_admin and personalize_dictionary",
      "cmdb_inst_admin and personalize_form",
      "itil_admin and personalize_form",
      "sn_cmdb_admin and personalize_dictionary"
    ],
    answer: "sn_cmdb_admin and personalize_dictionary",
  },

  {
    type: "single",
    question: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    options: [
      "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
      "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
    ],
    answer: "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
  },

  {
    type: "single",
    question: "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
    options: [
      "Managed By Group",
      "Approval Group",
      "Support Group",
      "Change Group"
    ],
    answer: "Managed By Group",
  },

  {
    type: "drag",
    question: "Drag and drop the CMDB Health Dashboard metric to the description. (Set 3)",
    pairs: [
      { item: "Duplicate", match: "CMDB records that represent the same physical or logical asset multiple times" },
      { item: "Required", match: "Fields necessary to create or update a CI record in the CMDB" },
      { item: "Orphan", match: "CMDB records that no longer maintain their logical or physical relationships with other CIs" },
      { item: "Stale", match: "CMDB records that are no longer actively updated, but remain stored in the database" },
      { item: "Recommended", match: "Fields that support the accuracy, completeness, and usability of CI records in the CMDB" }
    ],
  },

  {
    type: "single",
    question: "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    options: [
      "Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "Certification Filter, Certification Template, Audit",
      "Stale, Orphan, Duplicate",
      "Certification Policies, Data Filters, Scheduled Jobs"
    ],
    answer: "Certification Filter, Certification Template, Audit",
  },

  {
    type: "single",
    question: "The CMDB Administrator has set-up two Dynamic Reconciliation Rules. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. Given discovery sources: Tivoli=4,096 MB, ServiceNow=4,096 MB, LANDesk=2,048 MB, Altiris=8,192 MB. Which value would be added to the CMDB for RAM for a 'Server' CI?",
    options: [
      "4,096 MB",
      "2,048 MB",
      "8,192 MB"
    ],
    answer: "8,192 MB",
  },

  {
    type: "single",
    question: "The Apache Web Server Identification Rule is configured with Criterion attributes: Class, Configuration file, Version. Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
    options: [
      "The Apache Web Server CI will be reclassified as a Web Server CI.",
      "A duplication error will occur.",
      "A new Apache Web Server CI is created.",
      "The existing Apache Web Server CI will be reconciled and its version will be updated."
    ],
    answer: "The existing Apache Web Server CI will be reconciled and its version will be updated.",
  },

  {
    type: "single",
    question: "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases. Which use case requires information objects?",
    options: [
      "The Event Operations team wants to automate their events into incident for operational actions.",
      "The Asset Management team wants to understand the asset life cycle compliancy in a Business Application context.",
      "The SecOps team wants to understand the operational risk in the Business Application context.",
      "The Business Service Management team wants to understand the operational impact for their consumer parties.",
      "The Customer Service team wants to onboard pro-active case management."
    ],
    answer: "The SecOps team wants to understand the operational risk in the Business Application context.",
  },

  {
    type: "single",
    question: "An identification rule for a CI class is defined (Hardware Rule: serial_number,serial_number_type @100; Hardware: serial_number @200; Hardware: name @300; Network Adapter: mac_address,name @400). Two new CI records are imported: CI1's name matches an existing CI; CI2's IP address matches an existing CI. Which is correct?",
    options: [
      "CI1 and CI2 both will be inserted as new records.",
      "CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "CI1 will be inserted as new record and CI2 will be updated with matching record.",
      "CI1 and CI2 both will be updated with matching records."
    ],
    answer: "CI1 will be updated with matching record and CI2 will be inserted as new record.",
  },

  {
    type: "single",
    question: "A CMDB Configuration Manager is reviewing metrics on the CMDB Health Dashboard Correctness Scorecard for the Server class (total 60,000 servers). Duplicate metric: Healthy/Evaluated = 59,000/60,000. Orphan metric: Healthy/Evaluated = 45,000/50,000. Which configuration explains the difference in scope (60,000 vs 50,000) between the two metrics?",
    options: [
      "The Orphan metric has a CMDB Group configured for the Server class.",
      "The Orphan metric has a Health Inclusion rule configured for the Server class.",
      "The Duplicate metric has a CMDB Group configured for the Server class.",
      "The Duplicate metric has a Health Inclusion rule configured for the Server class."
    ],
    answer: "The Orphan metric has a Health Inclusion rule configured for the Server class.",
  },

  {
    type: "multi",
    question: "The following Reconciliation Rules were configured — ServiceNow: Windows Server [cmdb_ci_win_server] priority 100; Altiris: priority 200; SCCM: priority 300. Which are true?",
    options: [
      "Data collected with a discovery source of SCCM can update any record in the Windows Server [cmdb_ci_win_server] table because it has the highest priority number.",
      "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM.",
      "Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server [cmdb_ci_win_server] table.",
      "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table."
    ],
    answer: ["Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM.","Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table."],
  }

];
