import { cn } from "@/lib/utils";

interface TechPillProps {
  label: string;
  className?: string;
}

export function TechPill({ label, className }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-surface-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border transition-colors hover:text-foreground hover:border-muted",
        className
      )}
    >
      {label}
    </span>
  );
}
