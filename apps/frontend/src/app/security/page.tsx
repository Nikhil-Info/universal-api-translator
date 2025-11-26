import { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Mail } from "lucide-react"

export const metadata: Metadata = {
    title: "Security - Universal API Translator",
    description: "Enterprise-grade security for API translation. TLS 1.3 encryption, SOC 2 compliance, GDPR compliant. Learn about our security practices and data protection.",
    keywords: ["security", "data protection", "encryption", "SOC 2", "GDPR", "API security", "bug bounty", "responsible disclosure"],
    openGraph: {
        title: "Security - Universal API Translator",
        description: "Enterprise-grade security and data protection for API translation.",
    },
}

export default function SecurityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Security"
                description="Enterprise-grade security for your API specifications and data."
                icon={<Shield />}
            />

            <div className="container max-w-4xl py-12 md:py-16">
                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Our Security Commitment</h2>
                        <p>
                            Security is our top priority. We employ industry-standard security measures to ensure your data and API specifications remain protected at all times.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 mt-6">
                            <Card>
                                <CardHeader>
                                    <Lock className="h-6 w-6 text-primary mb-2" />
                                    <CardTitle>Encryption</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Eye className="h-6 w-6 text-primary mb-2" />
                                    <CardTitle>Privacy First</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        We never store your API specifications unless explicitly saved. Processing happens in secure, ephemeral environments.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Responsible Disclosure</h2>
                        <p>
                            We appreciate the security research community's efforts in helping us maintain a secure platform. If you discover a security vulnerability, please report it responsibly.
                        </p>

                        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-6 rounded-lg mt-4">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 mt-1" />
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-amber-900 dark:text-amber-100">Bug Bounty Program</h3>
                                    <p className="text-sm text-amber-800 dark:text-amber-200">
                                        We offer rewards for responsibly disclosed security vulnerabilities. Please do not publicly disclose vulnerabilities until we've had a chance to address them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Report a Security Issue</h2>
                        <p>
                            If you've discovered a security vulnerability, please email us at:
                        </p>
                        <div className="bg-muted p-6 rounded-lg mt-4">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="font-mono text-sm">security@universal-api-translator.com</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                Please include:
                            </p>
                            <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                                <li>Description of the vulnerability</li>
                                <li>Steps to reproduce</li>
                                <li>Potential impact</li>
                                <li>Your contact information</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-4">
                                We aim to respond within 24 hours and will keep you updated on our progress.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Security Best Practices for Users</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enable multi-factor authentication (MFA) on your account</li>
                            <li>Use strong, unique passwords</li>
                            <li>Keep your API keys and tokens secure</li>
                            <li>Regularly review your account activity</li>
                            <li>Don't share sensitive API specifications publicly</li>
                            <li>Report suspicious activity immediately</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
