"use client"

import { Book, Code, Rocket, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
    const sections = [
        {
            icon: Rocket,
            title: "Getting Started",
            description: "Quick start guide to begin converting APIs in minutes",
            links: [
                { name: "Installation", href: "#installation" },
                { name: "First Conversion", href: "#first-conversion" },
                { name: "Authentication", href: "#authentication" },
            ]
        },
        {
            icon: Code,
            title: "API Reference",
            description: "Complete API documentation for all endpoints",
            links: [
                { name: "Convert API", href: "#convert" },
                { name: "Projects", href: "#projects" },
                { name: "SDK Generation", href: "#sdk" },
            ]
        },
        {
            icon: Book,
            title: "Guides",
            description: "In-depth tutorials and best practices",
            links: [
                { name: "OpenAPI to GraphQL", href: "#openapi-graphql" },
                { name: "SOAP to REST", href: "#soap-rest" },
                { name: "gRPC Integration", href: "#grpc" },
            ]
        },
        {
            icon: Zap,
            title: "Advanced",
            description: "Advanced features and customization options",
            links: [
                { name: "Custom Transformations", href: "#custom" },
                { name: "Webhooks", href: "#webhooks" },
                { name: "CI/CD Integration", href: "#cicd" },
            ]
        },
    ]

    return (
        <div className="container py-24">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">Documentation</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about using Universal API Translator
                    </p>
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {sections.map((section, index) => (
                        <Card key={index} className="hover:border-primary transition-colors">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <section.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{section.title}</CardTitle>
                                <CardDescription>{section.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                → {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content */}
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <h2 id="installation">Installation</h2>
                    <p>Get started with Universal API Translator in seconds:</p>
                    <pre className="bg-secondary/50 dark:bg-secondary/30 rounded-lg p-4">
                        <code>npm install @universal-api/translator</code>
                    </pre>

                    <h2 id="first-conversion">Your First Conversion</h2>
                    <p>Convert an OpenAPI spec to GraphQL:</p>
                    <pre className="bg-secondary/50 dark:bg-secondary/30 rounded-lg p-4">
                        <code>{`import { Translator } from '@universal-api/translator';

const translator = new Translator({
  apiKey: 'your-api-key'
});

const result = await translator.convert({
  from: 'openapi',
  to: 'graphql',
  spec: openApiSpec
});

console.log(result.schema);`}</code>
                    </pre>

                    <h2 id="authentication">Authentication</h2>
                    <p>
                        All API requests require authentication using an API key. You can generate an API key
                        from your dashboard.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-6">
                        <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                            💡 Pro Tip
                        </p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            Store your API key in environment variables for security. Never commit API keys to version control.
                        </p>
                    </div>

                    <h2>Need Help?</h2>
                    <p>
                        Can't find what you're looking for? Check out our{" "}
                        <Link href="/contact" className="text-primary hover:underline">
                            support page
                        </Link>{" "}
                        or join our community Discord.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center p-8 rounded-lg bg-muted/30 border">
                    <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
                    <p className="text-muted-foreground mb-6">
                        Sign up for free and start converting APIs today.
                    </p>
                    <Link href="/pricing">
                        <Button size="lg">Start Free Trial</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
