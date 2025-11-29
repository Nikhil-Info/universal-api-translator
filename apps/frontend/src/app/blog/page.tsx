import { getAllPosts } from "@/lib/blog"
import { PostCards } from "@/components/post-cards"
import { PageHeader } from "@/components/layout/page-header"
import { BookOpen } from "lucide-react"

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Blog"
                description="Latest updates, tutorials, and insights about API translation."
                icon={<BookOpen className="fill-[#D2F583] stroke-1 text-neutral-800" />}
            />

            <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
                <PostCards posts={posts} />
            </div>
        </div>
    )
}
