"use client"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from "next-themes"
import { CopyButton } from "@/components/ui/copy-button"

interface CodeBlockProps {
    code: string
    language?: string
    filename?: string
}

export function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
    const { theme } = useTheme()

    return (
        <div className="relative group my-6 rounded-lg overflow-hidden border border-border bg-muted/30">
            {/* Header with filename and copy button */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
                <span className="text-xs font-mono text-muted-foreground">
                    {filename || `${language}`}
                </span>
                <CopyButton content={code} variant="ghost" size="sm" />
            </div>

            {/* Code content */}
            <div className="overflow-x-auto">
                <SyntaxHighlighter
                    language={language}
                    style={theme === "dark" ? oneDark : oneLight}
                    customStyle={{
                        margin: 0,
                        padding: "1rem",
                        background: "transparent",
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    }}
                    showLineNumbers={false}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
