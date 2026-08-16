import { Project } from "@/types/portfolio";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectProblem } from "./ProjectProblem";
import { ProjectRole } from "./ProjectRole";
import { ProjectSolution } from "./ProjectSolution";
import { ProjectArchitecture } from "./ProjectArchitecture";
import { ProjectFeatures } from "./ProjectFeatures";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectTechStack } from "./ProjectTechStack";
import { ProjectValue } from "./ProjectValue";
import { ProjectChallenges } from "./ProjectChallenges";
import { ProjectLearnings } from "./ProjectLearnings";
import { ProjectNavigation } from "./ProjectNavigation";

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudyView({ project }: ProjectCaseStudyProps) {
  const cs = project.caseStudy;

  return (
    <div>
      <ProjectHero project={project} />

      {cs && (
        <>
          <ProjectOverview caseStudy={cs} />
          <ProjectProblem problems={cs.businessProblem} objective={cs.objective} />
          <ProjectRole role={cs.role} />
          <ProjectSolution solution={cs.solution} />
          <ProjectArchitecture steps={cs.architecture} />
          <ProjectFeatures features={cs.features} />

          {cs.screenshots.length > 0 && (
            <ProjectGallery
              screenshots={cs.screenshots}
              confidentialityNote={cs.confidentialityNote}
            />
          )}

          <ProjectTechStack techGroups={cs.techGroups} />
          <ProjectValue values={cs.businessValue} />
          <ProjectChallenges challenges={cs.challenges} />
          <ProjectLearnings learnings={cs.learnings} />
        </>
      )}

      <ProjectNavigation currentSlug={project.slug} />
    </div>
  );
}
