import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "factoryassist-ai",
    title: "FactoryAssist AI",
    subtitle: "AI-Powered Predictive Maintenance Assistant",
    category: ["AI", "Predictive Maintenance", "Manufacturing"],
    description:
      "An AI-powered maintenance solution that combines machine data, maintenance history, SOP documentation, analytics, and generative AI to help teams investigate failures and make better maintenance decisions.",
    technologies: ["React", "Node.js", "Express", "AWS", "Amazon Bedrock", "RAG", "FAISS", "LangChain", "Vite", "JavaScript", "Git", "GitHub"],
    featured: true,
    image: "/projects/factoryassist/cover.png",
    liveUrl: "https://factory-assist-ai.onrender.com/",
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
        { title: "Operations Center", alt: "FactoryAssist AI operations dashboard showing machine status and KPIs", src: "/projects/factoryassist/operations-center.png" },
        { title: "AI Copilot", alt: "Conversational AI interface for maintenance queries", src: "/projects/factoryassist/ai-copilot.png" },
        { title: "Document Assistant", alt: "SOP document retrieval and contextual answers", src: "/projects/factoryassist/document-assistant.png" },
        { title: "Smart Recommendations", alt: "AI-generated maintenance recommendations view", src: "/projects/factoryassist/smart-recommendations.png" },
        { title: "Report Generator", alt: "Automated maintenance report generation interface", src: "/projects/factoryassist/report-generator.png" },
      ],
      techGroups: [
        { label: "AI", items: ["Amazon Bedrock", "RAG", "LangChain", "FAISS"] },
        { label: "Frontend", items: ["React", "Vite", "React Router"] },
        { label: "Backend", items: ["Node.js", "Express"] },
        { label: "Cloud", items: ["AWS", "S3", "QuickSight"] },
        { label: "Platform", items: ["Git", "GitHub"] },
      ],
      businessValue: [
        "Consolidated 25 machines, 500+ maintenance events, 1,922 downtime hours, and ₹47.9 lakh in maintenance expenditure into a unified intelligence platform.",
        "Surfaced 82 high-risk events and 110 recurring bearing failures for proactive maintenance planning.",
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
    slug: "github-ai-notion-automation",
    title: "GitHub → AI → Notion Automation",
    subtitle: "AI-Powered Project Documentation & Personal Branding Workflow",
    category: ["Automation", "AI", "APIs", "Personal Branding"],
    description:
      "An end-to-end automation workflow that transforms GitHub repository information into reusable professional content using AI, then stores the generated outputs in Notion for structured tracking and reuse.",
    technologies: ["n8n", "GitHub API", "AI", "JavaScript", "Notion"],
    featured: true,
    image: "/projects/github-ai-notion/cover.png",
    githubUrl: "https://github.com/Divyansh1315/github-AI-Notion-automation",
    caseStudy: {
      overview:
        "GitHub → AI → Notion Automation is an end-to-end workflow designed to turn technical project work into structured professional content automatically.\n\nThe system retrieves repository information from GitHub, processes the README, uses AI to generate multiple forms of professional content, and stores the outputs inside a structured Notion database for tracking and reuse.",
      businessProblem: [
        "Technical projects often contain valuable experience and learning that never gets converted into recruiter-friendly content.",
        "Creating separate LinkedIn posts, portfolio descriptions, resume bullets, and social content manually requires repetitive effort.",
        "Project documentation and personal-branding content can become inconsistent when created independently.",
        "Professionals building multiple projects need a repeatable way to convert technical work into structured career assets.",
        "Generated content also needs a central location where it can be reviewed, tracked, refined, and reused.",
      ],
      objective:
        "Build a reusable automation pipeline that converts GitHub project information into structured AI-generated professional content and stores the outputs in Notion for review, tracking, publishing, and future reuse.",
      role: [
        "Designed the end-to-end automation workflow connecting GitHub, AI processing, and Notion.",
        "Structured the GitHub repository ingestion and README-processing flow.",
        "Designed prompts for converting technical project information into different professional content formats.",
        "Implemented structured AI outputs suitable for downstream automation.",
        "Worked with JavaScript transformations to clean and prepare repository content.",
        "Integrated generated outputs with a structured Notion database.",
        "Designed the workflow to be reusable across multiple GitHub repositories.",
        "Documented the architecture, setup, examples, and workflow for public reuse.",
      ],
      solution:
        "A webhook-triggered n8n workflow retrieves repository information from GitHub, processes the README content, generates multiple professional content formats using AI, and stores all outputs in a structured Notion database for review and reuse.",
      architecture: [
        { title: "Webhook Trigger", description: "Receives the repository identifier and starts the automation" },
        { title: "GitHub REST API", description: "Retrieves repository information and README content dynamically" },
        { title: "README Processing", description: "Cleans and structures repository content before AI processing" },
        { title: "AI Content Generation", description: "Transforms technical project information into multiple professional content formats" },
        { title: "Structured Output", description: "Produces predictable content structures suitable for downstream workflow processing" },
        { title: "Notion Database", description: "Stores generated assets in a structured workspace for tracking and reuse" },
      ],
      features: [
        {
          title: "Automated Repository Ingestion",
          description:
            "Retrieves repository information dynamically through the GitHub API instead of requiring manual project copying.",
          icon: "GitBranch",
        },
        {
          title: "README Processing",
          description:
            "Cleans and structures project documentation before passing it to the AI layer.",
          icon: "FileText",
        },
        {
          title: "Multi-Format AI Generation",
          description:
            "Converts one project source into multiple professional content formats for different channels.",
          icon: "Sparkles",
        },
        {
          title: "Structured AI Output",
          description:
            "Uses predictable output structures so generated content can continue through automated workflows.",
          icon: "Braces",
        },
        {
          title: "Notion Content Pipeline",
          description:
            "Stores generated content in a structured Notion database for review, tracking, publishing, and reuse.",
          icon: "Database",
        },
        {
          title: "Reusable Workflow",
          description:
            "Designed to process multiple GitHub repositories using the same automation pipeline.",
          icon: "Repeat",
        },
      ],
      screenshots: [
        { title: "End-to-End n8n Workflow", alt: "Complete n8n automation workflow from GitHub to Notion", src: "/projects/github-ai-notion/n8n-workflow-github-notion.png" },
      ],
      techGroups: [
        { label: "Automation", items: ["n8n", "Webhooks", "Workflow Automation"] },
        { label: "APIs", items: ["GitHub REST API", "API Integration"] },
        { label: "AI", items: ["AI Content Generation", "Prompt Engineering", "Structured Outputs"] },
        { label: "Data Processing", items: ["JavaScript", "JSON", "README Parsing"] },
        { label: "Content Management", items: ["Notion", "Notion Database"] },
      ],
      businessValue: [
        "Reduces repetitive effort involved in documenting technical projects.",
        "Creates a repeatable bridge between technical work and professional storytelling.",
        "Helps maintain more consistent project descriptions across portfolio, resume, and social channels.",
        "Centralizes generated professional content inside Notion for review and reuse.",
        "Demonstrates how AI can be embedded inside an automation workflow rather than used only as a standalone chatbot.",
        "Shows practical integration across APIs, AI, workflow automation, JavaScript processing, and content management.",
      ],
      challenges: [
        {
          challenge: "GitHub README files contain formatting and information that may not be useful directly for AI generation.",
          decision: "Introduce a processing layer that cleans and structures repository content before sending it to the AI generation step.",
        },
        {
          challenge: "AI-generated text needs to serve multiple channels with different content requirements.",
          decision: "Generate channel-specific outputs rather than producing one generic project summary.",
        },
        {
          challenge: "AI output must remain usable by downstream automation steps.",
          decision: "Use structured output design so generated content can be parsed and stored reliably.",
        },
        {
          challenge: "Generated content needs to remain accessible after workflow execution.",
          decision: "Use Notion as a structured content repository rather than treating AI output as temporary workflow data.",
        },
      ],
      learnings: [
        "AI becomes significantly more useful when embedded inside a complete business workflow rather than treated as an isolated generation step.",
        "Structured AI outputs are important when LLM responses feed downstream automation.",
        "Good preprocessing improves the quality and consistency of generated content.",
        "API integration allows one workflow to scale across multiple source repositories.",
        "Automation can connect technical project execution with professional documentation and personal branding.",
      ],
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
        { title: "Dashboard Overview", alt: "Gemba observation dashboard showing KPIs and trend charts", src: "/projects/gemba/dashboard.png" },
        { title: "Function Analysis", alt: "Observations broken down by organizational function", src: "/projects/gemba/function-analysis.png" },
        { title: "Data Model", alt: "Star schema data model diagram", src: "/projects/gemba/data-model.png" },
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
        { title: "Workflow Overview", alt: "Power Automate flow showing the reminder automation logic", src: "/projects/mom-automation/architecture-diagram.png" },
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
  "APIs",
  "PMO",
  "Development",
];
