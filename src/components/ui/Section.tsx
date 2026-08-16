import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "surface";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-(--spacing-section-y)",
        variant === "surface" && "bg-surface",
        className
      )}
    >
      {children}
    </section>
  );
}
