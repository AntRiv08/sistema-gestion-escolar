import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  badge?: string
  badgeVariant?: "default" | "edu" | "accent1" | "accent2"
}

export function SectionHeading({
  title,
  description,
  centered = false,
  className,
  badge,
  badgeVariant = "edu",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center mx-auto", className)}>
      {badge && (
        <div
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-2",
            badgeVariant === "default" && "bg-primary/10 text-primary",
            badgeVariant === "edu" && "bg-edu-500/10 text-edu-700 dark:bg-edu-500/20 dark:text-edu-400",
            badgeVariant === "accent1" &&
              "bg-accent1-500/10 text-accent1-700 dark:bg-accent1-500/20 dark:text-accent1-400",
            badgeVariant === "accent2" &&
              "bg-accent2-500/10 text-accent2-700 dark:bg-accent2-500/20 dark:text-accent2-400",
          )}
        >
          {badge}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-edu-700 dark:text-edu-400">
        {title}
      </h2>
      {description && <p className="mt-4 text-xl text-muted-foreground max-w-3xl">{description}</p>}
    </div>
  )
}
