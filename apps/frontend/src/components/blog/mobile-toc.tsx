"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AlignLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export type TOC = {
    title: string
    url: string
    depth: number
}

type MobileTableOfContentsProps = {
    toc: TOC[]
}

const MobileTableOfContents = (props: MobileTableOfContentsProps) => {
    const { toc } = props
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant='secondary' className='fixed right-2 bottom-2 z-50 gap-2 lg:hidden'>
                    <AlignLeft className="h-4 w-4" /> On This Page
                </Button>
            </PopoverTrigger>
            <PopoverContent align='end' side='top' className='px-0 py-2 max-h-[400px] overflow-y-auto'>
                {toc.map((item) => {
                    const { title, url, depth } = item

                    return (
                        <Link
                            key={url}
                            href={`#${url}`}
                            className='block py-2.5 pr-2.5 text-sm leading-tight text-muted-foreground transition-colors hover:text-foreground'
                            style={{
                                paddingLeft: (depth - 1) * 16
                            }}
                            onClick={() => {
                                router.push(`#${url}`)
                                setIsOpen(false)
                            }}
                        >
                            {title}
                        </Link>
                    )
                })}
            </PopoverContent>
        </Popover>
    )
}

export default MobileTableOfContents
