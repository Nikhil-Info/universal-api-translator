import { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { HelpCircle, Search, Book, MessageCircle, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Help Center - Universal API Translator",
    description: "Get help with Universal API Translator. Browse FAQs, guides, and tutorials. Contact support for personalized assistance.",
    keywords: ["help", "support", "FAQ", "troubleshooting", "API help", "customer support", "documentation"],
    openGraph: {
        title: "Help Center - Universal API Translator",
        description: "Find answers and get support for Universal API Translator.",
    },
}

const faqs = [
    {
        category: "Getting Started",
        questions: [
            {
                q: "How do I convert my first API specification?",
                a: "Simply upload your API specification file (OpenAPI, GraphQL, gRPC, or SOAP) to our Playground, select the target format, and click Convert. Our AI will handle the rest!",
            },
            {
                q: "What API formats are supported?",
                a: "We support OpenAPI 3.0/3.1, GraphQL SDL, gRPC Protocol Buffers, and SOAP/WSDL 1.1/2.0. We're constantly adding support for more formats.",
            },
            {
                q: "Is there a free tier?",
                a: "Yes! Our free tier includes up to 10 API conversions per month and basic SDK generation. Perfect for trying out the platform.",
            },
        ],
    },
    {
        category: "API Conversion",
        questions: [
            {
                q: "How accurate are the conversions?",
                a: "Our AI-powered engine achieves 95%+ accuracy on standard API specifications. Complex custom schemas may require minor manual adjustments.",
            },
            {
                q: "Can I convert between any two formats?",
                a: "Yes! We support bidirectional conversion between all supported formats: OpenAPI ↔ GraphQL ↔ gRPC ↔ SOAP.",
            },
            {
                q: "What happens to my API specifications?",
                a: "Your data is encrypted and processed securely. We don't store your specifications unless you explicitly save them to your account.",
            },
        ],
    },
    {
        category: "SDK Generation",
        questions: [
            {
                q: "Which programming languages are supported for SDK generation?",
                a: "We generate SDKs for TypeScript, JavaScript, Python, Go, Java, C#, Ruby, and PHP. More languages coming soon!",
            },
            {
                q: "Are the generated SDKs production-ready?",
                a: "Yes! Our SDKs include type safety, error handling, authentication, and comprehensive documentation. They're ready to use in production.",
            },
            {
                q: "Can I customize the generated SDK?",
                a: "Absolutely! You can configure naming conventions, authentication methods, and other options before generation.",
            },
        ],
    },
    {
        category: "Billing & Plans",
        questions: [
            {
                q: "How does pricing work?",
                a: "We offer a free tier and paid plans based on usage. Pricing is per conversion with volume discounts. Enterprise plans available for teams.",
            },
            {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period.",
            },
            {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee for annual plans. Contact support for refund requests.",
            },
        ],
    },
]

export default function HelpPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Help Center"
                description="Find answers, troubleshooting guides, and support for Universal API Translator."
                icon={<HelpCircle />}
            >
                <div className="max-w-xl mx-auto mt-8 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm focus:bg-background transition-colors"
                    />
                </div>
            </PageHeader>

            <div className="container max-w-6xl py-12 md:py-16">
                <div className="space-y-16">
                    {/* Quick Links */}
                    <section className="grid gap-6 md:grid-cols-3">
                        <Link href="/docs">
                            <Card className="h-full hover:border-primary transition-colors hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Book className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Documentation</CardTitle>
                                    <CardDescription>
                                        Detailed guides and API references
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                        <Link href="/community">
                            <Card className="h-full hover:border-primary transition-colors hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <MessageCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Community</CardTitle>
                                    <CardDescription>
                                        Ask questions and share knowledge
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                        <Link href="/contact">
                            <Card className="h-full hover:border-primary transition-colors hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Contact Support</CardTitle>
                                    <CardDescription>
                                        Get help from our team
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    </section>

                    {/* FAQs */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            {faqs.map((category, i) => (
                                <Card key={i} className="border-border/50">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{category.category}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {category.questions.map((q, j) => (
                                                <div key={j} className="space-y-2">
                                                    <h4 className="font-medium text-sm flex items-start gap-2">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                        {q.q}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground pl-3.5">
                                                        {q.a}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Popular Articles */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Popular Articles</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                "How to authenticate requests",
                                "Rate limiting explained",
                                "Supported file formats",
                                "Generating a Python SDK",
                                "Handling validation errors",
                                "Team management",
                                "Billing and invoices",
                                "API versioning guide"
                            ].map((article, i) => (
                                <Link key={i} href="#" className="block group">
                                    <div className="p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors flex items-center justify-between">
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors">{article}</span>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12 text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">Still need help?</h2>
                            <p className="text-muted-foreground">
                                Our support team is available Monday through Friday, 9am to 5pm EST. We usually respond within 24 hours.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Button size="lg">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email Support
                                </Button>
                                <Button size="lg" variant="outline">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Chat with Us
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
