/**
 * Centralized GROQ queries for all Sanity content.
 * Each query fetches only the fields required by the consuming page/component.
 */
import { groq } from "next-sanity";

// ─── Site Settings ──────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    name,
    headline,
    tagline,
    summary,
    profileImage { asset->{_id, url}, alt },
    availabilityStatus,
    showAvailability,
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    siteUrl,
    defaultSeoTitle,
    defaultSeoDescription,
    defaultOgImage { asset->{_id, url} },
    resumeFile { asset->{_id, url, originalFilename} },
    resumeButtonLabel,
    showResumeCta,
    footerText
  }
`;

// ─── Homepage Content ───────────────────────────────────────────────────────────

export const homepageContentQuery = groq`
  *[_type == "homepageContent"][0] {
    capabilitiesEyebrow,
    capabilitiesHeading,
    capabilitiesDescription,
    workMethodEyebrow,
    workMethodHeading,
    workMethodDescription,
    projectsEyebrow,
    projectsHeading,
    projectsDescription,
    experienceEyebrow,
    experienceHeading,
    experienceDescription,
    skillsEyebrow,
    skillsHeading,
    skillsDescription,
    achievementsEyebrow,
    achievementsHeading,
    resumeCtaHeading,
    resumeCtaDescription,
    contactEyebrow,
    contactHeading,
    contactDescription
  }
`;

// ─── About ──────────────────────────────────────────────────────────────────────

export const aboutQuery = groq`
  *[_type == "about"][0] {
    eyebrow,
    heading,
    shortIntro,
    biography,
    profileImage { asset->{_id, url}, alt },
    focusAreas,
    careerHighlights,
    location,
    currentRole,
    yearsOfExperience,
    isVisible
  }
`;

// ─── Projects ───────────────────────────────────────────────────────────────────

export const allProjectsQuery = groq`
  *[_type == "project" && isVisible == true] | order(displayOrder asc) {
    _id,
    title,
    slug,
    subtitle,
    description,
    category,
    technologies,
    featured,
    projectType,
    coverImage { asset->{_id, url}, alt },
    liveUrl,
    githubUrl,
    displayOrder
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && isVisible == true && featured == true] | order(displayOrder asc) {
    _id,
    title,
    slug,
    subtitle,
    description,
    category,
    technologies,
    featured,
    projectType,
    coverImage { asset->{_id, url}, alt },
    liveUrl,
    githubUrl
  }
`;

export const projectsByTypeQuery = groq`
  *[_type == "project" && isVisible == true && projectType == $projectType] | order(displayOrder asc) {
    _id,
    title,
    slug,
    subtitle,
    description,
    category,
    technologies,
    featured,
    projectType,
    coverImage { asset->{_id, url}, alt },
    liveUrl,
    githubUrl,
    displayOrder
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug && isVisible == true][0] {
    _id,
    title,
    slug,
    subtitle,
    description,
    category,
    technologies,
    featured,
    coverImage { asset->{_id, url}, alt },
    liveUrl,
    githubUrl,
    documentationUrl,
    projectType,
    role,
    timeline,
    status,
    overview,
    businessProblem,
    objective,
    roleDetails,
    solution,
    architecture[] { _key, title, description },
    features[] { _key, title, description, icon },
    screenshots[] { _key, image { asset->{_id, url} }, title, description, alt },
    techGroups[] { _key, label, items },
    businessValue,
    challenges[] { _key, challenge, decision },
    learnings,
    confidentialityNote,
    seoTitle,
    seoDescription,
    seoImage { asset->{_id, url} },
    displayOrder
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && isVisible == true] { "slug": slug.current }
`;

// ─── Experience ─────────────────────────────────────────────────────────────────

export const experienceQuery = groq`
  *[_type == "experience" && isVisible == true] | order(displayOrder asc) {
    _id,
    company,
    role,
    employmentType,
    location,
    startDate,
    endDate,
    isCurrent,
    summary,
    responsibilities,
    achievements,
    technologies,
    companyLogo { asset->{_id, url}, alt },
    displayOrder,
    featured
  }
`;

// ─── Skill Groups ───────────────────────────────────────────────────────────────

export const skillGroupsQuery = groq`
  *[_type == "skillGroup" && isVisible == true] | order(displayOrder asc) {
    _id,
    name,
    description,
    skills[] { _key, name, level },
    icon,
    displayOrder
  }
`;

// ─── Certifications ─────────────────────────────────────────────────────────────

export const certificationsQuery = groq`
  *[_type == "certification" && isVisible == true] | order(displayOrder asc) {
    _id,
    name,
    issuer,
    issueDate,
    expiryDate,
    credentialId,
    credentialUrl,
    certificateImage { asset->{_id, url}, alt },
    description,
    skillsDemonstrated,
    featured,
    displayOrder
  }
`;

// ─── Achievements ───────────────────────────────────────────────────────────────

export const achievementsQuery = groq`
  *[_type == "achievement" && isVisible == true] | order(displayOrder asc) {
    _id,
    title,
    description,
    date,
    category,
    icon,
    displayOrder
  }
`;

// ─── Contact Methods ────────────────────────────────────────────────────────────

export const contactMethodsQuery = groq`
  *[_type == "contactMethod" && isVisible == true] | order(displayOrder asc) {
    _id,
    type,
    label,
    value,
    url,
    icon,
    isPreferred,
    displayOrder
  }
`;
