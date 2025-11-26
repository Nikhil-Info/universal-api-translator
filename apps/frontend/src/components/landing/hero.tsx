"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FingerprintIcon } from "lucide-react"

export function Hero() {
    return (
        <main className="relative container px-2 mx-auto">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
                <motion.div
                    className="flex flex-col items-center space-y-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="flex flex-wrap items-center justify-center p-1 rounded-full bg-primary/10 backdrop-blur border border-primary/40 text-sm mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <div className="flex items-center">
                            <img
                                className="size-6 md:size-7 rounded-full border-2 border-background"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                                alt="Developer 1"
                            />
                            <img
                                className="size-6 md:size-7 rounded-full border-2 border-background -translate-x-2"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                                alt="Developer 2"
                            />
                            <img
                                className="size-6 md:size-7 rounded-full border-2 border-background -translate-x-4"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                                alt="Developer 3"
                            />
                        </div>
                        <p className="-translate-x-2 font-medium">
                            Join 10,000+ developers using our API translator
                        </p>
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        API Translation, Simplified
                    </motion.h1>
                    <motion.p
                        className="mx-auto max-w-xl text-md sm:text-2xl text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Convert between{" "}
                        <span className="font-semibold text-foreground">
                            OpenAPI, GraphQL, SOAP, and gRPC
                        </span>{" "}
                        with{" "}
                        <span className="font-semibold text-foreground">AI-powered intelligence</span>
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <Button className="rounded-xl bg-foreground text-background hover:bg-foreground/90">
                            Get Started
                            <div className="ml-2 space-x-1 hidden sm:inline-flex">
                                <FingerprintIcon className="w-5 h-5" />
                            </div>
                        </Button>
                        <Button variant="outline" className="rounded-xl">
                            <div className="mr-2 space-x-1 hidden sm:inline-flex">
                                <span className="w-5 h-5 text-xs rounded-sm border">⌘</span>
                                <span className="w-5 h-5 text-xs rounded-sm border">K</span>
                            </div>
                            View Docs
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center space-y-3 pb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <div className="flex items-center space-x-4 text-sm">
                            <span className="text-primary hover:text-primary/80 transition-colors">
                                OpenAPI
                            </span>
                            <span className="text-muted-foreground/60">
                                GraphQL
                            </span>
                            <span className="text-primary hover:text-primary/80 transition-colors">
                                gRPC
                            </span>
                            <span className="text-muted-foreground/60">
                                SOAP
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground/60">
                            AI-powered API conversion and SDK generation
                        </p>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    )
}
