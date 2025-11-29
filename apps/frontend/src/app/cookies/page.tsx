import { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Settings, BarChart, Globe, Mail, Cookie } from "lucide-react"

export const metadata: Metadata = {
    title: "Cookie Policy - Universal API Translator",
    description: "Learn how Universal API Translator uses cookies to enhance your API conversion experience. Essential, functional, and analytics cookies explained.",
    keywords: ["cookie policy", "cookies", "privacy", "data collection", "API translator cookies"],
    openGraph: {
        title: "Cookie Policy - Universal API Translator",
        description: "Transparent cookie usage policy for Universal API Translator.",
    },
}

export default function CookiePolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Cookie Policy"
                description="Learn how Universal API Translator uses cookies to enhance your API conversion experience."
                icon={<Cookie className="fill-[#D2F583] stroke-1 text-neutral-800" />}
            />

            <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                <div className="space-y-8">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section className="space-y-4 mt-8">
                            <h2 className="text-2xl font-bold tracking-tight">What Are Cookies?</h2>
                            <p className="leading-7">
                                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
                            </p>
                        </section>

                        <section className="space-y-6 mt-12">
                            <h2 className="text-2xl font-bold tracking-tight">How We Use Cookies</h2>
                            <p className="leading-7">Universal API Translator uses cookies for the following purposes:</p>

                            <div className="grid gap-6 md:grid-cols-2 not-prose">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Shield className="h-5 w-5 text-primary" />
                                            Essential Cookies
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Authentication & Session
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Security & Fraud Prevention
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Load Balancing
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Settings className="h-5 w-5 text-primary" />
                                            Functional Cookies
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Enable enhanced functionality and personalization, such as remembering your preferences and settings.
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Theme Preferences
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Language Settings
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Editor Configuration
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <BarChart className="h-5 w-5 text-primary" />
                                            Analytics Cookies
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Help us understand how visitors interact with our website to improve our service.
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Page Views & Navigation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Feature Usage Stats
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                Performance Monitoring
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section className="space-y-4 mt-12">
                            <h2 className="text-2xl font-bold tracking-tight">Managing Cookies</h2>
                            <p className="leading-7">
                                You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some features may no longer function properly.
                            </p>

                            <div className="bg-muted/50 p-6 rounded-xl border border-border mt-4 not-prose">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-primary" />
                                    Browser Settings
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Most browsers allow you to view, manage, delete, and block cookies for a website. You can find these settings in your browser's "Options" or "Preferences" menu.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-4 mt-12">
                            <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
                            <p className="leading-7">
                                If you have any questions about our use of cookies, please contact us at:
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium not-prose">
                                <Mail className="h-4 w-4" />
                                support@universal-api-translator.com
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
