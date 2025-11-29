"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Code2, Sparkles, Copy, Download, RefreshCw, Zap, Clock, Loader2, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"

export default function TranslatePage() {
    const [inputFormat, setInputFormat] = useState("openapi")
    const [outputFormat, setOutputFormat] = useState("graphql")
    const [inputSpec, setInputSpec] = useState("")
    const [outputSpec, setOutputSpec] = useState("")
    const [isConverting, setIsConverting] = useState(false)
    const [copiedInput, setCopiedInput] = useState(false)
    const [copiedOutput, setCopiedOutput] = useState(false)

    const handleConvert = async () => {
        if (!inputSpec.trim()) {
            toast.error("Please enter an API specification to convert")
            return
        }

        setIsConverting(true)
        setOutputSpec("")

        try {
            const response = await fetch('/api/convert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputSpec,
                    inputFormat,
                    outputFormat,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Conversion failed')
            }

            setOutputSpec(data.convertedSpec)
            toast.success("API converted successfully!")
        } catch (error: unknown) {
            console.error('Conversion error:', error)
            const errorMessage = error instanceof Error ? error.message : "Failed to convert API. Please try again."
            toast.error(errorMessage)
        } finally {
            setIsConverting(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault()
            handleConvert()
        }
    }

    const handleCopyInput = () => {
        navigator.clipboard.writeText(inputSpec)
        setCopiedInput(true)
        setTimeout(() => setCopiedInput(false), 2000)
        toast.success("Input copied!")
    }

    const handleCopyOutput = () => {
        if (!outputSpec) {
            toast.error("No output to copy")
            return
        }
        navigator.clipboard.writeText(outputSpec)
        setCopiedOutput(true)
        setTimeout(() => setCopiedOutput(false), 2000)
        toast.success("Output copied!")
    }

    const handleClear = () => {
        setInputSpec("")
        setOutputSpec("")
        toast.success("Cleared!")
    }

    const handleDownload = () => {
        if (!outputSpec) {
            toast.error("No output to download")
            return
        }

        const formatExtensions: Record<string, string> = {
            openapi: 'yaml',
            swagger: 'json',
            graphql: 'graphql',
            soap: 'wsdl',
            grpc: 'proto',
            rest: 'json',
            raml: 'raml',
            asyncapi: 'yaml',
            postman: 'json',
            insomnia: 'json',
        }

        const blob = new Blob([outputSpec], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `converted-api.${formatExtensions[outputFormat]}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        toast.success("Downloaded!")
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-8 pb-12">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">AI-Powered Translation</span>
                    </div> */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Free API Translator
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Convert between OpenAPI, GraphQL, SOAP, gRPC, and more. Press Ctrl+Enter to convert.
                    </p>
                </motion.div>

                {/* Main Translator Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6">
                        {/* Input Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label className="text-lg font-semibold flex items-center gap-2">
                                    <Code2 className="h-5 w-5 text-primary" />
                                    Input
                                </Label>
                                <Select value={inputFormat} onValueChange={setInputFormat}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="openapi">OpenAPI 3.0</SelectItem>
                                        <SelectItem value="swagger">Swagger 2.0</SelectItem>
                                        <SelectItem value="graphql">GraphQL</SelectItem>
                                        <SelectItem value="soap">SOAP/WSDL</SelectItem>
                                        <SelectItem value="grpc">gRPC Proto</SelectItem>
                                        <SelectItem value="rest">REST API</SelectItem>
                                        <SelectItem value="raml">RAML</SelectItem>
                                        <SelectItem value="asyncapi">AsyncAPI</SelectItem>
                                        <SelectItem value="postman">Postman Collection</SelectItem>
                                        <SelectItem value="insomnia">Insomnia</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="relative">
                                <Textarea
                                    placeholder="Paste your API specification here... (Ctrl+Enter to convert)"
                                    className="h-[500px] font-mono text-sm resize-none overflow-y-scroll pr-12"
                                    value={inputSpec}
                                    onChange={(e) => setInputSpec(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <div className="absolute top-2 right-2 flex flex-col gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleCopyInput}
                                    >
                                        <AnimatePresence mode="wait">
                                            {copiedInput ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Check className="h-4 w-4 text-green-500" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Copy className="h-4 w-4" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleClear}
                                    >
                                        <RefreshCw className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Center Arrow */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-full w-px bg-border" />
                                <Button
                                    size="lg"
                                    className="rounded-full h-14 w-14 p-0 shadow-lg"
                                    onClick={handleConvert}
                                    disabled={isConverting}
                                >
                                    {isConverting ? (
                                        <Loader2 className="h-6 w-6 animate-spin" />
                                    ) : (
                                        <ArrowRight className="h-6 w-6" />
                                    )}
                                </Button>
                                <div className="h-full w-px bg-border" />
                            </div>
                        </div>

                        {/* Mobile Arrow */}
                        <div className="lg:hidden flex justify-center">
                            <Button
                                size="lg"
                                className="rounded-full gap-2 shadow-lg"
                                onClick={handleConvert}
                                disabled={isConverting}
                            >
                                {isConverting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Converting...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="h-5 w-5" />
                                        Convert
                                        <ArrowRight className="h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </div>

                        {/* Output Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label className="text-lg font-semibold flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-primary" />
                                    Output
                                </Label>
                                <Select value={outputFormat} onValueChange={setOutputFormat}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="openapi">OpenAPI 3.0</SelectItem>
                                        <SelectItem value="swagger">Swagger 2.0</SelectItem>
                                        <SelectItem value="graphql">GraphQL</SelectItem>
                                        <SelectItem value="soap">SOAP/WSDL</SelectItem>
                                        <SelectItem value="grpc">gRPC Proto</SelectItem>
                                        <SelectItem value="rest">REST API</SelectItem>
                                        <SelectItem value="raml">RAML</SelectItem>
                                        <SelectItem value="asyncapi">AsyncAPI</SelectItem>
                                        <SelectItem value="postman">Postman Collection</SelectItem>
                                        <SelectItem value="insomnia">Insomnia</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="relative">
                                <Textarea
                                    placeholder="Your converted API will appear here..."
                                    className="h-[500px] font-mono text-sm bg-muted/50 resize-none overflow-y-scroll pr-12"
                                    value={outputSpec}
                                    readOnly
                                />
                                <div className="absolute top-2 right-2 flex flex-col gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleCopyOutput}
                                    >
                                        <AnimatePresence mode="wait">
                                            {copiedOutput ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Check className="h-4 w-4 text-green-500" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Copy className="h-4 w-4" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleDownload}
                                    >
                                        <Download className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="border-2 hover:border-primary/50 transition-colors">
                        <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Zap className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">100% Free</h3>
                                <p className="text-sm text-muted-foreground">
                                    No sign-up, no credit card, no limits. Convert unlimited APIs completely free.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/50 transition-colors">
                        <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">AI-Powered</h3>
                                <p className="text-sm text-muted-foreground">
                                    Advanced AI ensures accurate, context-aware conversions with intelligent mapping.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/50 transition-colors">
                        <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">Instant Results</h3>
                                <p className="text-sm text-muted-foreground">
                                    Get your converted API specification in seconds, not hours.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
