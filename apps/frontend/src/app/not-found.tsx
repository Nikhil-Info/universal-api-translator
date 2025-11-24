import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
            <div className="mx-auto max-w-2xl text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button size="lg" className="w-full sm:w-auto">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Homepage
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                        Here are some helpful links instead:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/docs" className="text-primary hover:underline">
                            Documentation
                        </Link>
                        <Link href="/blog" className="text-primary hover:underline">
                            Blog
                        </Link>
                        <Link href="/pricing" className="text-primary hover:underline">
                            Pricing
                        </Link>
                        <Link href="/about" className="text-primary hover:underline">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-primary hover:underline">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
