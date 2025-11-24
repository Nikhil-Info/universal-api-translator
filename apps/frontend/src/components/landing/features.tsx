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
        <section id="features" className="py-24 sm:py-32">
            <div className="container">
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
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
