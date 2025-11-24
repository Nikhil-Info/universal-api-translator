"use client"

import { useRouter } from "next/navigation"
import { useScrollspy } from "@/hooks/use-scrollspy"
import { SegmentGroup, SegmentGroupItem } from "@/components/ui/segment-group"
import { useMemo } from "react"

export type TOC = {
    title: string
    url: string
    depth: number
}

type TableOfContentsProps = {
    toc: TOC[]
}

const TableOfContents = (props: TableOfContentsProps) => {
    const { toc } = props
    const ids = useMemo(() => toc.map((item) => item.url), [toc])
    const options = useMemo(() => ({ rootMargin: '0% 0% -80% 0%' }), [])

    const activeId = useScrollspy(ids, options)
    const router = useRouter()

    return (
        <div className='hidden pl-4 lg:block'>
            <div className='mb-4 text-sm font-semibold'>On This Page</div>
            <SegmentGroup
                orientation='vertical'
                value={activeId ?? null}
                onValueChange={(details) => {
                    const element = document.getElementById(details.value)
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        // Update URL without jumping
                        window.history.pushState(null, '', `#${details.value}`)
                    }
                }}
                className='text-sm'
            >
                {toc.map((item) => (
                    <SegmentGroupItem
                        key={item.url}
                        value={item.url}
                        style={{
                            paddingLeft: `${(item.depth - 1) * 12 + 12}px`
                        }}
                    >
                        {item.title}
                    </SegmentGroupItem>
                ))}
            </SegmentGroup>
        </div>
    )
}

export default TableOfContents
