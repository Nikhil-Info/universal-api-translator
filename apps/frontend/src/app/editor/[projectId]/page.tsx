"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, Save } from "lucide-react"
import { fetcher } from "@/lib/api"
import { useQuery, useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export default function EditorPage() {
    const params = useParams()
    const projectId = params.projectId as string

    const [sourceCode, setSourceCode] = useState("// Paste your API spec here")
    const [targetCode, setTargetCode] = useState("// Translation will appear here")
    const [sourceFormat, setSourceFormat] = useState("openapi")
    const [targetFormat, setTargetFormat] = useState("graphql")

    // Fetch project details (mocked for now)
    // const { data: project } = useQuery({ queryKey: ['project', projectId], queryFn: () => fetcher(`/projects/${projectId}`) })

    const handleSave = () => {
        // Simulate save operation
        toast.success("File saved successfully!", {
            description: `Project #${projectId} has been saved.`,
        })
    }

    const handleTranslate = async () => {
        setTargetCode("// Translating...")

        // Simulate API call
        setTimeout(() => {
            setTargetCode(`// Translated ${sourceFormat} to ${targetFormat}\n\ntype Query {\n  users: [User]\n}\n\ntype User {\n  id: ID!\n  name: String\n}`)
            toast.success("Translation complete!", {
                description: `Successfully converted ${sourceFormat} to ${targetFormat}`,
            })
        }, 1500)

        /*
        try {
          const result = await fetcher("/converter/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              project_id: projectId,
              source_spec_id: 1, // Needs to be dynamic
              target_format: targetFormat
            })
          })
          setTargetCode(result.result_content)
        } catch (error) {
          setTargetCode("// Error translating")
        }
        */
    }

    return (
        <div className="flex flex-col h-screen">
            <header className="flex items-center justify-between px-6 py-3 border-b bg-white dark:bg-gray-950">
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold">Project #{projectId}</h1>
                    <div className="flex items-center gap-2">
                        <Select value={sourceFormat} onValueChange={setSourceFormat}>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Source" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="openapi">OpenAPI</SelectItem>
                                <SelectItem value="graphql">GraphQL</SelectItem>
                                <SelectItem value="soap">SOAP / WSDL</SelectItem>
                                <SelectItem value="proto">gRPC .proto</SelectItem>
                            </SelectContent>
                        </Select>
                        <ArrowRight className="h-4 w-4 text-gray-500" />
                        <Select value={targetFormat} onValueChange={setTargetFormat}>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Target" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="graphql">GraphQL</SelectItem>
                                <SelectItem value="openapi">OpenAPI</SelectItem>
                                <SelectItem value="sdk-python">Python SDK</SelectItem>
                                <SelectItem value="sdk-node">Node.js SDK</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleSave}>
                        <Save className="mr-2 h-4 w-4" />
                        Save
                    </Button>
                    <Button size="sm" onClick={handleTranslate}>
                        <Play className="mr-2 h-4 w-4" />
                        Translate
                    </Button>
                </div>
            </header>
            <main className="flex-1 flex overflow-hidden">
                <div className="flex-1 border-r flex flex-col">
                    <div className="px-4 py-2 bg-gray-50 border-b text-xs font-medium text-gray-500 dark:bg-gray-900">
                        Source Code
                    </div>
                    <div className="flex-1">
                        <Editor
                            height="100%"
                            defaultLanguage="yaml"
                            value={sourceCode}
                            onChange={(value) => setSourceCode(value || "")}
                            theme="vs-dark"
                            options={{ minimap: { enabled: false }, fontSize: 14 }}
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="px-4 py-2 bg-gray-50 border-b text-xs font-medium text-gray-500 dark:bg-gray-900">
                        Target Code
                    </div>
                    <div className="flex-1">
                        <Editor
                            height="100%"
                            defaultLanguage="graphql"
                            value={targetCode}
                            theme="vs-dark"
                            options={{ minimap: { enabled: false }, fontSize: 14, readOnly: true }}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
