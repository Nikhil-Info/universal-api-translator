import { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Github, Linkedin, Twitter, Code2, Globe, Heart } from "lucide-react"

export const metadata: Metadata = {
    title: "Team - Universal API Translator",
    description: "Meet the team behind Universal API Translator. Passionate developers and engineers building the future of API conversion and SDK generation.",
    keywords: ["team", "about us", "developers", "engineers", "company team", "leadership"],
    openGraph: {
        title: "Team - Universal API Translator",
        description: "Meet the passionate team building Universal API Translator.",
    },
}

const teamMembers = [
    {
        name: "Alex Chen",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Former API architect at Google. Passionate about making API development accessible to everyone.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Sarah Martinez",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "15+ years in distributed systems. Led engineering teams at Amazon and Microsoft.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Michael Kim",
        role: "Head of Product",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Product leader with a focus on developer tools. Previously at Stripe and Twilio.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Emily Rodriguez",
        role: "Lead Engineer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Full-stack engineer specializing in AI/ML. Built conversion algorithms from scratch.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "David Park",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        bio: "UX designer focused on developer experience. Previously at Figma and GitHub.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
    {
        name: "Jessica Taylor",
        role: "Developer Advocate",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        bio: "Community builder and technical writer. Helps developers succeed with our platform.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
        },
    },
]

export default function TeamPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Meet Our Team"
                description="We are a diverse group of engineers, designers, and API enthusiasts passionate about making API integration seamless."
                icon={<Users className="fill-[#D2F583] stroke-1 text-neutral-800" />}
            />

            <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
                <div className="space-y-20">
                    {/* Team Grid */}
                    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member, i) => (
                            <Card key={i} className="overflow-hidden group hover:border-primary transition-colors">
                                <div className="aspect-square relative bg-muted">
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                        <Users className="h-20 w-20" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent p-6 flex flex-col justify-end">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-primary font-medium">{member.role}</p>
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-4">
                                        <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                        <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                                            <Github className="h-5 w-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    {/* Values */}
                    <section className="space-y-12">
                        <div className="text-center max-w-2xl mx-auto space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
                            <p className="text-muted-foreground">
                                These core principles guide our decisions and shape our culture.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader>
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Code2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Developer First</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        We build tools we want to use ourselves. Every decision starts with the developer experience.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader>
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Globe className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Open Standards</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        We believe in open standards and interoperability. No vendor lock-in, just pure compatibility.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader>
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <Heart className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Community Driven</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        We thrive on community feedback and contribution. Together we build better software.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Join Us */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Join Our Team</h2>
                            <p className="text-muted-foreground text-lg">
                                We&apos;re always looking for talented individuals to join our mission. Check out our open positions and help us shape the future of API tools.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Button size="lg">View Openings</Button>
                                <Button size="lg" variant="outline">Read Handbook</Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
