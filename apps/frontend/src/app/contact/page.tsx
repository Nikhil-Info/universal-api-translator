import { Metadata } from "next"
import { CenteredPageLayout } from "@/components/layout/centered-page-layout"
import { Mail, MessageSquare, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the Universal API Translator team.",
}

export default function ContactPage() {
    return (
        <CenteredPageLayout
            title="Contact Us"
            description="Have questions, feedback, or need support? We'd love to hear from you."
            icon={Mail}
            maxWidth="3xl"
            variant="minimal"
        >
            <div className="space-y-16">
                {/* Main CTA */}
                <div className="text-center space-y-6">
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you have a question about features, pricing, or need technical support, our team is ready to answer all your questions.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="mailto:support@translatio.com">
                            <Button size="lg" className="w-full sm:w-auto gap-2 h-12 px-8 text-base">
                                <Mail className="h-5 w-5" />
                                Email Support
                            </Button>
                        </a>
                        <a href="https://twitter.com/universal_api" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 h-12 px-8 text-base">
                                Follow on Twitter
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Contact Options - No Cards */}
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <MessageSquare className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl">General Inquiries</h3>
                        </div>
                        <p className="text-muted-foreground">
                            For general questions about our service, account management, or billing.
                        </p>
                        <a
                            href="mailto:support@translatio.com"
                            className="text-primary font-medium hover:underline inline-flex items-center gap-2 text-lg"
                        >
                            support@translatio.com
                        </a>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl">Business & Partnerships</h3>
                        </div>
                        <p className="text-muted-foreground">
                            For enterprise sales, strategic partnerships, and media inquiries.
                        </p>
                        <a
                            href="mailto:business@translatio.com"
                            className="text-primary font-medium hover:underline inline-flex items-center gap-2 text-lg"
                        >
                            business@translatio.com
                        </a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="border-t pt-12">
                    <div className="text-center space-y-4">
                        <h3 className="font-semibold text-2xl">Frequently Asked Questions</h3>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Have you checked our documentation? You might find your answer there.
                        </p>
                        <a href="/documentation" className="inline-block">
                            <Button variant="outline" size="lg" className="gap-2">
                                Visit Documentation →
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </CenteredPageLayout>
    )
}
