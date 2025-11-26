export const links = {
    home: "/",
    dashboard: "/dashboard",
    pricing: "/pricing",
    about: "/about",
    contact: "/contact",
    terms: "/terms",
    privacy: "/privacy",
    login: "/sign-in",
    signup: "/sign-up",
    github: "https://github.com/yourusername/universal-api-translator",
    twitter: "https://twitter.com/yourusername",
    discord: "https://discord.gg/yourserver",
    docs: "/docs",
    features: "/#features",
    testimonials: "/#testimonials",
    blog: "/blog",
    changelog: "/changelog",
    cookies: "/cookies",
    dmca: "/dmca",
    security: "/security",
    documentation: "/documentation",
    community: "/community",
    validator: "/validator",
    team: "/team",
    help: "/help",
}

export const navLinks = [
    { name: "Features", href: links.features },
    { name: "Playground", href: "/playground" },
    { name: "About", href: links.about },
    { name: "Docs", href: links.docs },
]

export const footerLinks = [
    {
        title: "Product",
        items: [
            { name: "Features", href: links.features },
            { name: "Dashboard", href: links.dashboard },
            { name: "Playground", href: "/playground" },
            { name: "API Validator", href: links.validator },
        ],
    },
    {
        title: "Company",
        items: [
            { name: "About", href: links.about },
            { name: "Contact", href: links.contact },
            { name: "Blog", href: links.blog },
            { name: "Team", href: links.team },
        ],
    },
    {
        title: "Legal",
        items: [
            { name: "Terms", href: links.terms },
            { name: "Privacy", href: links.privacy },
            { name: "Cookie Policy", href: links.cookies },
            { name: "DMCA", href: links.dmca },
            { name: "Security", href: links.security },
        ],
    },
    {
        title: "Resources",
        items: [
            { name: "Documentation", href: links.documentation },
            { name: "Community", href: links.community },
            { name: "Changelog", href: links.changelog },
            { name: "Help Center", href: links.help },
        ],
    },
]
