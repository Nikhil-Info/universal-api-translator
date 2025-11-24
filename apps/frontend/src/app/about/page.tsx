import { Check, Zap, Shield, Code2, Users, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Convert APIs in seconds, not hours. Our AI-powered engine processes complex specifications instantly."
        },
        {
            icon: Shield,
            title: "Enterprise Ready",
            description: "Built for scale with security, compliance, and reliability at the core."
        },
        {
            icon: Code2,
            title: "Developer First",
            description: "Designed by developers, for developers. Intuitive UI with powerful features."
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Work together seamlessly with version control and real-time collaboration."
        }
    ]

    const stats = [
        { value: "10M+", label: "API Conversions" },
        { value: "50K+", label: "Developers" },
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Support" }
    ]

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <Rocket className="h-4 w-4" />
                            Transforming API Development
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            The Universal Translator for APIs
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We're on a mission to make API integration seamless for developers worldwide.
                            Convert between any API format instantly with AI-powered intelligence.
                        </p>
                        <div className="flex gap-4 justify-center pt-4">
                            <Link href="/pricing">
                                <Button size="lg">Get Started Free</Button>
                            </Link>
                            <Link href="/docs">
                                <Button size="lg" variant="outline">View Documentation</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y bg-muted/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-lg text-muted-foreground">
                            Built with the latest technology and best practices to give you the best experience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-2">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <feature.icon className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-muted/30">
                <div className="container">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <div className="prose prose-lg dark:prose-invert">
                            <p>
                                Traditional API translation is time-consuming and error-prone. Manual conversion
                                requires deep knowledge of multiple API specifications and can take days or weeks.
                                Our AI-powered approach reduces this to seconds while maintaining accuracy and
                                preserving your API's intent.
                            </p>
                            <p>
                                We support conversion between OpenAPI, GraphQL, SOAP, gRPC, and more. Whether
                                you're migrating legacy systems, integrating third-party APIs, or building new
                                services, we've got you covered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <h2 className="text-3xl font-bold">Ready to Transform Your API Workflow?</h2>
                        <p className="text-lg text-muted-foreground">
                            Join thousands of developers who trust Universal API Translator for their API conversions.
                        </p>
                        <Link href="/pricing">
                            <Button size="lg" className="mt-4">
                                Start Free Trial
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
