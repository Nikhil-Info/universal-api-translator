import { Metadata } from "next"
import { ValidatorClient } from "./validator-client"

export const metadata: Metadata = {
    title: "API Validator - Universal API Translator",
    description: "Validate your API specifications for errors and compliance. Supports OpenAPI, GraphQL, gRPC, and SOAP validation with detailed error reporting.",
    keywords: ["API validator", "OpenAPI validator", "GraphQL validation", "API linter", "spec validation", "API compliance"],
    openGraph: {
        title: "API Validator - Universal API Translator",
        description: "Validate API specifications and ensure compliance with standards.",
    },
}

export default function ValidatorPage() {
    return <ValidatorClient />
}
