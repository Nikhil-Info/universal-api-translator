"use client"

import { useState } from "react"
import { List } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface MobileTableOfContentsProps {
  headings: { id: string; text: string; level: number }[]
}

export function MobileTableOfContents({ headings }: MobileTableOfContentsProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 lg:hidden z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="rounded-full shadow-lg h-14 w-14 p-0"
          >
            <List className="h-6 w-6" />
            <span className="sr-only">Table of Contents</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[60vh]">
          <SheetHeader>
            <SheetTitle>Table of Contents</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-full mt-6">
            <nav className="space-y-1">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-sm py-2 px-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                    heading.level === 2 && "font-medium",
                    heading.level === 3 && "pl-6 text-muted-foreground",
                    heading.level === 4 && "pl-9 text-muted-foreground text-xs"
                  )}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}
