import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@radix-ui/react-avatar"
interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  index: number
}

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <Card className="border-border/40 bg-background transition-all duration-200 hover:border-edu-200 hover:shadow-sm dark:hover:border-edu-800">
      <CardContent className="p-8">
        <div className="mb-5 text-edu-400 opacity-20">
          <svg width="32" height="24" className="fill-current">
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
          </svg>
        </div>
        <p className="mb-8 text-foreground leading-relaxed">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
            <Avatar
            //   src={`/placeholder.svg?height=40&width=40&text=${author.charAt(0)}`}
            //   width={40}
            //   height={40}
            //   alt={author}
            //   className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">{author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
