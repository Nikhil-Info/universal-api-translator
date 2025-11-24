"use client"

import { Calendar, Clock, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface BlogHeaderProps {
  title: string
  description?: string
  date: string
  author: string
  readingTime?: string
  tags?: string[]
  authorImage?: string
}

export function BlogHeader({
  title,
  description,
  date,
  author,
  readingTime = "5 min read",
  tags = [],
  authorImage,
}: BlogHeaderProps) {
  return (
    <header className="space-y-6 pb-8 border-b">
      <div className="space-y-4">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={authorImage} alt={author} />
            <AvatarFallback>
              {author.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-foreground">{author}</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
