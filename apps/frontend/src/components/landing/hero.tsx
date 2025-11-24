import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-32">
            <div className="container relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-muted-foreground">v1.0 Public Beta is live</span>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    Translate Any API <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        To Any Format
                    </span>
                </h1>
                <p className="mb-8 max-w-[800px] text-lg text-muted-foreground sm:text-xl">
                    The universal translator for developers. Convert OpenAPI, GraphQL, SOAP, and gRPC instantly.
                    Generate production-ready SDKs in seconds using advanced AI.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/dashboard">
                        <Button size="lg" className="h-12 px-8 text-base">
                            Start Translating <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/docs">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                            Read Documentation
                        </Button>
                    </Link>
                </div>

                {/* Abstract background elements */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-violet-500 blur-[100px] rounded-full" />
                </div>
            </div>
        </section>
    )
}
