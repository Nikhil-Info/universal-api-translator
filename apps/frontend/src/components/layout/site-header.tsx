"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Github, Menu, X, LogIn, UserPlus } from "lucide-react"
import { navLinks } from "@/lib/links"
import { Hamburger } from "@/components/ui/hamburger"
import { GitHubLink } from "@/components/github-link"
import { Separator } from "@/components/ui/separator"
import { CommandMenu } from "@/components/command-menu"
import { LiaGithubAlt } from "react-icons/lia"
import { links } from "@/lib/links"

export function SiteHeader() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isAnimating, setIsAnimating] = React.useState(false)

    const handleMenuToggle = () => {
        if (!isMobileMenuOpen) {
            setIsMobileMenuOpen(true)
            setIsAnimating(true)
        } else {
            // Wait for hamburger animation (600ms) before hiding menu
            setIsAnimating(false)
            setTimeout(() => setIsMobileMenuOpen(false), 600)
        }
    }

    const closeMenu = () => {
        setIsAnimating(false)
        setTimeout(() => setIsMobileMenuOpen(false), 600)
    }

    return (
        <>
            <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
                <div className="container flex h-[var(--header-height)] items-center justify-between relative">
                    {/* Desktop Nav (Left) */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium flex-1 justify-start">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    pathname === link.href ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Logo (Center - Absolute) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                                    UAT
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Right Side Actions */}
                    <div className="hidden lg:flex flex-1 items-center justify-end gap-1">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <CommandMenu />
                        </div>

                        <Separator orientation="vertical" className="h-4 mx-2" />

                        <GitHubLink />
                    </div>

                    {/* Mobile Logo (Center) */}
                    <div className="flex lg:hidden flex-1 justify-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                                UAT
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Hamburger (Right) */}
                    <div className="lg:hidden absolute right-4">
                        <Hamburger isOpen={isMobileMenuOpen} onClick={handleMenuToggle} />
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className={cn(
                        "fixed inset-x-0 top-[var(--header-height)] bottom-0 bg-background/95 backdrop-blur z-40 lg:hidden transition-all duration-200",
                        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="p-4 space-y-4 h-full overflow-y-auto pb-20">
                        <div className="mb-4">
                            <CommandMenu />
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="block px-4 py-3 text-lg font-medium hover:bg-muted rounded-lg transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="border-t pt-4 mt-4 space-y-4">
                            <div className="px-4">
                                <Link
                                    href={links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                                >
                                    <LiaGithubAlt className="h-5 w-5" />
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
