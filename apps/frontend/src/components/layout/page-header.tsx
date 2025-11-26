"use client"

import React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface PageHeaderProps {
    title: string
    description: string
    icon?: React.ReactElement<any>
    children?: React.ReactNode
}

export function PageHeader({ title, description, icon, children }: PageHeaderProps) {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-background border-b border-border/40">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center space-y-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-2">
                        {icon && (
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                                    {React.cloneElement(icon, { className: `h-8 w-8 text-primary ${icon.props.className || ''}` })}
                                </div>
                            </div>
                        )}
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            {title}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                            {description}
                        </p>
                    </div>
                    {children && (
                        <div className="pt-4">
                            {children}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
