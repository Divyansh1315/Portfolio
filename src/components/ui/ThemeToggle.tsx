"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef, useCallback } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const handleSelect = useCallback(
    (value: string) => {
      setTheme(value);
      setOpen(false);
    },
    [setTheme]
  );

  // Prevent hydration mismatch — render a placeholder until mounted
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-surface border border-border" aria-hidden="true" />
    );
  }

  const ActiveIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-muted transition-all",
          open && "border-muted text-foreground"
        )}
        aria-label="Change color theme"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <ActiveIcon className="h-4 w-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Theme options"
          className="absolute right-0 top-full mt-2 w-36 rounded-lg border border-border bg-surface shadow-lg shadow-black/10 py-1 z-50 animate-in fade-in-0 zoom-in-95"
        >
          {themes.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              role="option"
              aria-selected={theme === value}
              onClick={() => handleSelect(value)}
              className={cn(
                "flex items-center gap-2.5 w-full px-3 py-2 text-sm transition-colors",
                theme === value
                  ? "text-primary font-medium bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-secondary"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Inline version for mobile nav — renders all three options as buttons */
export function ThemeToggleInline() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2" role="radiogroup" aria-label="Color theme">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          role="radio"
          aria-checked={theme === value}
          onClick={() => setTheme(value)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all",
            theme === value
              ? "bg-primary/10 text-primary border border-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-surface-secondary border border-transparent"
          )}
          aria-label={`${label} theme`}
        >
          <Icon className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">{label}</span>
        </button>
      ))}
    </div>
  );
}
