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
        ],
    },
    {
        title: "Company",
        items: [
            { name: "About", href: links.about },
            { name: "Contact", href: links.contact },
            { name: "Blog", href: links.blog },
        ],
    },
    {
        title: "Legal",
        items: [
            { name: "Terms", href: links.terms },
            { name: "Privacy", href: links.privacy },
        ],
    },
]
