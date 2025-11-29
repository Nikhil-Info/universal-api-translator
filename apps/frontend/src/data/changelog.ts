export interface ChangelogEntry {
    version: string;
    date: string;
    title: string;
    description: string;
    changes: {
        type: 'feature' | 'fix' | 'improvement' | 'security';
        text: string;
    }[];
}

export const changelogData: ChangelogEntry[] = [
    {
        version: "1.0.0",
        date: "2025-11-27",
        title: "Initial Release",
        description: "The first public release of Translatio with core conversion capabilities.",
        changes: [
            { type: "feature", text: "Support for OpenAPI, GraphQL, SOAP, and gRPC conversions." },
            { type: "feature", text: "AI-powered SDK generation for Node.js, Python, Go, Java, and C#." },
            { type: "feature", text: "Interactive Playground for testing conversions." },
            { type: "improvement", text: "Responsive dashboard for managing projects." },
            { type: "security", text: "SOC 2 compliant infrastructure." }
        ]
    }
];
