import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "factoryassist-ai",
    title: "FactoryAssist AI",
    subtitle: "AI-Powered Predictive Maintenance Assistant",
    category: ["AI", "Predictive Maintenance", "Manufacturing"],
    description:
      "An AI-powered maintenance solution that combines machine data, maintenance history, SOP documentation, analytics, and generative AI to help teams investigate failures and make better maintenance decisions.",
    technologies: ["Python", "Streamlit", "AWS", "Amazon Bedrock", "RAG", "Generative AI", "Pandas", "Git", "GitHub"],
    featured: true,
    image: "/projects/factoryassist/cover.png",
    caseStudy: {
      overview:
        "FactoryAssist AI is a maintenance intelligence prototype designed to help manufacturing teams analyze equipment history, investigate recurring failures, interact with maintenance documentation, and receive AI-assisted recommendations through a unified interface.",
      businessProblem: [
        "Maintenance teams often work across fragmented sources such as machine records, maintenance logs, SOP documents, and technician knowledge.",
        "Identifying recurring failure patterns can require manually reviewing historical maintenance events.",
        "Technical procedures may be stored inside documents that are time-consuming to search during maintenance scenarios.",
        "Existing dashboards can show what happened, but may not explain what action should be taken next.",
        "Teams need faster access to maintenance context, historical patterns, and relevant procedures.",
      ],
      objective:
        "Design a practical AI-assisted maintenance experience that combines structured maintenance data, historical failure analysis, technical documentation, and generative AI to support faster and more informed maintenance decisions.",
      role: [
        "Translated the maintenance use case into a structured digital solution concept.",
        "Worked on the application structure and user experience for dashboard, AI assistant, document intelligence, recommendations, and reporting.",
        "Structured machine and maintenance-log data used by the prototype.",
        "Designed AI interaction scenarios around recurring failures, machine history, and SOP-based questions.",
        "Worked on the RAG-oriented document assistant approach for retrieving relevant SOP information.",
        "Helped shape the solution architecture, business story, demo journey, and implementation feasibility narrative.",
        "Supported development and iteration of the prototype using AI-assisted development tools and AWS services.",
      ],
      solution:
        "The prototype brings multiple maintenance workflows into one experience: operational analytics, machine-level insights, conversational AI, SOP document assistance, smart recommendations, and automated report generation.",
      architecture: [
        { title: "Machine Master Data", description: "Structured equipment and asset information" },
        { title: "Maintenance Logs", description: "Historical maintenance event records" },
        { title: "SOP Documents", description: "Standard operating procedures and technical documentation" },
        { title: "Data & Retrieval Layer", description: "Data processing and document retrieval infrastructure" },
        { title: "AI / Analytics Layer", description: "Generative AI, RAG, and analytical processing" },
        { title: "FactoryAssist AI", description: "Unified application interface" },
        { title: "Dashboard", description: "Operational analytics and KPIs" },
        { title: "AI Copilot", description: "Conversational maintenance assistant" },
        { title: "Document Assistant", description: "SOP retrieval with source-oriented answers" },
        { title: "Smart Recommendations", description: "Context-aware maintenance suggestions" },
        { title: "Report Generator", description: "Automated maintenance report creation" },
      ],
      features: [
        {
          title: "Operations Dashboard",
          description:
            "Provides machine status, downtime trends, maintenance activity, and failure-related insights in a consolidated operational view.",
          icon: "BarChart3",
        },
        {
          title: "AI Copilot",
          description:
            "Allows users to ask maintenance questions in natural language and investigate machine history or recurring failure patterns.",
          icon: "MessageSquare",
        },
        {
          title: "Document Assistant",
          description:
            "Uses maintenance documentation such as SOPs to provide contextual answers with source-oriented retrieval.",
          icon: "FileText",
        },
        {
          title: "Smart Recommendations",
          description:
            "Surfaces maintenance recommendations based on historical patterns, machine context, and identified issues.",
          icon: "Lightbulb",
        },
        {
          title: "Report Generator",
          description:
            "Transforms maintenance data and observations into structured maintenance summaries and reports.",
          icon: "ClipboardList",
        },
        {
          title: "Machine-Level Story",
          description:
            "Allows a user to move from a machine-level issue to failure history, relevant documentation, and recommended action within one workflow.",
          icon: "Workflow",
        },
      ],
      screenshots: [
        { title: "Operations Center", alt: "FactoryAssist AI operations dashboard showing machine status and KPIs" },
        { title: "AI Copilot", alt: "Conversational AI interface for maintenance queries" },
        { title: "Document Assistant", alt: "SOP document retrieval and contextual answers" },
        { title: "Smart Recommendations", alt: "AI-generated maintenance recommendations view" },
        { title: "Report Generator", alt: "Automated maintenance report generation interface" },
      ],
      techGroups: [
        { label: "AI", items: ["Amazon Bedrock", "RAG", "Generative AI"] },
        { label: "Development", items: ["Python", "Streamlit"] },
        { label: "Data", items: ["Pandas"] },
        { label: "Platform", items: ["AWS", "GitHub"] },
      ],
      businessValue: [
        "Brings fragmented maintenance context into one experience.",
        "Makes historical maintenance patterns easier to investigate.",
        "Improves accessibility of technical documentation through natural-language interaction.",
        "Demonstrates how generative AI can augment—not replace—maintenance decision-making.",
        "Creates a foundation for future predictive and prescriptive maintenance capabilities.",
      ],
      challenges: [
        {
          challenge: "Maintenance questions can require both structured data and document knowledge.",
          decision: "Separate structured maintenance-data querying from document retrieval, then compose responses around the user's intent.",
        },
        {
          challenge: "Generative AI can produce overly generic answers.",
          decision: "Use machine context, metadata-aware retrieval, structured prompts, and source-oriented answers to make responses more grounded.",
        },
        {
          challenge: "Prototype development occurred under hackathon constraints.",
          decision: "Prioritize a clear end-to-end maintenance story and modular features over production-scale complexity.",
        },
      ],
      learnings: [
        "Good AI experiences depend heavily on retrieval quality and context design.",
        "Business storytelling is as important as technical capability when presenting an AI solution.",
        "AI should augment established workflows rather than exist as an isolated chatbot.",
        "Prototype architecture should make future integration and scale visible even when the initial build is lightweight.",
      ],
      confidentialityNote:
        "Certain visuals and business details have been simplified or sanitized for confidentiality.",
    },
  },
  {
    slug: "phishing-ai-assistant",
    title: "Phishing AI Assistant",
    subtitle: "AI-Powered Email Threat Analysis",
    category: ["AI", "Cybersecurity", "Automation"],
    description:
      "An AI-assisted cybersecurity prototype designed to analyze suspicious emails, explain phishing indicators in simple language, assign a risk assessment, and recommend appropriate actions for users and security teams.",
    technologies: ["AWS", "Amazon Bedrock", "Lambda", "API Gateway", "Generative AI"],
    featured: true,
    image: "/projects/phishing-ai/cover.png",
    caseStudy: {
      overview:
        "An AI-assisted cybersecurity prototype designed to analyze suspicious emails, explain phishing indicators in simple language, assign a risk assessment, and recommend appropriate actions for users and security teams.",
      businessProblem: [
        "Employees often struggle to determine whether suspicious emails are legitimate or malicious.",
        "Traditional security warnings may identify risk without clearly explaining why an email is suspicious.",
        "Users need actionable guidance rather than technical indicators alone.",
        "Security teams benefit from structured summaries that help prioritize suspicious messages.",
      ],
      objective:
        "Create an AI assistant that makes phishing analysis understandable and actionable by combining threat indicators, risk scoring, explanations, and recommended next steps.",
      role: [
        "Helped translate the phishing-analysis use case into a structured application concept.",
        "Defined user-facing workflows for email analysis, threat overview, mailbox scanning, and executive reporting.",
        "Worked on the business and AI-analysis structure including risk score, indicators, explanation, and recommended action.",
        "Helped define an AWS-oriented architecture for AI analysis.",
        "Designed the demo story and user experience around suspicious-email investigation.",
      ],
      solution:
        "The prototype provides a structured AI-powered email analysis workflow that evaluates suspicious emails, identifies phishing indicators, explains risks in accessible language, and recommends appropriate actions for both end users and security teams.",
      architecture: [
        { title: "Email / User Input", description: "Suspicious email content submitted for analysis" },
        { title: "Application Layer", description: "Frontend interface and user interaction" },
        { title: "API Gateway", description: "Request routing and API management" },
        { title: "AWS Lambda", description: "Serverless compute for analysis orchestration" },
        { title: "Amazon Bedrock", description: "Generative AI for threat analysis" },
        { title: "Threat Analysis", description: "Risk assessment and indicator extraction" },
        { title: "Risk Score", description: "Quantified threat level assessment" },
        { title: "Indicators", description: "Identified suspicious patterns and signals" },
        { title: "Explanation", description: "Human-readable analysis of findings" },
        { title: "Recommended Action", description: "Suggested next steps for the user" },
      ],
      features: [
        {
          title: "Analysis View",
          description:
            "Analyzes suspicious email content and presents risk level, suspicious indicators, explanation, recommended action, and analysis history.",
          icon: "Search",
        },
        {
          title: "Executive Dashboard",
          description:
            "Provides a consolidated view of analyzed emails, threat categories, risk distribution, and suspicious-domain patterns.",
          icon: "BarChart3",
        },
        {
          title: "Mail Scan Concept",
          description:
            "Designed to support connected-mailbox analysis so users can review suspicious messages directly from their inbox workflow.",
          icon: "Mail",
        },
        {
          title: "Security Escalation",
          description:
            "Supports the concept of escalating suspicious messages to the security operations team for further review.",
          icon: "ShieldAlert",
        },
        {
          title: "Phishing Summary",
          description:
            "Provides management-level indicators around phishing activity, risk distribution, user exposure, and campaign patterns.",
          icon: "PieChart",
        },
      ],
      screenshots: [
        { title: "Email Analysis", alt: "Phishing AI email analysis interface showing risk score and indicators" },
        { title: "Threat Dashboard", alt: "Executive dashboard with threat categories and risk distribution" },
        { title: "Mail Scanner", alt: "Connected mailbox scanning interface" },
      ],
      techGroups: [
        { label: "AI", items: ["Amazon Bedrock", "Generative AI"] },
        { label: "Backend", items: ["AWS Lambda", "API Gateway"] },
        { label: "Platform", items: ["AWS"] },
      ],
      businessValue: [
        "Makes phishing indicators easier for non-security users to understand.",
        "Combines technical analysis with clear recommended actions.",
        "Creates a consistent structure for reviewing suspicious emails.",
        "Demonstrates how generative AI can support cybersecurity awareness and triage workflows.",
      ],
      challenges: [
        {
          challenge: "Security-related AI must explain its reasoning rather than only produce a score.",
          decision: "Structure AI output to include indicators, explanation, and actionable next steps alongside the risk score.",
        },
        {
          challenge: "Risk indicators should be presented in language understandable to non-technical employees.",
          decision: "Use plain-language explanations and visual risk levels rather than technical jargon alone.",
        },
        {
          challenge: "AI output should support security processes, not replace security controls.",
          decision: "Position the tool as a triage assistant that supports SOC judgment rather than making autonomous decisions.",
        },
      ],
      learnings: [
        "Security-related AI must explain its reasoning rather than only produce a score.",
        "Risk indicators should be presented in language understandable to non-technical employees.",
        "AI output should support security processes, not replace security controls or SOC judgment.",
        "A structured analysis format builds more user trust than a single risk number.",
      ],
      confidentialityNote:
        "Certain visuals and business details have been simplified or sanitized for confidentiality.",
    },
  },
  {
    slug: "gemba-observation-dashboard",
    title: "Gemba Observation Dashboard",
    subtitle: "Operational Intelligence with Power BI",
    category: ["Data Analytics", "Power BI", "Operations"],
    description:
      "A Power BI analytics solution designed to transform operational observation data into structured KPIs, trend analysis, status visibility, and management-level insights.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "SharePoint", "Excel", "Power Automate"],
    featured: true,
    image: "/projects/gemba/cover.png",
    caseStudy: {
      overview:
        "A Power BI analytics solution designed to transform operational observation data into structured KPIs, trend analysis, status visibility, and management-level insights.",
      businessProblem: [
        "Operational observation data can become difficult to interpret when reporting depends on manual pivots, spreadsheets, and presentation preparation.",
        "Management needs a consistent view of observation volumes, closure status, categories, functions, units, and trends.",
        "Repeated manual reporting increases effort and makes timely decision support harder.",
      ],
      objective:
        "Create an automated and scalable reporting model that converts raw Gemba observation data into an interactive Power BI dashboard and reduces dependence on manual reporting.",
      role: [
        "Worked on the dashboard structure and reporting requirements.",
        "Designed the analytical data model using fact and dimension tables.",
        "Structured key dimensions for users, functions, pain areas, change categories, status, and dates.",
        "Developed KPI and visualization logic for observation tracking and trend analysis.",
        "Worked on Power BI measures, filtering behavior, interaction design, and dashboard usability.",
        "Supported automation concepts for refresh and scheduled management reporting.",
      ],
      solution:
        "A star-schema data model powers an interactive Power BI dashboard that provides management with consistent, automated visibility into operational observations without manual pivot-based reporting.",
      architecture: [
        { title: "Fact_Observations", description: "Central fact table containing observation records" },
        { title: "dim_user", description: "Observer and assignee dimension" },
        { title: "dim_function", description: "Organizational function dimension" },
        { title: "dim_pain_area", description: "Problem categorization dimension" },
        { title: "dim_change", description: "Change category dimension" },
        { title: "dim_status", description: "Observation lifecycle status" },
        { title: "dim_date", description: "Time intelligence dimension" },
      ],
      features: [
        {
          title: "Total Observations KPI",
          description: "Consolidated view of observation volume and activity metrics.",
          icon: "Hash",
        },
        {
          title: "Status Distribution",
          description: "Visual breakdown of open, in-progress, and closed observations.",
          icon: "PieChart",
        },
        {
          title: "Function-wise Analysis",
          description: "Observations segmented by organizational function for targeted review.",
          icon: "Building2",
        },
        {
          title: "Pain Area Analysis",
          description: "Categorization of observations by problem type for pattern identification.",
          icon: "Target",
        },
        {
          title: "Monthly Trends",
          description: "Time-series analysis showing observation volumes and closure rates over time.",
          icon: "TrendingUp",
        },
        {
          title: "Interactive Filtering",
          description: "Cross-filtering and drill-down capabilities for management-level exploration.",
          icon: "Filter",
        },
      ],
      screenshots: [
        { title: "Dashboard Overview", alt: "Gemba observation dashboard showing KPIs and trend charts" },
        { title: "Function Analysis", alt: "Observations broken down by organizational function" },
        { title: "Data Model", alt: "Star schema data model diagram" },
      ],
      techGroups: [
        { label: "Analytics", items: ["Power BI", "DAX", "Power Query"] },
        { label: "Data", items: ["Data Modeling", "Excel"] },
        { label: "Platform", items: ["SharePoint", "Power Automate"] },
      ],
      businessValue: [
        "Transforms operational observation data into a consistent management view.",
        "Reduces reliance on manual pivot-based analysis and presentation preparation.",
        "Improves visibility into trends, status, categories, and areas requiring attention.",
        "Creates a reusable data model for ongoing reporting and decision support.",
      ],
      challenges: [
        {
          challenge: "Dashboard visuals produced different behavior depending on highlight versus filter interactions.",
          decision: "Tune visual interactions deliberately so management views reflect the intended filter context.",
        },
        {
          challenge: "Time-based analysis required a reliable date dimension.",
          decision: "Use a dedicated date table and structured relationships rather than relying on raw date columns alone.",
        },
      ],
      learnings: [
        "A strong semantic model is more important than a visually impressive dashboard.",
        "Visual interaction behavior must be designed intentionally, not left to defaults.",
        "Operational dashboards should emphasize actionability, not just chart volume.",
        "Star schema design enables consistent and performant analytical experiences.",
      ],
    },
  },
  {
    slug: "mom-follow-up-automation",
    title: "MoM Follow-Up Automation",
    subtitle: "Automated Meeting Action Management",
    category: ["Automation", "PMO", "Microsoft 365"],
    description:
      "A Microsoft 365 workflow automation solution designed to track meeting action items, evaluate due dates, send structured reminders, and improve follow-up discipline across recurring action-management processes.",
    technologies: ["Power Automate", "Excel Online", "SharePoint", "Outlook", "Microsoft 365"],
    featured: true,
    image: "/projects/mom-automation/cover.png",
    caseStudy: {
      overview:
        "A Microsoft 365 workflow automation solution designed to track meeting action items, evaluate due dates, send structured reminders, and improve follow-up discipline across recurring action-management processes.",
      businessProblem: [
        "Meeting actions are often tracked manually in spreadsheets.",
        "Manual follow-up makes it easy for upcoming deadlines or overdue actions to be missed.",
        "Different action owners may require reminders at different stages of the due-date lifecycle.",
        "PMO teams need visibility into reminder status, data quality, and eventual escalation.",
      ],
      objective:
        "Automate action-item follow-up while keeping Excel/SharePoint as the familiar business interface and using Power Automate to handle reminder logic, validation, and tracking.",
      role: [
        "Defined the business rules for automated reminders and eligibility.",
        "Structured the action-tracker data model and system-control fields.",
        "Designed date-based reminder logic for pre-due, due-date, and overdue scenarios.",
        "Implemented workflow logic using Power Automate and Microsoft 365 connectors.",
        "Added validation and error-handling requirements for incomplete action data.",
        "Worked on reminder counters, last-reminder tracking, manual trigger logic, and escalation-ready fields.",
        "Documented the solution through BRD, SDD, validation rules, and process architecture.",
      ],
      solution:
        "A scheduled Power Automate flow evaluates action items against business rules, determines reminder eligibility based on due-date proximity and status, sends structured email reminders, and updates tracking fields—all while maintaining Excel/SharePoint as the user-facing interface.",
      architecture: [
        { title: "Master Action Tracker", description: "Excel/SharePoint source of truth for action items" },
        { title: "Scheduled Power Automate Flow", description: "Automated trigger on defined schedule" },
        { title: "Data Validation", description: "Check for required fields and data quality" },
        { title: "Reminder Eligibility Logic", description: "Business rules for when to send reminders" },
        { title: "Due-Date Rules", description: "Pre-due, on-due, and overdue evaluation" },
        { title: "Email Reminder", description: "Structured reminder sent via Outlook" },
        { title: "Update Tracking Fields", description: "Record reminder count and timestamp" },
        { title: "Repeat Until Closure", description: "Continue cycle until action is marked done" },
        { title: "Escalation-Ready Design", description: "Manager notification for overdue thresholds" },
      ],
      features: [
        {
          title: "Scheduled Reminder Workflow",
          description: "Automated flow runs on schedule to evaluate and process pending action items.",
          icon: "Clock",
        },
        {
          title: "Due-Date Evaluation",
          description: "Intelligent logic for pre-due (3 days), on-due, and overdue reminder timing.",
          icon: "Calendar",
        },
        {
          title: "Reminder Eligibility Controls",
          description: "Business rules determine which actions qualify for reminders based on status and data completeness.",
          icon: "CheckCircle",
        },
        {
          title: "Manual Reminder Trigger",
          description: "Supports on-demand reminder sending outside the scheduled cycle.",
          icon: "Play",
        },
        {
          title: "Reminder Counter & Tracking",
          description: "Maintains count of reminders sent and timestamp of last reminder for each action.",
          icon: "Hash",
        },
        {
          title: "Data Validation & Error Flagging",
          description: "Identifies incomplete or invalid action records and flags them for correction.",
          icon: "AlertTriangle",
        },
        {
          title: "Escalation-Ready Structure",
          description: "Designed to support manager escalation when overdue thresholds are exceeded.",
          icon: "ArrowUpCircle",
        },
      ],
      screenshots: [
        { title: "Workflow Overview", alt: "Power Automate flow showing the reminder automation logic" },
        { title: "Action Tracker", alt: "Excel-based action tracker with system fields" },
        { title: "Reminder Logic", alt: "Due-date evaluation and reminder timing diagram" },
      ],
      techGroups: [
        { label: "Automation", items: ["Power Automate"] },
        { label: "Data", items: ["Excel Online", "SharePoint"] },
        { label: "Communication", items: ["Outlook"] },
        { label: "Platform", items: ["Microsoft 365"] },
      ],
      businessValue: [
        "Reduces dependence on manual reminder follow-ups.",
        "Creates consistent action-management rules.",
        "Improves visibility into reminder status and data quality.",
        "Supports stronger PMO governance without requiring a new enterprise application.",
        "Demonstrates how lightweight automation can improve an existing business process.",
      ],
      challenges: [
        {
          challenge: "Excel dates may be represented in different formats, including serial values.",
          decision: "Normalize date handling before applying reminder logic.",
        },
        {
          challenge: "Large action tables can create Power Automate loop-volume issues.",
          decision: "Filter eligible records earlier rather than processing the entire dataset unnecessarily.",
        },
      ],
      learnings: [
        "Automation reliability depends heavily on data quality.",
        "Business rules should be explicit before workflow development begins.",
        "Existing Microsoft 365 tools can support meaningful automation without introducing an entirely new platform.",
        "Documentation of validation rules prevents recurring support issues.",
      ],
    },
  },
];

export const projectCategories = [
  "All",
  "Data Analytics",
  "AI",
  "Automation",
  "PMO",
  "Development",
];
