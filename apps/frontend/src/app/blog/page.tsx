import { getAllPosts } from "@/lib/blog"
import { PostCards } from "@/components/post-cards"

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <div className="container py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Blog</h1>
                    <p className="text-lg text-muted-foreground">
                        Latest updates, tutorials, and insights about API translation.
                    </p>
                </div>

                <PostCards posts={posts} />
            </div>
        </div>
    )
}
