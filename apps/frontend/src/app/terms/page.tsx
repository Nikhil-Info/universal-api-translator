import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for Universal API Translator.",
}

export default function TermsPage() {
    return (
        <div className="container max-w-3xl py-16 lg:py-24">
            <h1 className="mb-8 text-4xl font-bold tracking-tight">Terms of Service</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="lead">Last updated: November 23, 2025</p>

                <h2>1. Agreement to Terms</h2>
                <p>
                    By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these terms, you are prohibited from using or accessing this site.
                </p>

                <h2>2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Universal API Translator's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on Universal API Translator's website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>

                <h2>3. Disclaimer</h2>
                <p>
                    The materials on Universal API Translator's website are provided on an 'as is' basis. Universal API Translator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>4. Limitations</h2>
                <p>
                    In no event shall Universal API Translator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Universal API Translator's website.
                </p>
            </div>
        </div>
    )
}
