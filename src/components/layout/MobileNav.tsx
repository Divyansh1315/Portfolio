"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mobileNavigation } from "@/data/navigation";
import { ThemeToggleInline } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggle}
        className="relative z-50 flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-surface transition-colors"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay */}
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-6"
          aria-label="Mobile navigation"
        >
          {mobileNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-4 min-h-[44px] flex items-center"
              tabIndex={isOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme toggle */}
          <div className="mt-4 pt-4 border-t border-border">
            <ThemeToggleInline />
          </div>
        </nav>
      </div>
    </div>
  );
}
