import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CenteredPageLayoutProps {
    title: string
    description?: string
    icon?: LucideIcon
    children: ReactNode
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
    variant?: "default" | "gradient" | "minimal"
}

export function CenteredPageLayout({
    title,
    description,
    icon: Icon,
    children,
    maxWidth = "3xl",
    variant = "gradient",
}: CenteredPageLayoutProps) {
    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
    }

    return (
        <div className="min-h-screen">
            {/* Enhanced Centered Header with Gradient Background */}
            <div className={cn(
                "relative border-b overflow-hidden",
                variant === "gradient" && "bg-gradient-to-br from-primary/5 via-primary/10 to-background",
                variant === "default" && "bg-muted/30",
                variant === "minimal" && "bg-background"
            )}>
                {/* Decorative Elements */}
                {variant === "gradient" && (
                    <>
                        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20" />
                    </>
                )}

                <div className="container relative py-16 md:py-20 lg:py-24">
                    <div className={`mx-auto ${maxWidthClasses[maxWidth]} text-center space-y-6`}>
                        {Icon && (
                            <div className="mx-auto w-fit">
                                <div className={cn(
                                    "p-4 rounded-2xl",
                                    variant === "gradient" && "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg shadow-primary/10",
                                    variant === "default" && "bg-primary/10 border border-primary/20",
                                    variant === "minimal" && "bg-muted"
                                )}>
                                    <Icon className="h-10 w-10 fill-[#D2F583] stroke-1 text-neutral-800" />
                                </div>
                            </div>
                        )}

                        <div className="space-y-4">
                            <h1 className={cn(
                                "font-bold tracking-tight",
                                "text-4xl md:text-5xl lg:text-6xl",
                                variant === "gradient" && "bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                            )}>
                                {title}
                            </h1>

                            {description && (
                                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-2 pt-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Content Area */}
            <div className="container py-12 md:py-16 lg:py-20">
                <div className={`mx-auto ${maxWidthClasses[maxWidth]}`}>
                    <div className={cn(
                        "relative",
                        variant === "gradient" && "rounded-2xl border bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-xl shadow-black/5",
                        variant === "default" && "rounded-xl border bg-card p-8 md:p-10",
                        variant === "minimal" && ""
                    )}>
                        {variant === "gradient" && (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none" />
                        )}
                        <div className="relative">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
