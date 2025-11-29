import { Metadata } from "next"
import { CenteredPageLayout } from "@/components/layout/centered-page-layout"
import { History } from "lucide-react"

export const metadata: Metadata = {
    title: "Changelog",
    description: "All notable changes to Universal API Translator.",
}

import { changelogData } from "@/data/changelog"

export default function ChangelogPage() {
    return (
        <CenteredPageLayout
            title="Changelog"
            description="All notable changes to Universal API Translator will be documented here."
            icon={History}
            maxWidth="3xl"
        >
            <div className="space-y-12">
                {changelogData.map((release) => (
                    <div key={release.version} className="border-l-2 border-primary pl-6">
                        <div className="flex flex-col gap-1 mb-4">
                            <div className="flex items-baseline gap-4">
                                <h2 className="text-2xl font-bold">v{release.version}</h2>
                                <time className="text-sm text-muted-foreground">
                                    {new Date(release.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>
                            <h3 className="text-lg font-medium">{release.title}</h3>
                            <p className="text-muted-foreground">{release.description}</p>
                        </div>
                        <ul className="space-y-3">
                            {release.changes.map((change, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span
                                        className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${change.type === "feature"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                            : change.type === "fix"
                                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                                : change.type === "security"
                                                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                            }`}
                                    >
                                        {change.type}
                                    </span>
                                    <span className="text-sm leading-relaxed">{change.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </CenteredPageLayout>
    )
}
