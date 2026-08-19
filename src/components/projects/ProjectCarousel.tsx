"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TechPill } from "@/components/ui/TechPill";
import { cn } from "@/lib/utils";

interface CarouselProject {
  _id: string;
  title: string;
  slug: { current: string };
  subtitle: string;
  description: string;
  category: string[];
  technologies: string[];
  projectType?: string;
  coverImage: {
    asset?: { _id?: string; url: string } | null;
    alt?: string;
  } | null;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCarouselProps {
  projects: CarouselProject[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollability();

    el.addEventListener("scroll", checkScrollability, { passive: true });
    const resizeObserver = new ResizeObserver(checkScrollability);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", checkScrollability);
      resizeObserver.disconnect();
    };
  }, [checkScrollability]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    // Scroll by approximately one card width + gap
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const scrollAmount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }, []);

  // Hide arrows if only 1 card or no overflow
  const showArrows = projects.length > 1 && (canScrollLeft || canScrollRight);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {showArrows && (
        <div className="hidden sm:flex items-center gap-2 absolute -top-12 right-0">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
            className={cn(
              "flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface transition-colors",
              canScrollLeft
                ? "hover:bg-surface-secondary hover:border-muted text-foreground cursor-pointer"
                : "text-muted-foreground/40 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next projects"
            className={cn(
              "flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface transition-colors",
              canScrollRight
                ? "hover:bg-surface-secondary hover:border-muted text-foreground cursor-pointer"
                : "text-muted-foreground/40 cursor-not-allowed"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-0 sm:px-0 scrollbar-hide"
        role="list"
        aria-label="Project cards"
      >
        {projects.map((project) => (
          <article
            key={project._id}
            data-carousel-card
            className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            role="listitem"
          >
            <Link
              href={`/projects/${project.slug.current}`}
              className="group flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:bg-card-hover hover:border-muted hover:-translate-y-1 transition-all duration-200"
            >
              {/* Cover image */}
              {project.coverImage?.asset?.url ? (
                <div className="relative h-40 overflow-hidden bg-surface-secondary">
                  <Image
                    src={project.coverImage.asset.url}
                    alt={project.coverImage.alt || `${project.title} cover`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="h-40 bg-surface-secondary flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-sm">
                    No image
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 p-5">
                {/* Categories */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.category.slice(0, 3).map((cat) => (
                    <Badge key={cat} variant="primary">
                      {cat}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <TechPill key={tech} label={tech} />
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>

                  {/* External links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <span className="text-muted-foreground" aria-hidden="true">
                        <Github className="h-4 w-4" />
                      </span>
                    )}
                    {project.liveUrl && (
                      <span className="text-muted-foreground" aria-hidden="true">
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
