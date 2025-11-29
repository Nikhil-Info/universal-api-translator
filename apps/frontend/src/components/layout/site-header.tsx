"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/links"
import { Hamburger } from "@/components/ui/hamburger"
import { GitHubLink } from "@/components/github-link"
import { Separator } from "@/components/ui/separator"
import { CommandMenu } from "@/components/command-menu"
import { LiaGithubAlt } from "react-icons/lia"
import { CiCoffeeCup } from "react-icons/ci"
import { links } from "@/lib/links"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [showContent, setShowContent] = React.useState(false)

    const handleMenuToggle = () => {
        if (!isMobileMenuOpen) {
            // Open sequence:
            // 1. Start hamburger animation
            // 2. Mount menu container
            // 3. Wait for hamburger animation to complete (~600ms)
            // 4. Show content
            setIsMobileMenuOpen(true)
            setIsAnimating(true)
            setTimeout(() => {
                setShowContent(true)
            }, 600) // Match hamburger animation duration
        } else {
            // Close sequence:
            // 1. Hide content immediately
            // 2. Start hamburger animation
            // 3. Wait for hamburger animation to complete (~600ms)
            // 4. Unmount menu container
            setShowContent(false)
            setIsAnimating(false)
            setTimeout(() => {
                setIsMobileMenuOpen(false)
            }, 600) // Match hamburger animation duration
        }
    }

    const closeMenu = () => {
        setShowContent(false)
        setIsAnimating(false)
        setTimeout(() => {
            setIsMobileMenuOpen(false)
        }, 600)
    }

    return (
        <>
            <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
                <div className="container flex h-[var(--header-height)] items-center justify-between relative">
                    {/* Desktop Nav (Left with gap from start) */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium flex-1 justify-start pl-18">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative transition-colors hover:text-foreground/80 py-2",
                                    pathname === link.href ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Logo (Center - Absolute) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Image
                                src={siteConfig.logo.main}
                                alt={siteConfig.name}
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Right Side Actions */}
                    <div className="hidden lg:flex flex-1 items-center justify-end gap-1 pr-1">
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

            {/* Mobile Menu Dropdown - Fixed positioning */}
            {isMobileMenuOpen && (
                <div
                    className={cn(
                        "fixed right-4 top-[calc(var(--header-height)+0.5rem)] w-64 rounded-md border bg-background shadow-lg transition-all duration-300 origin-top-right overflow-hidden z-[100]",
                        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                >
                    <div className="bg-background">
                        <div
                            className={cn(
                                "p-4 space-y-4 transition-opacity duration-200",
                                showContent ? "opacity-100" : "opacity-0"
                            )}
                        >
                            {showContent && (
                                <>
                                    <div className="mb-4">
                                        <CommandMenu />
                                    </div>

                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={closeMenu}
                                            className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}

                                    <div className="border-t pt-4 mt-4 space-y-4">
                                        <div className="flex items-center gap-2 px-4">
                                            <Link
                                                href={links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm rounded-full border border-border bg-background hover:bg-muted/50 transition-colors p-2 w-fit"
                                            >
                                                <LiaGithubAlt className="h-5 w-5" />
                                                <span>GitHub</span>
                                            </Link>
                                            <Link
                                                href="https://buymeacoffee.com/yourusername"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm rounded-full border border-border bg-background hover:bg-muted/50 transition-colors p-2 w-fit"
                                            >
                                                <CiCoffeeCup className="h-5 w-5" />
                                                <span>Support</span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}