"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
    content: string
    className?: string
    variant?: "default" | "outline" | "ghost" | "secondary"
    size?: "default" | "sm" | "lg" | "icon"
}

export function CopyButton({
    content,
    className,
    variant = "ghost",
    size = "sm"
}: CopyButtonProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Button
            variant={variant}
            size={size}
            className={cn("h-8 w-8", className)}
            onClick={handleCopy}
        >
            {copied ? (
                <Check className="h-4 w-4" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy code</span>
        </Button>
    )
}
