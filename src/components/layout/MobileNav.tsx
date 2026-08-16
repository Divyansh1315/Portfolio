"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mobileNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggle}
        className="relative z-50 flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-surface transition-colors"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay */}
      <div
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
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
