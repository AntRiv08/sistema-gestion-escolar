import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  iconClassName?: string
}

export function FeatureCard({ icon: Icon, title, description, className, iconClassName }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group p-8 rounded-xl border border-border/40 bg-background transition-all duration-200 hover:border-edu-300 hover:shadow-sm dark:hover:border-edu-800",
        className,
      )}
    >
      <div
        className={cn(
          "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-edu-100 p-2 text-edu-600 dark:bg-edu-900/30 dark:text-edu-400",
          iconClassName,
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-medium leading-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
