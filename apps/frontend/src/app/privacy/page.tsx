import { Metadata } from "next"
import { CenteredPageLayout } from "@/components/layout/centered-page-layout"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how we collect, use, and protect your personal information at Universal API Translator.",
}

export default function PrivacyPage() {
    return (
        <CenteredPageLayout
            title="Privacy Policy"
            description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
            icon={Shield}
            maxWidth="3xl"
        >
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="lead text-center">Last updated: November 23, 2025</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to Universal API Translator. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>

                <h2>2. Data We Collect</h2>
                <p>
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul>
                    <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data</strong> includes email address and telephone number.</li>
                    <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                </ul>

                <h2>3. How We Use Your Data</h2>
                <p>
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                </p>

                <h2>5. Your Rights</h2>
                <p>
                    Under GDPR and CCPA, you have the right to:
                </p>
                <ul>
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                </ul>

                <h2>6. Contact Us</h2>
                <p className="text-center">
                    If you have questions about this privacy policy, contact us at:{" "}
                    <a href="mailto:support@universal-api-translator.com" className="text-primary hover:underline">
                        support@universal-api-translator.com
                    </a>
                </p>
            </div>
        </CenteredPageLayout>
    )
}
