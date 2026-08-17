import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Linkedin, Github, Mail } from "lucide-react";
import { getSiteSettings, getContactMethods } from "@/sanity/lib/fetch";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export async function Footer() {
  const [settings, contactMethods] = await Promise.all([
    getSiteSettings(),
    getContactMethods(),
  ]);

  const name = settings?.name || "Divyansh Singh";
  const footerText = settings?.footerText || "Data Analytics · AI · Automation · PMO";

  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          {/* Name */}
          <Link
            href="/"
            className="text-sm font-bold tracking-wide text-foreground uppercase"
          >
            {name}
          </Link>

          {/* Positioning */}
          <p className="text-sm text-muted-foreground">
            {footerText}
          </p>

          {/* Social Links */}
          {contactMethods.length > 0 && (
            <nav aria-label="Social links" className="flex items-center gap-4">
              {contactMethods.map((link) => {
                const isEmail = link.type === "email";
                const href = isEmail ? `mailto:${link.url}` : link.url;

                return (
                  <a
                    key={link._id}
                    href={href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-muted transition-all"
                    aria-label={link.label}
                  >
                    {iconMap[link.icon] ?? null}
                  </a>
                );
              })}
            </nav>
          )}

          {/* Copyright */}
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
