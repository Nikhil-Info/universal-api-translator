import { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Mail, FileText, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "DMCA & Copyright Policy - Universal API Translator",
    description: "Copyright protection and DMCA takedown procedures for Universal API Translator. Learn about intellectual property rights and reporting infringement.",
    keywords: ["DMCA", "copyright", "intellectual property", "takedown", "copyright infringement", "API copyright"],
    openGraph: {
        title: "DMCA & Copyright Policy - Universal API Translator",
        description: "Copyright policy and DMCA compliance information.",
    },
}

export default function DMCAPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="DMCA & Copyright Policy"
                description="Our commitment to protecting intellectual property rights and addressing copyright infringement."
                icon={<FileText />}
            />

            <div className="container max-w-4xl py-12 md:py-16">
                <div className="space-y-12">
                    <section className="space-y-4">
                        <p>
                            If you believe that content on our platform infringes your copyright, please send a DMCA takedown notice with the following information:
                        </p>

                        <div className="border-l-4 border-primary pl-6 space-y-3 mt-4">
                            <div>
                                <h3 className="font-semibold">1. Identification of Copyrighted Work</h3>
                                <p className="text-sm text-muted-foreground">
                                    A description of the copyrighted work you claim has been infringed.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">2. Identification of Infringing Material</h3>
                                <p className="text-sm text-muted-foreground">
                                    A description of where the infringing material is located on our platform (URL or specific location).
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">3. Contact Information</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your name, address, telephone number, and email address.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">4. Good Faith Statement</h3>
                                <p className="text-sm text-muted-foreground">
                                    A statement that you have a good faith belief that the use is not authorized.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">5. Accuracy Statement</h3>
                                <p className="text-sm text-muted-foreground">
                                    A statement under penalty of perjury that the information is accurate and you are authorized to act.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">6. Physical or Electronic Signature</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your physical or electronic signature.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Counter-Notice</h2>
                        <p>
                            If you believe your content was removed in error, you may file a counter-notice containing:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your contact information</li>
                            <li>Identification of the removed content and its former location</li>
                            <li>A statement under penalty of perjury that the content was removed by mistake</li>
                            <li>Your consent to jurisdiction of federal court</li>
                            <li>Your physical or electronic signature</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Repeat Infringer Policy</h2>
                        <p>
                            We maintain a policy of terminating accounts of users who are repeat copyright infringers in appropriate circumstances.
                        </p>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Contact Our DMCA Agent</h2>
                        <p>
                            Send DMCA notices and counter-notices to our designated agent:
                        </p>
                        <div className="bg-muted p-6 rounded-lg mt-4 space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="font-semibold">Email:</span>
                                <span className="font-mono text-sm">dmca@universal-api-translator.com</span>
                            </div>
                            <div className="flex items-start gap-2 mt-4">
                                <FileText className="h-4 w-4 text-primary mt-1" />
                                <div>
                                    <span className="font-semibold">Mailing Address:</span>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Universal API Translator<br />
                                        DMCA Agent<br />
                                        [Your Address]<br />
                                        [City, State ZIP]
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 mt-8">
                        <h2 className="text-2xl font-semibold">Response Time</h2>
                        <p>
                            We will respond to valid DMCA notices within 48-72 hours and take appropriate action, which may include removing or disabling access to the allegedly infringing content.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
