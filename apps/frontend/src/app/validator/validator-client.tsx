"use client"

import { useState } from "react"
import { CheckCircle2, AlertTriangle, XCircle, Upload, FileCode, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/page-header"

export function ValidatorClient() {
    const [file, setFile] = useState<File | null>(null)
    const [format, setFormat] = useState("openapi")
    const [isValidating, setIsValidating] = useState(false)
    const [result, setResult] = useState<null | { status: 'success' | 'error', issues: string[] }>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
            setResult(null)
        }
    }

    const handleValidate = () => {
        if (!file) return
        setIsValidating(true)
        // Simulate validation
        setTimeout(() => {
            setIsValidating(false)
            setResult({
                status: 'error',
                issues: [
                    'Missing "info.version" field',
                    'Operation "getUsers" missing description',
                    'Schema "User" has undefined property type'
                ]
            })
        }, 2000)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="API Validator"
                description="Ensure your API specifications are error-free, standards-compliant, and ready for production."
                icon={<CheckCircle2 />}
            />

            <div className="container max-w-5xl py-12 md:py-16">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Validator Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upload Specification</CardTitle>
                                <CardDescription>
                                    Upload your API definition file to check for errors and best practices.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4">
                                    <label className="text-sm font-medium">Specification Format</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {['openapi', 'graphql', 'grpc', 'soap'].map((fmt) => (
                                            <div
                                                key={fmt}
                                                onClick={() => setFormat(fmt)}
                                                className={`cursor-pointer rounded-lg border p-4 text-center transition-all hover:border-primary ${format === fmt ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border'
                                                    }`}
                                            >
                                                <div className="font-semibold uppercase">{fmt}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors">
                                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                                    <div className="space-y-2">
                                        <h3 className="font-semibold">
                                            {file ? file.name : "Drag and drop or click to upload"}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Supports JSON, YAML, GraphQL, Proto, and WSDL files
                                        </p>
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="file-upload"
                                        onChange={handleFileChange}
                                    />
                                    <Button
                                        variant="outline"
                                        className="mt-6"
                                        onClick={() => document.getElementById('file-upload')?.click()}
                                    >
                                        Select File
                                    </Button>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full"
                                    disabled={!file || isValidating}
                                    onClick={handleValidate}
                                >
                                    {isValidating ? (
                                        <>Validating...</>
                                    ) : (
                                        <>
                                            <CheckCircle2 className="mr-2 h-5 w-5" />
                                            Validate Specification
                                        </>
                                    )}
                                </Button>

                                {result && (
                                    <div className={`rounded-lg border p-4 ${result.status === 'success' ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-900' : 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900'
                                        }`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            {result.status === 'success' ? (
                                                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                                            ) : (
                                                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                            )}
                                            <h3 className={`font-semibold ${result.status === 'success' ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'
                                                }`}>
                                                {result.status === 'success' ? 'Validation Passed' : 'Validation Failed'}
                                            </h3>
                                        </div>
                                        {result.issues.length > 0 && (
                                            <ul className="list-disc pl-5 space-y-1">
                                                {result.issues.map((issue, i) => (
                                                    <li key={i} className={`text-sm ${result.status === 'success' ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                                                        }`}>
                                                        {issue}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Why Use Our Validator?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-3">
                                    <Shield className="h-5 w-5 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-medium">Security Checks</h4>
                                        <p className="text-sm text-muted-foreground">Detects security vulnerabilities and best practice violations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Zap className="h-5 w-5 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-medium">Performance</h4>
                                        <p className="text-sm text-muted-foreground">Identifies potential performance bottlenecks in your API design.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <FileCode className="h-5 w-5 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-medium">Standards Compliance</h4>
                                        <p className="text-sm text-muted-foreground">Ensures your API adheres to industry standards (OpenAPI, etc.).</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
