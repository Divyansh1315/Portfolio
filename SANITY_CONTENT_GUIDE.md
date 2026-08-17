# Sanity Content Management Guide

This guide explains how to manage your portfolio content through Sanity Studio without editing any code.

---

## Opening Sanity Studio

1. **Local development**: Run `npm run dev` and visit `http://localhost:3000/studio`
2. **Production**: Visit `https://yourdomain.com/studio`
3. Sign in with your Sanity account (the one linked to the project)

---

## Content Structure

Your portfolio content is organized into these sections:

| Section | Type | Description |
|---------|------|-------------|
| Site Settings | Singleton | Name, headline, CTAs, resume, SEO defaults |
| About / Profile | Singleton | About page content, biography, focus areas |
| Homepage Content | Singleton | Section headings and descriptions for the homepage |
| Projects | Collection | Project cards and full case studies |
| Experience | Collection | Professional roles and work history |
| Skill Groups | Collection | Skill categories with individual skills |
| Certifications | Collection | Professional certifications |
| Achievements | Collection | Awards, recognitions, notable accomplishments |
| Contact Methods | Collection | How visitors can reach you |

---

## Common Tasks

### Edit Your Name, Headline, or Summary

1. Open Studio → **Site Settings**
2. Update the fields in the **Identity** tab
3. Click **Publish** (green button, bottom-right)

### Update Your Resume

1. Open Studio → **Site Settings** → **Resume** tab
2. Click the file upload area and select your new PDF
3. Update the button label if needed
4. Publish

### Create a New Project

1. Open Studio → **Projects** → Click **+** (create)
2. Fill in the **Overview** tab (title, slug, description, categories, technologies, cover image)
3. Add case study content in the **Case Study** tab
4. Add screenshots in the **Gallery** tab
5. Set **Featured** = true if you want it on the homepage
6. Set **Display Order** to control its position
7. Publish

### Update an Existing Case Study

1. Open Studio → **Projects** → Click the project
2. Navigate to the tab you want to edit (Case Study, Gallery, Technology, Outcomes)
3. Make your changes
4. Publish

### Upload Project Screenshots

1. Open the project → **Gallery** tab
2. Click **Add item** in the Screenshots array
3. Upload the image, add a title and alt text
4. Publish

### Change the Project Cover Image

1. Open the project → **Overview** tab
2. Click the Cover Image field
3. Upload or replace the image
4. Add descriptive alt text
5. Publish

### Reorder Projects

1. Open each project → **Settings** tab
2. Change the **Display Order** number (lower = first)
3. Publish each project

### Feature or Hide a Project

1. Open the project → **Settings** tab
2. Toggle **Featured Project** to show/hide on homepage
3. Toggle **Visible on Portfolio** to show/hide everywhere
4. Publish

### Update Experience

1. Open Studio → **Experience** → Click an entry or create new
2. Edit role, company, dates, summary, achievements, technologies
3. Publish

### Add a Certification

1. Open Studio → **Certifications** → Click **+**
2. Fill in name, issuer, issue date, credential ID, description
3. Publish

### Update Contact Methods

1. Open Studio → **Contact Methods** → Click an entry
2. Update the label, URL, or visibility
3. Publish

### Replace the Resume

1. Open Studio → **Site Settings** → **Resume** tab
2. Remove the existing file and upload the new PDF
3. Publish

---

## Preview & Publishing

### Save a Draft

- All changes are automatically saved as drafts
- Drafts are visible only to you in Studio (not on the live site)

### Preview Drafts

- Visit: `https://yourdomain.com/api/draft?secret=<your-read-token>&redirect=/`
- This enables draft mode — you'll see unpublished content
- To exit: visit `https://yourdomain.com/api/draft?disable=true&redirect=/`

### Publish

- Click the green **Publish** button in Studio
- Changes appear on the live site within ~60 seconds (via revalidation)
- If a webhook is configured, changes appear immediately

---

## How Long Do Published Changes Take?

- **With webhook configured**: Changes appear within seconds
- **Without webhook**: Changes appear within 60 seconds (time-based revalidation)

---

## Troubleshooting

### Validation Error: "Required field"

- Look for the red-highlighted field and fill it in
- Required fields have a red asterisk or red border

### Image Not Showing

- Ensure you uploaded the image (not just added the field)
- Check that alt text is provided (required for accessibility)

### Project Not Appearing on Site

- Check that **Visible on Portfolio** is enabled (Settings tab)
- Check that the project is **Published** (not just a draft)

### Changes Not Appearing

- Verify the document is published (check for the green "Published" badge)
- Wait up to 60 seconds for cache to refresh
- If using webhook, verify webhook is configured correctly in Sanity dashboard

---

## What Still Requires Code Changes

These elements are managed in code and cannot be changed from Sanity Studio:

- Navigation links and routes
- Page layouts and component structure
- Visual design (colors, fonts, spacing, animations)
- The process flow visual on the homepage
- Work methodology steps
- Capability card descriptions
- Dark/light theme behavior
- About page sub-sections (values, philosophy, direction)
