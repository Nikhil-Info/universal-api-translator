import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getPostBySlug } from "@/lib/blog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import TableOfContents, { TOC } from "@/components/blog/table-of-contents"
import MobileTableOfContents from "@/components/blog/mobile-toc"
import { ProgressBar } from "@/components/blog/progress-bar"
import { MDXRemote } from "next-mdx-remote/rsc"
import { components } from "@/components/blog/mdx-components"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        }
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    // Get author initials
    const authorInitials = post.author
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()

    // Convert headings to TOC format
    const toc: TOC[] = post.headings.map((heading) => ({
        title: heading.text,
        url: heading.id,
        depth: heading.level
    }))

    return (
        <>
            <ProgressBar />

            <div className="min-h-screen bg-background">
                {/* Article Layout */}
                <div className="container max-w-7xl pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                        {/* Main Content */}
                        <article className="max-w-3xl mx-auto w-full">
                            {/* Back Button & Date */}
                            <div className="mb-8 flex flex-col gap-4">
                                <Link
                                    href="/blog"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-muted/50 transition-colors"
                                    aria-label="Back to Blog"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                </Link>
                                <time className="text-sm text-muted-foreground">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                {post.title}
                            </h1>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">Posted by</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="text-xs">{authorInitials}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">{post.author}</span>
                                </div>
                            </div>

                            <Separator className="mb-8" />

                            {/* Article Content */}
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <MDXRemote source={post.content} components={components} />

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-12 flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>

                        {/* Desktop Table of Contents */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-20">
                                <TableOfContents toc={toc} />
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Mobile Table of Contents */}
                <MobileTableOfContents toc={toc} />
            </div>
        </>
    )
}
