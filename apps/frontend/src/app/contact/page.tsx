import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the Universal API Translator team.",
}

export default function ContactPage() {
    return (
        <div className="container max-w-3xl py-16 lg:py-24">
            <h1 className="mb-8 text-4xl font-bold tracking-tight">Contact Us</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                    Have questions, feedback, or need support? We'd love to hear from you.
                </p>

                <div className="rounded-lg border bg-card p-8">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="mb-6">
                        The best way to reach us is via email. We typically respond within 24-48 hours.
                    </p>
                    <a
                        href="mailto:support@universal-api-translator.com"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Email Support
                    </a>
                </div>
            </div>
        </div>
    )
}
