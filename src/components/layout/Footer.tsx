import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { personalInfo, socialLinks } from "@/data/personal";
import { isPlaceholder } from "@/lib/utils";
import { Linkedin, Github, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Footer() {
  const configuredLinks = socialLinks.filter(
    (link) => !isPlaceholder(link.url)
  );

  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          {/* Name */}
          <Link
            href="/"
            className="text-sm font-bold tracking-wide text-foreground uppercase"
          >
            {personalInfo.name}
          </Link>

          {/* Positioning */}
          <p className="text-sm text-muted-foreground">
            Data Analytics &middot; AI &middot; Automation &middot; PMO
          </p>

          {/* Social Links — only show configured ones */}
          {configuredLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {configuredLinks.map((link) => {
                const isEmail = link.icon === "mail";
                const href = isEmail ? `mailto:${link.url}` : link.url;

                return (
                  <a
                    key={link.platform}
                    href={href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-muted transition-all"
                    aria-label={link.platform}
                  >
                    {iconMap[link.icon] ?? null}
                  </a>
                );
              })}
            </div>
          )}

          {/* Copyright */}
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
