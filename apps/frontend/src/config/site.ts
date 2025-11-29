export const siteConfig = {
    name: "Translatio",
    description: "Translatio: Transform APIs seamlessly with AI. Convert between OpenAPI, GraphQL, SOAP, and gRPC. Auto-generate SDKs in Node, Python, Go, Java, C#. The ultimate tool for API migration and integration.",
    url: "https://translatio.dev",

    logo: {
        main: "/logo/api-logo_1.png",
        icon: "/logo/favicon_io/favicon.ico",
        appleTouchIcon: "/logo/apple-touch-icon.png",
        ogImage: "/og-image.png",
    },

    keywords: [
        "API Translator",
        "OpenAPI to GraphQL",
        "SOAP to REST",
        "gRPC Converter",
        "SDK Generator",
        "API Migration",
        "DevTools",
        "AI Coding Assistant",
        "API Documentation",
        "Swagger",
        "Postman Alternative"
    ],

    links: {
        github: "https://github.com/Nikhil-Info/universal-api-translator",
        twitter: "https://twitter.com/yourusername",
        discord: "https://discord.gg/yourinvite",
    },

    contact: {
        email: "support@universal-api-translator.com",
        dmca: "dmca@universal-api-translator.com",
        security: "security@universal-api-translator.com",
    },

    creator: {
        name: "Nikhil",
        twitter: "@yourusername",
    },
} as const;

export type SiteConfig = typeof siteConfig;
