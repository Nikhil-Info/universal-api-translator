import { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Code2, Terminal, Zap, FileCode, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Documentation - Universal API Translator",
    description: "Complete documentation for API conversion. OpenAPI, GraphQL, gRPC, SOAP guides. CLI tools, SDK generation tutorials, and API reference.",
    keywords: ["API documentation", "API conversion guide", "OpenAPI tutorial", "GraphQL guide", "gRPC documentation", "SDK generation", "API reference"],
    openGraph: {
        title: "Documentation - Universal API Translator",
        description: "Complete guides and tutorials for API conversion and SDK generation.",
    },
}

export default function DocumentationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Documentation"
                description="Everything you need to know about using Universal API Translator to convert, validate, and generate SDKs."
                icon={<Book />}
            />

            <div className="container max-w-6xl py-12 md:py-16">
                <div className="space-y-16">
                    {/* Quick Start */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Quick Start</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="hover:border-primary transition-colors cursor-pointer group">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <Zap className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle>Getting Started</CardTitle>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Learn the basics of API conversion and how to use our platform in under 5 minutes.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <Link href="/docs/getting-started">
                                        <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                                            Read Guide <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            <Card className="hover:border-primary transition-colors cursor-pointer group">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <Terminal className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle>CLI Tool</CardTitle>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Install and use our command-line interface for automated API conversions.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <Link href="/docs/cli">
                                        <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                                            CLI Docs <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* API Formats */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Supported Formats</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "OpenAPI", desc: "3.0 & 3.1 Specs", icon: FileCode, href: "/docs/openapi" },
                                { title: "GraphQL", desc: "SDL & Introspection", icon: Code2, href: "/docs/graphql" },
                                { title: "gRPC", desc: "Protocol Buffers", icon: Terminal, href: "/docs/grpc" },
                                { title: "SOAP", desc: "WSDL 1.1 & 2.0", icon: FileCode, href: "/docs/soap" },
                            ].map((item, i) => (
                                <Link key={i} href={item.href}>
                                    <Card className="h-full hover:border-primary transition-colors hover:shadow-lg">
                                        <CardContent className="pt-6 space-y-3">
                                            <item.icon className="h-8 w-8 text-primary" />
                                            <div>
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Guides */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Popular Guides</h2>
                        <div className="grid gap-4">
                            {[
                                { title: "Converting OpenAPI to GraphQL", desc: "Step-by-step guide to convert REST to GraphQL with type safety." },
                                { title: "Generating Client SDKs", desc: "How to generate TypeScript, Python, Go, and Java clients." },
                                { title: "Migrating SOAP to REST", desc: "Modernize legacy SOAP services to RESTful APIs." },
                                { title: "CI/CD Integration", desc: "Automate API conversions in GitHub Actions and GitLab CI." },
                            ].map((guide, i) => (
                                <div key={i} className="group flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary transition-colors bg-card">
                                    <div className="space-y-1">
                                        <h3 className="font-semibold group-hover:text-primary transition-colors">{guide.title}</h3>
                                        <p className="text-sm text-muted-foreground">{guide.desc}</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* API Reference */}
                    <section className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Code2 className="h-8 w-8 text-primary" />
                                    <h2 className="text-2xl font-bold tracking-tight">REST API Reference</h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Integrate Universal API Translator directly into your application. View our complete API reference for endpoints, authentication, and response formats.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/docs/api-reference">
                                    <Button size="lg">View API Docs</Button>
                                </Link>
                                <Link href="/playground">
                                    <Button size="lg" variant="outline">Try Playground</Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
