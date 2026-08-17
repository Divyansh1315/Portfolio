/**
 * One-time idempotent content migration script.
 * Reads existing local TypeScript data and creates Sanity documents.
 *
 * Uses deterministic document IDs to avoid duplicates on re-run.
 * Does NOT delete any existing local content.
 *
 * Usage: npx tsx scripts/migrate-to-sanity.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

// Load environment
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

if (!projectId) {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}

if (!token) {
  console.error("❌ SANITY_API_WRITE_TOKEN (or SANITY_API_READ_TOKEN with write access) is not set in .env.local");
  console.error("   Generate a token at: https://www.sanity.io/manage/project/" + projectId + "/api#tokens");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-12-01",
  useCdn: false,
});

// ─── Import local data ─────────────────────────────────────────────────────────
// We use dynamic imports with the TypeScript source files

interface MigrationResult {
  created: string[];
  skipped: string[];
  failed: string[];
  images: number;
}

const result: MigrationResult = {
  created: [],
  skipped: [],
  failed: [],
  images: 0,
};

/**
 * Upload an image from the public folder to Sanity and return the asset reference.
 */
async function uploadImage(relativePath: string): Promise<{ _type: "image"; asset: { _type: "reference"; _ref: string } } | null> {
  const absolutePath = path.resolve(process.cwd(), "public", relativePath.replace(/^\//, ""));

  if (!fs.existsSync(absolutePath)) {
    console.warn(`  ⚠️  Image not found: ${relativePath}`);
    return null;
  }

  try {
    const imageBuffer = fs.readFileSync(absolutePath);
    const filename = path.basename(absolutePath);
    const asset = await client.assets.upload("image", imageBuffer, { filename });
    result.images++;
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.warn(`  ⚠️  Failed to upload image: ${relativePath}`, (err as Error).message);
    return null;
  }
}

/**
 * Upload a file from the public folder to Sanity.
 */
async function uploadFile(relativePath: string): Promise<{ _type: "file"; asset: { _type: "reference"; _ref: string } } | null> {
  const absolutePath = path.resolve(process.cwd(), "public", relativePath.replace(/^\//, ""));

  if (!fs.existsSync(absolutePath)) {
    console.warn(`  ⚠️  File not found: ${relativePath}`);
    return null;
  }

  try {
    const fileBuffer = fs.readFileSync(absolutePath);
    const filename = path.basename(absolutePath);
    const asset = await client.assets.upload("file", fileBuffer, { filename });
    return {
      _type: "file",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.warn(`  ⚠️  Failed to upload file: ${relativePath}`, (err as Error).message);
    return null;
  }
}

/**
 * Create or replace a document with a deterministic ID.
 */
async function createOrReplace(doc: Record<string, unknown> & { _id: string; _type: string }) {
  try {
    await client.createOrReplace(doc);
    result.created.push(`${doc._type}:${doc._id}`);
    console.log(`  ✅ ${doc._type}: ${doc._id}`);
  } catch (err) {
    result.failed.push(`${doc._type}:${doc._id}`);
    console.error(`  ❌ ${doc._type}: ${doc._id}`, (err as Error).message);
  }
}

// ─── Migration Functions ────────────────────────────────────────────────────────

async function migrateSiteSettings() {
  console.log("\n📋 Migrating Site Settings...");

  // Upload resume
  const resumeFile = await uploadFile("/resume/Resume_Divyansh.pdf");

  await createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Divyansh Singh",
    headline: "Data Analytics · AI · Automation · PMO",
    tagline: "Turning Business Problems into\nData-Driven, Automated &\nAI-Powered Solutions.",
    summary: "I work at the intersection of business, data, automation, and artificial intelligence—building practical solutions that turn complex problems into actionable insights and better ways of working.",
    primaryCtaLabel: "Explore My Work",
    primaryCtaUrl: "/projects",
    secondaryCtaLabel: "Download Resume",
    secondaryCtaUrl: "/resume/Resume_Divyansh.pdf",
    siteUrl: "https://divyanshsingh.com",
    defaultSeoTitle: "Divyansh Singh | Data Analytics, AI, Automation & PMO",
    defaultSeoDescription: "Portfolio of Divyansh Singh showcasing practical work across data analytics, artificial intelligence, workflow automation, PMO, and business-focused technology solutions.",
    ...(resumeFile && { resumeFile }),
    resumeButtonLabel: "Download Resume",
    showResumeCta: true,
    footerText: "Data Analytics · AI · Automation · PMO",
    showAvailability: false,
  });
}

async function migrateAbout() {
  console.log("\n📋 Migrating About...");

  await createOrReplace({
    _id: "about",
    _type: "about",
    eyebrow: "ABOUT ME",
    heading: "Building at the Intersection of Business & Technology",
    shortIntro: "I work at the intersection of business, data, automation, and artificial intelligence—building practical solutions that turn complex problems into actionable insights and better ways of working.",
    focusAreas: [
      "Data Analytics & Business Intelligence",
      "Artificial Intelligence & RAG Solutions",
      "Workflow Automation & Process Improvement",
      "PMO & Project Governance",
    ],
    location: "India",
    currentRole: "PMO Analyst at Uno Minda",
    isVisible: true,
  });
}

async function migrateHomepageContent() {
  console.log("\n📋 Migrating Homepage Content...");

  await createOrReplace({
    _id: "homepageContent",
    _type: "homepageContent",
    capabilitiesEyebrow: "WHAT I DO",
    capabilitiesHeading: "Core Capabilities",
    capabilitiesDescription: "I combine analytics, automation, AI, and structured problem-solving to build practical business solutions.",
    workMethodEyebrow: "HOW I WORK",
    workMethodHeading: "From Problem to Practical Solution",
    workMethodDescription: "Technology is most useful when it begins with a clear understanding of the business problem.",
    projectsEyebrow: "FEATURED WORK",
    projectsHeading: "Things I've Built",
    projectsDescription: "Real-world projects combining business context, data, automation, and artificial intelligence.",
    experienceEyebrow: "EXPERIENCE",
    experienceHeading: "My Professional Journey",
    experienceDescription: "Building experience across project governance, reporting, analytics, process improvement, automation, and applied AI.",
    skillsEyebrow: "SKILLS",
    skillsHeading: "Tools I Use to Turn Ideas Into Solutions",
    skillsDescription: "A practical technology stack spanning analytics, automation, AI, development, and project management.",
    achievementsEyebrow: "BEYOND THE DAY-TO-DAY",
    achievementsHeading: "Learning, Innovation & Professional Growth",
    resumeCtaHeading: "Looking for someone who can bridge business and technology?",
    resumeCtaDescription: "I'm exploring opportunities where I can combine data analytics, automation, AI, and project management to solve meaningful business problems.",
    contactEyebrow: "CONTACT",
    contactHeading: "Let's Connect",
    contactDescription: "Have an interesting role, project, or problem worth solving? I'd be happy to connect.",
  });
}

async function migrateProjects() {
  console.log("\n📋 Migrating Projects...");

  const projectsData = [
    {
      slug: "factoryassist-ai",
      title: "FactoryAssist AI",
      subtitle: "AI-Powered Predictive Maintenance Assistant",
      category: ["AI", "Predictive Maintenance", "Manufacturing"],
      description: "An AI-powered maintenance solution that combines machine data, maintenance history, SOP documentation, analytics, and generative AI to help teams investigate failures and make better maintenance decisions.",
      technologies: ["React", "Node.js", "Express", "AWS", "Amazon Bedrock", "RAG", "FAISS", "LangChain", "Vite", "JavaScript", "Git", "GitHub"],
      featured: true,
      coverImagePath: "/projects/factoryassist/cover.png",
      liveUrl: "https://factory-assist-ai.onrender.com/",
      displayOrder: 0,
      overview: "FactoryAssist AI is a maintenance intelligence prototype designed to help manufacturing teams analyze equipment history, investigate recurring failures, interact with maintenance documentation, and receive AI-assisted recommendations through a unified interface.",
      businessProblem: [
        "Maintenance teams often work across fragmented sources such as machine records, maintenance logs, SOP documents, and technician knowledge.",
        "Identifying recurring failure patterns can require manually reviewing historical maintenance events.",
        "Technical procedures may be stored inside documents that are time-consuming to search during maintenance scenarios.",
        "Existing dashboards can show what happened, but may not explain what action should be taken next.",
        "Teams need faster access to maintenance context, historical patterns, and relevant procedures.",
      ],
      objective: "Design a practical AI-assisted maintenance experience that combines structured maintenance data, historical failure analysis, technical documentation, and generative AI to support faster and more informed maintenance decisions.",
      roleDetails: [
        "Translated the maintenance use case into a structured digital solution concept.",
        "Worked on the application structure and user experience for dashboard, AI assistant, document intelligence, recommendations, and reporting.",
        "Structured machine and maintenance-log data used by the prototype.",
        "Designed AI interaction scenarios around recurring failures, machine history, and SOP-based questions.",
        "Worked on the RAG-oriented document assistant approach for retrieving relevant SOP information.",
        "Helped shape the solution architecture, business story, demo journey, and implementation feasibility narrative.",
        "Supported development and iteration of the prototype using AI-assisted development tools and AWS services.",
      ],
      solution: "The prototype brings multiple maintenance workflows into one experience: operational analytics, machine-level insights, conversational AI, SOP document assistance, smart recommendations, and automated report generation.",
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
        { title: "Operations Dashboard", description: "Provides machine status, downtime trends, maintenance activity, and failure-related insights in a consolidated operational view.", icon: "BarChart3" },
        { title: "AI Copilot", description: "Allows users to ask maintenance questions in natural language and investigate machine history or recurring failure patterns.", icon: "MessageSquare" },
        { title: "Document Assistant", description: "Uses maintenance documentation such as SOPs to provide contextual answers with source-oriented retrieval.", icon: "FileText" },
        { title: "Smart Recommendations", description: "Surfaces maintenance recommendations based on historical patterns, machine context, and identified issues.", icon: "Lightbulb" },
        { title: "Report Generator", description: "Transforms maintenance data and observations into structured maintenance summaries and reports.", icon: "ClipboardList" },
        { title: "Machine-Level Story", description: "Allows a user to move from a machine-level issue to failure history, relevant documentation, and recommended action within one workflow.", icon: "Workflow" },
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
        { challenge: "Maintenance questions can require both structured data and document knowledge.", decision: "Separate structured maintenance-data querying from document retrieval, then compose responses around the user's intent." },
        { challenge: "Generative AI can produce overly generic answers.", decision: "Use machine context, metadata-aware retrieval, structured prompts, and source-oriented answers to make responses more grounded." },
        { challenge: "Prototype development occurred under hackathon constraints.", decision: "Prioritize a clear end-to-end maintenance story and modular features over production-scale complexity." },
      ],
      learnings: [
        "Good AI experiences depend heavily on retrieval quality and context design.",
        "Business storytelling is as important as technical capability when presenting an AI solution.",
        "AI should augment established workflows rather than exist as an isolated chatbot.",
        "Prototype architecture should make future integration and scale visible even when the initial build is lightweight.",
      ],
      confidentialityNote: "Certain visuals and business details have been simplified or sanitized for confidentiality.",
    },
    {
      slug: "github-ai-notion-automation",
      title: "GitHub → AI → Notion Automation",
      subtitle: "AI-Powered Project Documentation & Personal Branding Workflow",
      category: ["Automation", "AI", "APIs", "Personal Branding"],
      description: "An end-to-end automation workflow that transforms GitHub repository information into reusable professional content using AI, then stores the generated outputs in Notion for structured tracking and reuse.",
      technologies: ["n8n", "GitHub API", "AI", "JavaScript", "Notion"],
      featured: true,
      coverImagePath: "/projects/github-ai-notion/cover.png",
      githubUrl: "https://github.com/Divyansh1315/github-AI-Notion-automation",
      displayOrder: 1,
      overview: "GitHub → AI → Notion Automation is an end-to-end workflow designed to turn technical project work into structured professional content automatically.\n\nThe system retrieves repository information from GitHub, processes the README, uses AI to generate multiple forms of professional content, and stores the outputs inside a structured Notion database for tracking and reuse.",
      businessProblem: [
        "Technical projects often contain valuable experience and learning that never gets converted into recruiter-friendly content.",
        "Creating separate LinkedIn posts, portfolio descriptions, resume bullets, and social content manually requires repetitive effort.",
        "Project documentation and personal-branding content can become inconsistent when created independently.",
        "Professionals building multiple projects need a repeatable way to convert technical work into structured career assets.",
        "Generated content also needs a central location where it can be reviewed, tracked, refined, and reused.",
      ],
      objective: "Build a reusable automation pipeline that converts GitHub project information into structured AI-generated professional content and stores the outputs in Notion for review, tracking, publishing, and future reuse.",
      roleDetails: [
        "Designed the end-to-end automation workflow connecting GitHub, AI processing, and Notion.",
        "Structured the GitHub repository ingestion and README-processing flow.",
        "Designed prompts for converting technical project information into different professional content formats.",
        "Implemented structured AI outputs suitable for downstream automation.",
        "Worked with JavaScript transformations to clean and prepare repository content.",
        "Integrated generated outputs with a structured Notion database.",
        "Designed the workflow to be reusable across multiple GitHub repositories.",
        "Documented the architecture, setup, examples, and workflow for public reuse.",
      ],
      solution: "A webhook-triggered n8n workflow retrieves repository information from GitHub, processes the README content, generates multiple professional content formats using AI, and stores all outputs in a structured Notion database for review and reuse.",
      architecture: [
        { title: "Webhook Trigger", description: "Receives the repository identifier and starts the automation" },
        { title: "GitHub REST API", description: "Retrieves repository information and README content dynamically" },
        { title: "README Processing", description: "Cleans and structures repository content before AI processing" },
        { title: "AI Content Generation", description: "Transforms technical project information into multiple professional content formats" },
        { title: "Structured Output", description: "Produces predictable content structures suitable for downstream workflow processing" },
        { title: "Notion Database", description: "Stores generated assets in a structured workspace for tracking and reuse" },
      ],
      features: [
        { title: "Automated Repository Ingestion", description: "Retrieves repository information dynamically through the GitHub API instead of requiring manual project copying.", icon: "GitBranch" },
        { title: "README Processing", description: "Cleans and structures project documentation before passing it to the AI layer.", icon: "FileText" },
        { title: "Multi-Format AI Generation", description: "Converts one project source into multiple professional content formats for different channels.", icon: "Sparkles" },
        { title: "Structured AI Output", description: "Uses predictable output structures so generated content can continue through automated workflows.", icon: "Braces" },
        { title: "Notion Content Pipeline", description: "Stores generated content in a structured Notion database for review, tracking, publishing, and reuse.", icon: "Database" },
        { title: "Reusable Workflow", description: "Designed to process multiple GitHub repositories using the same automation pipeline.", icon: "Repeat" },
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
        { challenge: "GitHub README files contain formatting and information that may not be useful directly for AI generation.", decision: "Introduce a processing layer that cleans and structures repository content before sending it to the AI generation step." },
        { challenge: "AI-generated text needs to serve multiple channels with different content requirements.", decision: "Generate channel-specific outputs rather than producing one generic project summary." },
        { challenge: "AI output must remain usable by downstream automation steps.", decision: "Use structured output design so generated content can be parsed and stored reliably." },
        { challenge: "Generated content needs to remain accessible after workflow execution.", decision: "Use Notion as a structured content repository rather than treating AI output as temporary workflow data." },
      ],
      learnings: [
        "AI becomes significantly more useful when embedded inside a complete business workflow rather than treated as an isolated generation step.",
        "Structured AI outputs are important when LLM responses feed downstream automation.",
        "Good preprocessing improves the quality and consistency of generated content.",
        "API integration allows one workflow to scale across multiple source repositories.",
        "Automation can connect technical project execution with professional documentation and personal branding.",
      ],
    },
    {
      slug: "gemba-observation-dashboard",
      title: "Gemba Observation Dashboard",
      subtitle: "Operational Intelligence with Power BI",
      category: ["Data Analytics", "Power BI", "Operations"],
      description: "A Power BI analytics solution designed to transform operational observation data into structured KPIs, trend analysis, status visibility, and management-level insights.",
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "SharePoint", "Excel", "Power Automate"],
      featured: true,
      coverImagePath: "/projects/gemba/cover.png",
      displayOrder: 2,
      overview: "A Power BI analytics solution designed to transform operational observation data into structured KPIs, trend analysis, status visibility, and management-level insights.",
      businessProblem: [
        "Operational observation data can become difficult to interpret when reporting depends on manual pivots, spreadsheets, and presentation preparation.",
        "Management needs a consistent view of observation volumes, closure status, categories, functions, units, and trends.",
        "Repeated manual reporting increases effort and makes timely decision support harder.",
      ],
      objective: "Create an automated and scalable reporting model that converts raw Gemba observation data into an interactive Power BI dashboard and reduces dependence on manual reporting.",
      roleDetails: [
        "Worked on the dashboard structure and reporting requirements.",
        "Designed the analytical data model using fact and dimension tables.",
        "Structured key dimensions for users, functions, pain areas, change categories, status, and dates.",
        "Developed KPI and visualization logic for observation tracking and trend analysis.",
        "Worked on Power BI measures, filtering behavior, interaction design, and dashboard usability.",
        "Supported automation concepts for refresh and scheduled management reporting.",
      ],
      solution: "A star-schema data model powers an interactive Power BI dashboard that provides management with consistent, automated visibility into operational observations without manual pivot-based reporting.",
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
        { title: "Total Observations KPI", description: "Consolidated view of observation volume and activity metrics.", icon: "Hash" },
        { title: "Status Distribution", description: "Visual breakdown of open, in-progress, and closed observations.", icon: "PieChart" },
        { title: "Function-wise Analysis", description: "Observations segmented by organizational function for targeted review.", icon: "Building2" },
        { title: "Pain Area Analysis", description: "Categorization of observations by problem type for pattern identification.", icon: "Target" },
        { title: "Monthly Trends", description: "Time-series analysis showing observation volumes and closure rates over time.", icon: "TrendingUp" },
        { title: "Interactive Filtering", description: "Cross-filtering and drill-down capabilities for management-level exploration.", icon: "Filter" },
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
        { challenge: "Dashboard visuals produced different behavior depending on highlight versus filter interactions.", decision: "Tune visual interactions deliberately so management views reflect the intended filter context." },
        { challenge: "Time-based analysis required a reliable date dimension.", decision: "Use a dedicated date table and structured relationships rather than relying on raw date columns alone." },
      ],
      learnings: [
        "A strong semantic model is more important than a visually impressive dashboard.",
        "Visual interaction behavior must be designed intentionally, not left to defaults.",
        "Operational dashboards should emphasize actionability, not just chart volume.",
        "Star schema design enables consistent and performant analytical experiences.",
      ],
    },
    {
      slug: "mom-follow-up-automation",
      title: "MoM Follow-Up Automation",
      subtitle: "Automated Meeting Action Management",
      category: ["Automation", "PMO", "Microsoft 365"],
      description: "A Microsoft 365 workflow automation solution designed to track meeting action items, evaluate due dates, send structured reminders, and improve follow-up discipline across recurring action-management processes.",
      technologies: ["Power Automate", "Excel Online", "SharePoint", "Outlook", "Microsoft 365"],
      featured: true,
      coverImagePath: "/projects/mom-automation/cover.png",
      displayOrder: 3,
      overview: "A Microsoft 365 workflow automation solution designed to track meeting action items, evaluate due dates, send structured reminders, and improve follow-up discipline across recurring action-management processes.",
      businessProblem: [
        "Meeting actions are often tracked manually in spreadsheets.",
        "Manual follow-up makes it easy for upcoming deadlines or overdue actions to be missed.",
        "Different action owners may require reminders at different stages of the due-date lifecycle.",
        "PMO teams need visibility into reminder status, data quality, and eventual escalation.",
      ],
      objective: "Automate action-item follow-up while keeping Excel/SharePoint as the familiar business interface and using Power Automate to handle reminder logic, validation, and tracking.",
      roleDetails: [
        "Defined the business rules for automated reminders and eligibility.",
        "Structured the action-tracker data model and system-control fields.",
        "Designed date-based reminder logic for pre-due, due-date, and overdue scenarios.",
        "Implemented workflow logic using Power Automate and Microsoft 365 connectors.",
        "Added validation and error-handling requirements for incomplete action data.",
        "Worked on reminder counters, last-reminder tracking, manual trigger logic, and escalation-ready fields.",
        "Documented the solution through BRD, SDD, validation rules, and process architecture.",
      ],
      solution: "A scheduled Power Automate flow evaluates action items against business rules, determines reminder eligibility based on due-date proximity and status, sends structured email reminders, and updates tracking fields—all while maintaining Excel/SharePoint as the user-facing interface.",
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
        { title: "Scheduled Reminder Workflow", description: "Automated flow runs on schedule to evaluate and process pending action items.", icon: "Clock" },
        { title: "Due-Date Evaluation", description: "Intelligent logic for pre-due (3 days), on-due, and overdue reminder timing.", icon: "Calendar" },
        { title: "Reminder Eligibility Controls", description: "Business rules determine which actions qualify for reminders based on status and data completeness.", icon: "CheckCircle" },
        { title: "Manual Reminder Trigger", description: "Supports on-demand reminder sending outside the scheduled cycle.", icon: "Play" },
        { title: "Reminder Counter & Tracking", description: "Maintains count of reminders sent and timestamp of last reminder for each action.", icon: "Hash" },
        { title: "Data Validation & Error Flagging", description: "Identifies incomplete or invalid action records and flags them for correction.", icon: "AlertTriangle" },
        { title: "Escalation-Ready Structure", description: "Designed to support manager escalation when overdue thresholds are exceeded.", icon: "ArrowUpCircle" },
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
        { challenge: "Excel dates may be represented in different formats, including serial values.", decision: "Normalize date handling before applying reminder logic." },
        { challenge: "Large action tables can create Power Automate loop-volume issues.", decision: "Filter eligible records earlier rather than processing the entire dataset unnecessarily." },
      ],
      learnings: [
        "Automation reliability depends heavily on data quality.",
        "Business rules should be explicit before workflow development begins.",
        "Existing Microsoft 365 tools can support meaningful automation without introducing an entirely new platform.",
        "Documentation of validation rules prevents recurring support issues.",
      ],
    },
  ];

  for (const p of projectsData) {
    const docId = `project-${p.slug}`;

    // Upload cover image
    let coverImage = null;
    if (p.coverImagePath) {
      const img = await uploadImage(p.coverImagePath);
      if (img) {
        coverImage = { ...img, alt: `${p.title} cover image` };
      }
    }

    // Upload screenshots
    const screenshots = [];
    for (const ss of p.screenshots) {
      const img = ss.src ? await uploadImage(ss.src) : null;
      screenshots.push({
        _key: `ss-${ss.title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 20)}`,
        _type: "projectScreenshot",
        ...(img && { image: img }),
        title: ss.title,
        alt: ss.alt,
      });
    }

    await createOrReplace({
      _id: docId,
      _type: "project",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      subtitle: p.subtitle,
      description: p.description,
      category: p.category,
      technologies: p.technologies,
      featured: p.featured,
      isVisible: true,
      displayOrder: p.displayOrder,
      ...(coverImage && { coverImage }),
      ...(p.liveUrl && { liveUrl: p.liveUrl }),
      ...(p.githubUrl && { githubUrl: p.githubUrl }),
      overview: p.overview,
      businessProblem: p.businessProblem,
      objective: p.objective,
      roleDetails: p.roleDetails,
      solution: p.solution,
      architecture: p.architecture.map((s, i) => ({
        _key: `arch-${i}`,
        _type: "architectureStep",
        title: s.title,
        description: s.description,
      })),
      features: p.features.map((f, i) => ({
        _key: `feat-${i}`,
        _type: "projectFeature",
        title: f.title,
        description: f.description,
        icon: f.icon,
      })),
      screenshots,
      techGroups: p.techGroups.map((tg, i) => ({
        _key: `tg-${i}`,
        _type: "techGroup",
        label: tg.label,
        items: tg.items,
      })),
      businessValue: p.businessValue,
      challenges: p.challenges.map((c, i) => ({
        _key: `ch-${i}`,
        _type: "projectChallenge",
        challenge: c.challenge,
        decision: c.decision,
      })),
      learnings: p.learnings,
      ...(p.confidentialityNote && { confidentialityNote: p.confidentialityNote }),
    });
  }
}

async function migrateExperience() {
  console.log("\n📋 Migrating Experience...");

  const experiences = [
    {
      id: "uno-minda-pmo",
      company: "Uno Minda",
      role: "PMO Analyst",
      employmentType: "full-time",
      startDate: "2025-08-01",
      isCurrent: true,
      location: "Manesar, India",
      summary: "Maintain project MIS dashboards and reporting systems to track timelines, deliverables, and project performance metrics.",
      achievements: [
        "Built Power BI dashboards for operational visibility",
        "Automated follow-up workflows using Power Automate and ZOHO Projects",
      ],
      technologies: ["Power BI", "Power Automate", "ZOHO Projects", "Excel", "PowerPoint"],
      displayOrder: 0,
      featured: true,
    },
    {
      id: "beggars-corp-fellow",
      company: "Beggars Corporation",
      role: "Fellow",
      employmentType: "fellowship",
      startDate: "2025-03-01",
      endDate: "2025-05-31",
      isCurrent: false,
      location: "Varanasi, India",
      summary: "Collected, cleaned, and analyzed primary data on child beggars using SPSS, Excel, and Google Forms to derive actionable insights for rehabilitation strategies.",
      achievements: [
        "Analyzed 10k+ data records to generate visual reports supporting policy decisions in child welfare and education",
      ],
      technologies: ["SPSS", "Excel", "Google Forms"],
      displayOrder: 1,
      featured: false,
    },
  ];

  for (const exp of experiences) {
    await createOrReplace({
      _id: `experience-${exp.id}`,
      _type: "experience",
      company: exp.company,
      role: exp.role,
      employmentType: exp.employmentType,
      location: exp.location,
      startDate: exp.startDate,
      ...(exp.endDate && { endDate: exp.endDate }),
      isCurrent: exp.isCurrent,
      summary: exp.summary,
      achievements: exp.achievements,
      technologies: exp.technologies,
      displayOrder: exp.displayOrder,
      featured: exp.featured,
      isVisible: true,
    });
  }
}

async function migrateSkillGroups() {
  console.log("\n📋 Migrating Skill Groups...");

  const groups = [
    {
      id: "data-analytics",
      name: "Data & Analytics",
      skills: [
        { name: "Power BI", level: "expert" },
        { name: "Excel", level: "expert" },
        { name: "Power Query", level: "advanced" },
        { name: "Power Pivot", level: "advanced" },
        { name: "DAX", level: "advanced" },
        { name: "SQL", level: "advanced" },
        { name: "Data Modeling", level: "advanced" },
      ],
      displayOrder: 0,
    },
    {
      id: "ai",
      name: "AI",
      skills: [
        { name: "Generative AI", level: "advanced" },
        { name: "RAG", level: "intermediate" },
        { name: "Amazon Bedrock", level: "intermediate" },
        { name: "AI Assistants", level: "advanced" },
        { name: "Prompt Engineering", level: "advanced" },
      ],
      displayOrder: 1,
    },
    {
      id: "automation",
      name: "Automation",
      skills: [
        { name: "Power Automate", level: "expert" },
        { name: "SharePoint", level: "advanced" },
        { name: "Microsoft 365", level: "advanced" },
        { name: "Workflow Automation", level: "expert" },
      ],
      displayOrder: 2,
    },
    {
      id: "development",
      name: "Development",
      skills: [
        { name: "Python", level: "advanced" },
        { name: "Streamlit", level: "intermediate" },
        { name: "GitHub", level: "intermediate" },
        { name: "APIs", level: "advanced" },
      ],
      displayOrder: 3,
    },
    {
      id: "pmo-business",
      name: "PMO & Business",
      skills: [
        { name: "PMO", level: "advanced" },
        { name: "MIS Reporting", level: "expert" },
        { name: "Project Governance", level: "advanced" },
        { name: "Process Improvement", level: "advanced" },
        { name: "Stakeholder Management", level: "advanced" },
        { name: "Project Tracking", level: "advanced" },
      ],
      displayOrder: 4,
    },
  ];

  for (const group of groups) {
    await createOrReplace({
      _id: `skillGroup-${group.id}`,
      _type: "skillGroup",
      name: group.name,
      skills: group.skills.map((s, i) => ({
        _key: `skill-${i}`,
        name: s.name,
        level: s.level,
      })),
      displayOrder: group.displayOrder,
      isVisible: true,
    });
  }
}

async function migrateCertifications() {
  console.log("\n📋 Migrating Certifications...");

  const certs = [
    {
      id: "mckinsey-forward",
      name: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      issueDate: "2026-06-01",
      description: "Completed the McKinsey Forward learning program focused on practical problem-solving, adaptability, communication, and modern workplace capabilities.",
      displayOrder: 0,
    },
    {
      id: "business-analytics-sql",
      name: "Business Analytics with SQL",
      issuer: "Codebasics",
      issueDate: "2025-12-01",
      credentialId: "CB-50-611622",
      description: "SQL from beginner to advanced level by working on real-time business analytics requirements from a dataset with more than 1.5 million records.",
      displayOrder: 1,
    },
    {
      id: "power-bi-udemy",
      name: "Business Analyzing and Visualizing Data with MS Power BI",
      issuer: "Udemy",
      issueDate: "2025-08-01",
      credentialId: "UC-bac85a30-98c3-48d5-8c31-fb8fdcffc853",
      description: "Power BI report design — beginner to advanced.",
      displayOrder: 2,
    },
    {
      id: "data-analytics-tutedude",
      name: "Data Analytics",
      issuer: "Tutedude",
      issueDate: "2025-08-01",
      credentialId: "TD-DIVY-DA-0855",
      description: "Hands-on experience in Excel, SQL, and Python for data analysis, visualization, and business insights.",
      displayOrder: 3,
    },
    {
      id: "google-project-management",
      name: "Foundations of Project Management",
      issuer: "Google",
      issueDate: "2024-07-01",
      credentialId: "JBG7ESARKMXK",
      description: "Fundamentals of project management including roles, organizational structure, project life cycle management, and methodologies across diverse industries.",
      displayOrder: 4,
    },
  ];

  for (const cert of certs) {
    await createOrReplace({
      _id: `certification-${cert.id}`,
      _type: "certification",
      name: cert.name,
      issuer: cert.issuer,
      issueDate: cert.issueDate,
      ...(cert.credentialId && { credentialId: cert.credentialId }),
      description: cert.description,
      displayOrder: cert.displayOrder,
      isVisible: true,
      featured: false,
    });
  }
}

async function migrateAchievements() {
  console.log("\n📋 Migrating Achievements...");

  const achievements = [
    {
      id: "mckinsey-forward",
      title: "McKinsey Forward Program",
      description: "Completed the McKinsey Forward learning program focused on practical problem-solving, adaptability, communication, and modern workplace capabilities.",
      date: "Jul 2026",
      category: "Professional Development",
      icon: "GraduationCap",
      displayOrder: 0,
    },
    {
      id: "ai-innovation",
      title: "AI & Innovation Initiatives",
      description: "Hands-on participation in AI-focused prototypes, hackathons, and business problem-solving initiatives.",
      date: "Aug 2026",
      category: "Innovation",
      icon: "Lightbulb",
      displayOrder: 1,
    },
    {
      id: "hack-a-web",
      title: "Hack-A-Web Hackathon MANIT Bhopal",
      description: "Participated in the Hack-A-Web hackathon at MANIT Bhopal, building practical solutions under competitive constraints.",
      date: "2022",
      category: "Technical",
      icon: "BarChart3",
      displayOrder: 2,
    },
  ];

  for (const ach of achievements) {
    await createOrReplace({
      _id: `achievement-${ach.id}`,
      _type: "achievement",
      title: ach.title,
      description: ach.description,
      date: ach.date,
      category: ach.category,
      icon: ach.icon,
      displayOrder: ach.displayOrder,
      isVisible: true,
    });
  }
}

async function migrateContactMethods() {
  console.log("\n📋 Migrating Contact Methods...");

  const contacts = [
    {
      id: "linkedin",
      type: "linkedin",
      label: "LinkedIn",
      value: "Divyansh Singh",
      url: "https://www.linkedin.com/in/divyansh-singh-25897a179/",
      icon: "linkedin",
      isPreferred: true,
      displayOrder: 0,
    },
    {
      id: "github",
      type: "github",
      label: "GitHub",
      value: "Divyansh1315",
      url: "https://github.com/Divyansh1315",
      icon: "github",
      isPreferred: false,
      displayOrder: 1,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      value: "divyanshsingh372@gmail.com",
      url: "divyanshsingh372@gmail.com",
      icon: "mail",
      isPreferred: true,
      displayOrder: 2,
    },
  ];

  for (const contact of contacts) {
    await createOrReplace({
      _id: `contactMethod-${contact.id}`,
      _type: "contactMethod",
      type: contact.type,
      label: contact.label,
      value: contact.value,
      url: contact.url,
      icon: contact.icon,
      isPreferred: contact.isPreferred,
      displayOrder: contact.displayOrder,
      isVisible: true,
    });
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║  Sanity Content Migration — Divyansh Portfolio            ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
  console.log(`\n  Project: ${projectId}`);
  console.log(`  Dataset: ${dataset}`);
  console.log(`  Mode: createOrReplace (idempotent)\n`);

  await migrateSiteSettings();
  await migrateAbout();
  await migrateHomepageContent();
  await migrateProjects();
  await migrateExperience();
  await migrateSkillGroups();
  await migrateCertifications();
  await migrateAchievements();
  await migrateContactMethods();

  console.log("\n╔════════════════════════════════════════════════════════════╗");
  console.log("║  Migration Complete                                       ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
  console.log(`\n  ✅ Created/Updated: ${result.created.length}`);
  console.log(`  ⏭️  Skipped:         ${result.skipped.length}`);
  console.log(`  ❌ Failed:          ${result.failed.length}`);
  console.log(`  🖼️  Images uploaded: ${result.images}`);

  if (result.failed.length > 0) {
    console.log("\n  Failed documents:");
    result.failed.forEach((f) => console.log(`    - ${f}`));
  }

  console.log("");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
