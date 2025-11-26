import { RefreshCw, Zap, Code2, Globe, Shield, Cpu } from "lucide-react"

const features = [
    {
        name: "Universal Conversion",
        description: "Convert between REST, GraphQL, gRPC, and SOAP seamlessly. No more manual mapping.",
        icon: RefreshCw,
    },
    {
        name: "AI-Powered Engine",
        description: "Intelligent parsing and translation using state-of-the-art LLMs to understand context.",
        icon: Zap,
    },
    {
        name: "SDK Generation",
        description: "Auto-generate client SDKs for Node, Python, Go, Java, C#, and more in seconds.",
        icon: Code2,
    },
    {
        name: "Global Standards",
        description: "Fully compliant with OpenAPI 3.1, GraphQL introspection, and WSDL 2.0 standards.",
        icon: Globe,
    },
    {
        name: "Type Safety",
        description: "Guaranteed type safety across translations. We generate TypeScript interfaces and Pydantic models.",
        icon: Shield,
    },
    {
        name: "CLI Integration",
        description: "Automate your workflow with our powerful CLI tool. Integrate directly into CI/CD pipelines.",
        icon: Cpu,
    },
]

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to bridge API gaps
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Stop wasting time rewriting API clients and server stubs. Let our AI handle the heavy lifting
                        so you can focus on building features.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {feature.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
