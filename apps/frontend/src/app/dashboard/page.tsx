import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export default function DashboardPage() {
    // Mock data for now
    const projects = [
        { id: 1, name: "E-commerce API", description: "Migrating legacy SOAP to REST", updatedAt: "2 mins ago" },
        { id: 2, name: "User Service", description: "Generating Python SDK", updatedAt: "1 hour ago" },
        { id: 3, name: "Payment Gateway", description: "OpenAPI to GraphQL conversion", updatedAt: "1 day ago" },
    ]

    return (
        <>
            <div className="flex items-center">
                <h1 className="font-semibold text-lg md:text-2xl">Projects</h1>
                <Link href="/dashboard/new" className="ml-auto">
                    <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        New Project
                    </Button>
                </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id}>
                        <CardHeader>
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>Last updated: {project.updatedAt}</span>
                                <Link href={`/editor/${project.id}`}>
                                    <Button variant="secondary" size="sm">Open</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
