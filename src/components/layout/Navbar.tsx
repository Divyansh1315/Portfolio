"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/data/navigation";
import { MobileNav } from "./MobileNav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

interface NavbarProps {
  name?: string;
  resumeUrl?: string;
}

export function Navbar({ name, resumeUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayName = name || "Divyansh Singh";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16 lg:h-18"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-bold tracking-wide text-foreground uppercase hover:text-primary transition-colors"
          >
            {displayName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-surface border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-secondary hover:border-muted transition-all"
                aria-label="Download Resume"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            )}
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
