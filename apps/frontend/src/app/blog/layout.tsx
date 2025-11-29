import { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen">


            {/* Blog Content */}
            <div className="container py-8 md:py-12">
                {children}
            </div>
        </div>
    )
}
