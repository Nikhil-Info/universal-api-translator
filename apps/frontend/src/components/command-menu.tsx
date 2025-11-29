"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { type DialogProps } from "@radix-ui/react-dialog"
import { IconArrowRight } from "@tabler/icons-react"
import { useDocsSearch } from "fumadocs-core/search/client"
import { CornerDownLeftIcon, SquareDashedIcon } from "lucide-react"

import { cn } from "@/lib/utils"
// import { trackEvent } from "@/lib/events" // Assuming this might not exist yet, commenting out or mocking if needed. 
// If it doesn't exist, I'll remove the tracking logic or mock it.
// For now, I will comment out tracking to avoid errors if the file is missing.

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { useMutationObserver } from "@/hooks/use-mutation-observer"

// Mocking missing hooks/libs for now to ensure compilation
const useConfig = () => [{ packageManager: "pnpm" }]
const trackEvent = (event: any) => console.log("Track event:", event)
const showMcpDocs = true
const source = { pageTree: { children: [] } } // Placeholder, will need actual source

export function CommandMenu({
    ...props
}: DialogProps) {
    const router = useRouter()
    const [config] = useConfig()
    const [open, setOpen] = React.useState(false)
    const [selectedType, setSelectedType] = React.useState<
        "color" | "page" | "component" | "block" | null
    >(null)
    const [copyPayload, setCopyPayload] = React.useState("")

    const { search, setSearch, query } = useDocsSearch({
        type: "fetch",
    })
    const packageManager = config.packageManager || "pnpm"

    // Track search queries with debouncing to avoid excessive tracking.
    const searchTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)
    const lastTrackedQueryRef = React.useRef<string>("")

    const trackSearchQuery = React.useCallback((query: string) => {
        const trimmedQuery = query.trim()

        // Only track if the query is different from the last tracked query and has content.
        if (trimmedQuery && trimmedQuery !== lastTrackedQueryRef.current) {
            lastTrackedQueryRef.current = trimmedQuery
            trackEvent({
                name: "search_query",
                properties: {
                    query: trimmedQuery,
                    query_length: trimmedQuery.length,
                },
            })
        }
    }, [])

    const handleSearchChange = React.useCallback(
        (value: string) => {
            // Clear existing timeout.
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current)
            }

            // Set new timeout to debounce both search and tracking.
            searchTimeoutRef.current = setTimeout(() => {
                setSearch(value)
                trackSearchQuery(value)
            }, 500)
        },
        [setSearch, trackSearchQuery]
    )

    // Cleanup timeout on unmount.
    React.useEffect(() => {
        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current)
            }
        }
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return
                }

                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [runCommand])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className={cn(
                        "bg-muted/50 text-muted-foreground relative h-8 w-full justify-start pl-3 font-medium shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                    )}
                    onClick={() => setOpen(true)}
                    {...props}
                >
                    <span className="hidden lg:inline-flex">Search documentation...</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                        <KbdGroup>
                            <Kbd className="border">⌘</Kbd>
                            <Kbd className="border">K</Kbd>
                        </KbdGroup>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                className="rounded-xl border-none bg-popover p-0 shadow-2xl overflow-hidden"
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>Search documentation...</DialogTitle>
                    <DialogDescription>Search for a command to run...</DialogDescription>
                </DialogHeader>
                <Command
                    className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
                    filter={(value, search, keywords) => {
                        handleSearchChange(search)
                        const extendValue = value + " " + (keywords?.join(" ") || "")
                        if (extendValue.toLowerCase().includes(search.toLowerCase())) {
                            return 1
                        }
                        return 0
                    }}
                >
                    <div className="relative border-b">
                        <CommandInput placeholder="Search documentation..." />
                        {query.isLoading && (
                            <div className="pointer-events-none absolute top-1/2 right-3 z-10 flex -translate-y-1/2 items-center justify-center">
                                <Spinner className="text-muted-foreground size-4" />
                            </div>
                        )}
                    </div>
                    <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                        <CommandEmpty className="py-6 text-center text-sm">
                            {query.isLoading ? "Searching..." : "No results found."}
                        </CommandEmpty>

                        {/* Placeholder for search results until we have real data source */}
                        <SearchResults
                            open={open}
                            setOpen={setOpen}
                            query={query}
                            search={search}
                        />
                    </CommandList>
                </Command>
                <div className="text-muted-foreground flex h-10 items-center gap-2 border-t bg-muted/50 px-4 text-xs font-medium">
                    <div className="flex items-center gap-2">
                        <CommandMenuKbd>
                            <CornerDownLeftIcon />
                        </CommandMenuKbd>{" "}
                        Open
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function CommandMenuItem({
    children,
    className,
    onHighlight,
    ...props
}: React.ComponentProps<typeof CommandItem> & {
    onHighlight?: () => void
    "data-selected"?: string
    "aria-selected"?: string
}) {
    const ref = React.useRef<HTMLDivElement>(null)

    useMutationObserver(ref, (mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "aria-selected" &&
                ref.current?.getAttribute("aria-selected") === "true"
            ) {
                onHighlight?.()
            }
        })
    })

    return (
        <CommandItem
            ref={ref}
            className={cn(
                "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium",
                className
            )}
            {...props}
        >
            {children}
        </CommandItem>
    )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
    return (
        <kbd
            className={cn(
                "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
                className
            )}
            {...props}
        />
    )
}

type Query = Awaited<ReturnType<typeof useDocsSearch>>["query"]

function SearchResults({
    setOpen,
    query,
    search,
}: {
    open: boolean
    setOpen: (open: boolean) => void
    query: Query
    search: string
}) {
    const router = useRouter()

    const uniqueResults =
        query.data && Array.isArray(query.data)
            ? query.data.filter(
                (item, index, self) =>
                    !(
                        item.type === "text" &&
                        item.content.trim().split(/\s+/).length <= 1
                    ) && index === self.findIndex((t) => t.content === item.content)
            )
            : []

    // Show navigation links when there's no search query
    if (!search.trim()) {
        return (
            <>
                <CommandGroup heading="Navigation">
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/")
                            setOpen(false)
                        }}
                    >
                        Home
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/translate")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/translate")
                            setOpen(false)
                        }}
                    >
                        Free API Translator
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/validator")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/validator")
                            setOpen(false)
                        }}
                    >
                        API Validator
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/documentation")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/documentation")
                            setOpen(false)
                        }}
                    >
                        Documentation
                    </CommandItem>
                </CommandGroup>

                <CommandGroup heading="Resources">
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/blog")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/blog")
                            setOpen(false)
                        }}
                    >
                        Blog
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/help")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/help")
                            setOpen(false)
                        }}
                    >
                        Help Center
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/community")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/community")
                            setOpen(false)
                        }}
                    >
                        Community
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/changelog")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/changelog")
                            setOpen(false)
                        }}
                    >
                        Changelog
                    </CommandItem>
                </CommandGroup>

                <CommandGroup heading="Company">
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/about")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/about")
                            setOpen(false)
                        }}
                    >
                        About
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/team")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/team")
                            setOpen(false)
                        }}
                    >
                        Team
                    </CommandItem>
                    <CommandItem
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-medium cursor-pointer"
                        onSelect={() => {
                            router.push("/contact")
                            setOpen(false)
                        }}
                        onClick={() => {
                            router.push("/contact")
                            setOpen(false)
                        }}
                    >
                        Contact
                    </CommandItem>
                </CommandGroup>
            </>
        )
    }

    if (!query.data || query.data === "empty") {
        return null
    }

    if (query.data && uniqueResults.length === 0) {
        return null
    }

    return (
        <CommandGroup
            heading="Search Results"
        >
            {uniqueResults.map((item) => {
                return (
                    <CommandItem
                        key={item.id}
                        data-type={item.type}
                        onSelect={() => {
                            router.push(item.url)
                            setOpen(false)
                        }}
                        className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground h-9 rounded-md px-3 font-normal"
                        keywords={[item.content]}
                        value={`${item.content} ${item.type}`}
                    >
                        <div className="line-clamp-1 text-sm">{item.content}</div>
                    </CommandItem>
                )
            })}
        </CommandGroup>
    )
}
