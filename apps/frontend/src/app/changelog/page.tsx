export default function ChangelogPage() {
    const releases = [
        {
            version: "1.0.0",
            date: "2024-01-15",
            changes: [
                { type: "feature", description: "Initial release with AI-powered API conversion" },
                { type: "feature", description: "Support for OpenAPI, GraphQL, SOAP, and gRPC" },
                { type: "feature", description: "SDK generation for 5+ languages" },
            ],
        },
    ]

    return (
        <div className="container py-24">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-4">Changelog</h1>
                <p className="text-lg text-muted-foreground mb-12">
                    All notable changes to Universal API Translator will be documented here.
                </p>

                <div className="space-y-12">
                    {releases.map((release) => (
                        <div key={release.version} className="border-l-2 border-primary pl-6">
                            <div className="flex items-baseline gap-4 mb-4">
                                <h2 className="text-2xl font-bold">v{release.version}</h2>
                                <time className="text-sm text-muted-foreground">
                                    {new Date(release.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>
                            <ul className="space-y-2">
                                {release.changes.map((change, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span
                                            className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${change.type === "feature"
                                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                    : change.type === "fix"
                                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                                }`}
                                        >
                                            {change.type}
                                        </span>
                                        <span>{change.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
