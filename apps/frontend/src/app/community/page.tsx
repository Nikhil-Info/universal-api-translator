import { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Users, Github, MessageSquare, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Community - Universal API Translator",
    description: "Join 10,000+ developers in the Universal API Translator community. Discord server, GitHub discussions, support forums, and collaboration.",
    keywords: ["API community", "developer community", "Discord", "GitHub discussions", "API support", "developer forum"],
    openGraph: {
        title: "Community - Universal API Translator",
        description: "Connect with developers building better APIs together.",
    },
}

export default function CommunityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Community"
                description="Join thousands of developers building the future of API integration. Connect, share, and learn."
                icon={<Users />}
            />

            <div className="container max-w-6xl py-12 md:py-16">
                <div className="space-y-16">
                    {/* Community Stats */}
                    <section className="grid gap-6 md:grid-cols-3">
                        <Card className="bg-muted/30 border-border/50">
                            <CardContent className="pt-6 text-center space-y-2">
                                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit">
                                    <Github className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold">5.2k+</div>
                                <p className="text-sm text-muted-foreground">GitHub Stars</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-muted/30 border-border/50">
                            <CardContent className="pt-6 text-center space-y-2">
                                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold">12k+</div>
                                <p className="text-sm text-muted-foreground">Discord Members</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-muted/30 border-border/50">
                            <CardContent className="pt-6 text-center space-y-2">
                                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit">
                                    <Heart className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold">150+</div>
                                <p className="text-sm text-muted-foreground">Contributors</p>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Join Channels */}
                    <section className="grid gap-8 md:grid-cols-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                    Discord Server
                                </CardTitle>
                                <CardDescription>
                                    Chat with other developers, get real-time help, and share your projects.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        <span>#general - General discussion</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        <span>#help - Technical support</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        <span>#showcase - Show off your work</span>
                                    </li>
                                </ul>
                                <Button className="w-full">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Join Discord
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Github className="h-5 w-5 text-primary" />
                                    GitHub Discussions
                                </CardTitle>
                                <CardDescription>
                                    Propose features, report bugs, and contribute to the codebase.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                        <span>Feature Requests</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        <span>Bug Reports</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                        <span>Q&A</span>
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Discussions
                                </Button>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Recent Discussions */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold">Recent Discussions</h2>
                        <div className="space-y-4">
                            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 flex-1">
                                        <h3 className="font-semibold">How to handle nested objects in OpenAPI to GraphQL conversion?</h3>
                                        <p className="text-sm text-muted-foreground">
                                            I'm converting a complex REST API with deeply nested objects...
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>by @sarah_dev</span>
                                            <span>•</span>
                                            <span>12 replies</span>
                                            <span>•</span>
                                            <span>2 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>12</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 flex-1">
                                        <h3 className="font-semibold">SDK generation for React Native - best practices?</h3>
                                        <p className="text-sm text-muted-foreground">
                                            What's the recommended approach for generating TypeScript SDKs...
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>by @mobile_mike</span>
                                            <span>•</span>
                                            <span>8 replies</span>
                                            <span>•</span>
                                            <span>5 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 flex-1">
                                        <h3 className="font-semibold">Feature Request: Support for AsyncAPI specifications</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Would love to see support for event-driven APIs using AsyncAPI...
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>by @event_enthusiast</span>
                                            <span>•</span>
                                            <span>24 replies</span>
                                            <span>•</span>
                                            <span>1 day ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Community Guidelines */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold">Community Guidelines</h2>
                        <div className="bg-muted p-8 rounded-lg space-y-4">
                            <p className="text-muted-foreground">
                                Our community is built on respect, collaboration, and helping each other succeed. Please follow these guidelines:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Be respectful and constructive in all interactions</li>
                                <li>Search before posting to avoid duplicate discussions</li>
                                <li>Provide context and code examples when asking for help</li>
                                <li>Share your knowledge and help others when you can</li>
                                <li>Keep discussions on-topic and relevant to API development</li>
                                <li>Report spam, abuse, or inappropriate content</li>
                            </ul>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center space-y-4">
                        <h2 className="text-2xl font-bold">Ready to Join?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Become part of our growing community of developers building better APIs together.
                        </p>
                        <div className="flex gap-3 justify-center">
                            <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer">
                                <Button>Join Discord</Button>
                            </a>
                            <a href="https://github.com/yourusername/universal-api-translator" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline">Star on GitHub</Button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
