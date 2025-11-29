import { Metadata } from "next"
import { CenteredPageLayout } from "@/components/layout/centered-page-layout"
import { FileText, Mail } from "lucide-react"

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
        <CenteredPageLayout
            title="DMCA & Copyright Policy"
            description="Our commitment to protecting intellectual property rights and addressing copyright infringement."
            icon={FileText}
            maxWidth="3xl"
        >
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Universal API Translator respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at <a href="http://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.copyright.gov/legislation/dmca.pdf</a>, we will respond expeditiously to claims of copyright infringement committed using the Universal API Translator service.
                </p>

                <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 mt-0">Filing a DMCA Notice</h2>
                    <p className="mb-4">
                        If you are a copyright owner, or are authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2 mt-6">
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h3 className="font-medium mb-2 text-foreground">1. Identify the Work</h3>
                            <p className="text-sm text-muted-foreground">Provide a description of the copyrighted work that you claim has been infringed.</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h3 className="font-medium mb-2 text-foreground">2. Identify Material</h3>
                            <p className="text-sm text-muted-foreground">Description of where the material is located on our platform (URL).</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h3 className="font-medium mb-2 text-foreground">3. Contact Info</h3>
                            <p className="text-sm text-muted-foreground">Your address, telephone number, and email address.</p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h3 className="font-medium mb-2 text-foreground">4. Statements</h3>
                            <p className="text-sm text-muted-foreground">Good faith belief and accuracy statements under penalty of perjury.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Counter-Notice</h2>
                    <p>
                        If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your content, you may send a counter-notice containing the following information to the Copyright Agent:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Your physical or electronic signature;</li>
                        <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>
                        <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and</li>
                        <li>Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in San Francisco, California, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
                    </ul>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center mt-12">
                    <h2 className="text-2xl font-bold mb-4 mt-0">Contact Our DMCA Agent</h2>
                    <p className="mb-6 text-muted-foreground">
                        Deliver this Notice, with all items completed, to our Designated Copyright Agent:
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-lg font-medium">
                            <Mail className="h-5 w-5 text-primary" />
                            <a href="mailto:dmca@universal-api-translator.com" className="hover:text-primary transition-colors">
                                dmca@universal-api-translator.com
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            We respond to all valid notices within 48-72 hours.
                        </p>
                    </div>
                </div>
            </div>
        </CenteredPageLayout>
    )
}
