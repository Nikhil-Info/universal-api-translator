"use client"

import Link from "next/link"
import * as React from "react"
import { LiaGithubAlt } from "react-icons/lia"
import { links } from "@/lib/links"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export function GitHubLink() {
    return (
        <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
            <Link href={links.github} target="_blank" rel="noreferrer">
                <LiaGithubAlt className="mr-2 h-5 w-5" />
                <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
                    <StarsCount />
                </React.Suspense>
            </Link>
        </Button>
    )
}

function StarsCount() {
    const [stars, setStars] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchStars() {
            try {
                const data = await fetch("https://api.github.com/repos/Nikhil-Info/universal-api-translator")

                if (!data.ok) {
                    return
                }

                const json = await data.json()

                const formattedCount =
                    json.stargazers_count >= 1000
                        ? json.stargazers_count % 1000 === 0
                            ? `${Math.floor(json.stargazers_count / 1000)}k`
                            : `${(json.stargazers_count / 1000).toFixed(1)}k`
                        : json.stargazers_count.toLocaleString()

                setStars(formattedCount.replace(".0k", "k"))
            } catch (error) {
                // Silently fail
            }
        }

        fetchStars()
    }, [])

    if (!stars) {
        return <Skeleton className="h-4 w-8" />
    }

    return (
        <span className="text-muted-foreground w-fit text-xs tabular-nums">
            {stars}
        </span>
    )
}
