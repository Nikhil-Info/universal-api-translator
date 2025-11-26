"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type SegmentGroupContextValue = {
    value: string | null
    onValueChange: (value: string) => void
    orientation: "horizontal" | "vertical"
}

const SegmentGroupContext = React.createContext<SegmentGroupContextValue | undefined>(undefined)

function useSegmentGroup() {
    const context = React.useContext(SegmentGroupContext)
    if (!context) {
        throw new Error("useSegmentGroup must be used within a SegmentGroup")
    }
    return context
}

interface SegmentGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | null
    onValueChange: (details: { value: string }) => void
    orientation?: "horizontal" | "vertical"
}

const SegmentGroup = ({
    children,
    value,
    onValueChange,
    orientation = "horizontal",
    className,
    ...props
}: SegmentGroupProps) => {
    const handleValueChange = React.useCallback(
        (newValue: string) => {
            onValueChange({ value: newValue })
        },
        [onValueChange]
    )

    return (
        <SegmentGroupContext.Provider
            value={{ value, onValueChange: handleValueChange, orientation }}
        >
            <div
                data-orientation={orientation}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "flex-row gap-4 border-b" : "flex-col gap-1 border-l",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </SegmentGroupContext.Provider>
    )
}

interface SegmentGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}

const SegmentGroupItem = ({
    children,
    value: itemValue,
    className,
    style,
    ...props
}: SegmentGroupItemProps) => {
    const { value, onValueChange, orientation } = useSegmentGroup()
    const isChecked = value === itemValue

    return (
        <button
            type="button"
            role="radio"
            aria-checked={isChecked}
            data-state={isChecked ? "checked" : "unchecked"}
            data-orientation={orientation}
            onClick={() => onValueChange(itemValue)}
            className={cn(
                "relative flex items-center justify-start text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "text-muted-foreground hover:text-foreground",
                "data-[state=checked]:text-foreground",
                orientation === "horizontal" ? "px-1 pb-3" : "px-3 py-1.5",
                className
            )}
            style={style}
            {...props}
        >
            {isChecked && (
                <motion.div
                    layoutId={`segment-indicator-${orientation}`}
                    className={cn(
                        "absolute bg-foreground",
                        orientation === "horizontal"
                            ? "bottom-0 left-0 right-0 h-0.5"
                            : "left-[-1px] top-0 bottom-0 w-1 bg-foreground"
                    )}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export { SegmentGroup, SegmentGroupItem }
