import { Metadata } from "next"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
    title: "Pricing - Simple & Transparent Plans",
    description: "Choose the perfect plan for your API conversion needs. Free tier available. Pro at $29/month with unlimited conversions. Enterprise for large teams. 14-day free trial on all paid plans.",
    keywords: ["API pricing", "API converter pricing", "SDK generation pricing", "API translation cost", "developer tools pricing"],
    openGraph: {
        title: "Pricing - Universal API Translator",
        description: "Simple, transparent pricing for API conversion and SDK generation. Free tier available with 14-day trial on paid plans.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing - Universal API Translator",
        description: "Simple pricing for API conversion. Free tier available. Pro at $29/month.",
    },
}

const tiers = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for trying out our service",
        features: [
            "100 API conversions/month",
            "Basic format support (OpenAPI, GraphQL)",
            "Community support",
            "Public projects only",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$29",
        description: "For professional developers",
        features: [
            "Unlimited API conversions",
            "All format support (OpenAPI, GraphQL, SOAP, gRPC)",
            "SDK generation (5 languages)",
            "Priority support",
            "Private projects",
            "Version control",
            "Team collaboration (up to 5 members)",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large teams and organizations",
        features: [
            "Everything in Pro",
            "Unlimited team members",
            "Custom AI model training",
            "Dedicated support",
            "SLA guarantee",
            "On-premise deployment option",
            "Custom integrations",
            "Advanced security features",
        ],
        cta: "Contact Sales",
        highlighted: false,
    },
]

export default function PricingPage() {
    const faqData = {
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Can I change plans later?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
            },
            {
                '@type': 'Question',
                name: 'What payment methods do you accept?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is there a free trial?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! All paid plans include a 14-day free trial. No credit card required.',
                },
            },
            {
                '@type': 'Question',
                name: 'What happens after my trial ends?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "You'll be automatically downgraded to the Free plan. You can upgrade anytime.",
                },
            },
        ],
    }

    return (
        <>
            <StructuredData type="FAQPage" data={faqData} />
            <div className="container py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center space-y-4 mb-16">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Choose the plan that's right for you. All plans include a 14-day free trial.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <Card
                                key={tier.name}
                                className={tier.highlighted ? "border-primary shadow-lg scale-105" : ""}
                            >
                                <CardHeader>
                                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                    <CardDescription>{tier.description}</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full"
                                        variant={tier.highlighted ? "default" : "outline"}
                                        size="lg"
                                    >
                                        {tier.cta}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="grid gap-6 md:grid-cols-2 text-left mt-8">
                            <div>
                                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                                <p className="text-sm text-muted-foreground">
                                    We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yes! All paid plans include a 14-day free trial. No credit card required.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">What happens after my trial ends?</h3>
                                <p className="text-sm text-muted-foreground">
                                    You'll be automatically downgraded to the Free plan. You can upgrade anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
