import Script from 'next/script'

interface StructuredDataProps {
    type: 'Organization' | 'WebSite' | 'WebPage' | 'Article' | 'FAQPage' | 'Product'
    data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
    const baseContext = 'https://schema.org'

    const structuredData = {
        '@context': baseContext,
        '@type': type,
        ...data,
    }

    return (
        <Script
            id={`structured-data-${type.toLowerCase()}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

// Predefined structured data for common use cases
export const organizationData = {
    name: 'Universal API Translator',
    url: 'https://universal-api-translator.com',
    logo: 'https://universal-api-translator.com/logo.png',
    description: 'AI-powered API conversion and SDK generation platform',
    sameAs: [
        'https://github.com/Nikhil-Info/universal-api-translator',
        'https://twitter.com/universalapi',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'support@universal-api-translator.com',
    },
}

export const websiteData = {
    url: 'https://universal-api-translator.com',
    name: 'Universal API Translator',
    description: 'Transform APIs seamlessly with AI. Convert between OpenAPI, GraphQL, SOAP, and gRPC.',
    publisher: {
        '@type': 'Organization',
        name: 'Universal API Translator',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://universal-api-translator.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
}
