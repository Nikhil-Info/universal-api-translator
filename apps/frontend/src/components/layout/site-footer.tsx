import Link from "next/link"
import Image from "next/image"
import { footerLinks, links } from "@/lib/links"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { VisitorCounter } from "@/components/visitor-counter"

export function SiteFooter() {
    return (
        <footer className="relative border-t bg-background overflow-hidden">
            {/* Teal gradient background - light mode */}
            <div
                className="absolute inset-0 z-0 dark:opacity-0 opacity-100 transition-opacity duration-300"
                style={{
                    backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ccfbf1 100%)`,
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Dark gradient background - dark mode */}
            <div
                className="absolute inset-0 z-0 dark:opacity-100 opacity-0 transition-opacity duration-300"
                style={{
                    backgroundImage: `radial-gradient(125% 125% at 50% 10%, #0a0a0a 40%, #134e4a 100%)`,
                    backgroundSize: "100% 100%",
                }}
            />

            <div className="container relative z-10 flex flex-col gap-8 py-8 md:py-16 px-4 md:px-6">
                <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                    <div className="flex flex-col gap-4 max-w-sm">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logo/api-logo_1.png"
                                alt="Universal API Translator Logo"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                            <span className="font-bold">Universal API Translator</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Translate any API format to any other format instantly using AI.
                            OpenAPI, GraphQL, SOAP, and more.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
                        {footerLinks.map((column) => (
                            <div key={column.title} className="flex flex-col gap-2">
                                <h3 className="font-semibold">{column.title}</h3>
                                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                                    {column.items.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="hover:underline hover:text-foreground">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar: Visitor Counter (Left), Theme Switcher (Center), Year (Right) */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center border-t pt-8">
                    <div className="flex justify-center sm:justify-start order-2 sm:order-1">
                        <VisitorCounter />
                    </div>

                    <div className="flex justify-center order-1 sm:order-2">
                        <ThemeSwitcher />
                    </div>

                    <div className="flex justify-center sm:justify-end order-3">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Universal API Translator.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
