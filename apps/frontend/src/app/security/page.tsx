import { Metadata } from "next"
import { CenteredPageLayout } from "@/components/layout/centered-page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Mail } from "lucide-react"

export const metadata: Metadata = {
    title: "Security - Universal API Translator",
    description: "Enterprise-grade security for API translation. TLS 1.3 encryption, SOC 2 compliance, GDPR compliant.",
    keywords: ["security", "data protection", "encryption", "SOC 2", "GDPR", "API security"],
}

export default function SecurityPage() {
    return (
        <CenteredPageLayout
            title="Security"
            description="Enterprise-grade security for your API specifications and data."
            icon={Shield}
            maxWidth="3xl"
        >
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6 mt-0">Our Security Commitment</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Security is our top priority. We employ industry-standard security measures to ensure your data and API specifications remain protected at all times. Our infrastructure is built on a foundation of trust and transparency.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <Lock className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>End-to-End Encryption</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your API keys are never stored in plain text.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <Eye className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>Privacy by Design</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    We never store your API specifications unless explicitly saved. Processing happens in secure, ephemeral environments that are destroyed after use.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Responsible Disclosure</h2>
                    <p>
                        We appreciate the security research community&apos;s efforts in helping us maintain a secure platform. If you discover a security vulnerability, please report it responsibly. We are committed to working with researchers to resolve issues promptly.
                    </p>
                </section>

                <section className="bg-card border rounded-xl p-8 text-center not-prose">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Report a Security Issue</h2>
                    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                        If you&apos;ve discovered a security vulnerability, please email our security team immediately. We aim to respond within 24 hours.
                    </p>

                    <a
                        href="mailto:security@universal-api-translator.com"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        security@universal-api-translator.com
                    </a>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Security Best Practices</h2>
                    <div className="grid sm:grid-cols-2 gap-4 not-prose">
                        {[
                            "Enable multi-factor authentication (MFA)",
                            "Use strong, unique passwords",
                            "Keep your API keys and tokens secure",
                            "Regularly review your account activity",
                            "Don't share sensitive API specs publicly",
                            "Report suspicious activity immediately"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </CenteredPageLayout>
    )
}
