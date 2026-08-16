import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[length:var(--font-size-h2)] font-bold leading-tight text-foreground">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
