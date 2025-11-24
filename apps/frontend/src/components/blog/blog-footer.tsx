"use client"

import Link from "next/link"
import { Edit, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface BlogFooterProps {
  slug: string
  editUrl?: string
}

export function BlogFooter({ slug, editUrl }: BlogFooterProps) {
  const defaultEditUrl = `https://github.com/yourusername/universal-api-translator/edit/main/content/blog/${slug}.mdx`

  return (
    <footer className="mt-12 pt-8 border-t space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Found a typo or want to improve this post?
        </p>
        <Link href={editUrl || defaultEditUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit on GitHub
          </Button>
        </Link>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Universal API Translator</p>
        <Link href="/blog" className="hover:text-foreground transition-colors">
          ← Back to Blog
        </Link>
      </div>
    </footer>
  )
}
