"use client"

import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import { motion } from "framer-motion"

const testimonials = [
    {
        text: "Universal API Translator saved us weeks of development time. The AI-powered conversion is incredibly accurate.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Sarah Chen",
        role: "Lead Developer at TechCorp",
    },
    {
        text: "Converting our REST API to GraphQL was seamless. The generated schema was production-ready.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Michael Rodriguez",
        role: "CTO at StartupXYZ",
    },
    {
        text: "The SDK generation feature is a game-changer. We now support 5 languages with zero manual work.",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Emily Watson",
        role: "Engineering Manager",
    },
    {
        text: "Type safety across all our API translations gives us confidence to ship faster.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "David Kim",
        role: "Senior Backend Engineer",
    },
    {
        text: "The CLI integration fits perfectly into our CI/CD pipeline. Automated API conversions on every deploy.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Jessica Martinez",
        role: "DevOps Lead",
    },
    {
        text: "Migrating from SOAP to REST was painless. The tool understood our complex schemas perfectly.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Aliza Khan",
        role: "Solutions Architect",
    },
    {
        text: "The documentation generation is excellent. Our API docs are now always up-to-date automatically.",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Robert Taylor",
        role: "Technical Writer",
    },
    {
        text: "We migrated 50+ endpoints in a single afternoon. The batch processing is incredibly powerful.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Lisa Anderson",
        role: "API Architect",
    },
    {
        text: "The gRPC to REST conversion maintained all our business logic perfectly. Impressive AI capabilities.",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "James Wilson",
        role: "Platform Engineer",
    },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function Testimonials() {
    return (
        <section className="bg-background my-20 relative">
            <div className="container z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
                >
                    {/* <div className="flex justify-center">
                        <div className="border border-border py-1 px-4 rounded-lg text-sm">
                            Testimonials
                        </div>
                    </div> */}

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
                        What our users say
                    </h2>
                    <p className="text-center mt-5 text-muted-foreground">
                        See what our customers have to say about us.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className="hidden md:block"
                        duration={19}
                        reverse={true}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className="hidden lg:block"
                        duration={17}
                    />
                </div>
            </div>
        </section>
    )
}
