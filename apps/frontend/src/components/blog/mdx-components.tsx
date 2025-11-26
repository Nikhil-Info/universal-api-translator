import { CodeBlock } from "@/components/blog/code-block"
import Image from "next/image"
import { ComponentProps } from "react"

export const components = {
    h1: ({ className, ...props }: ComponentProps<"h1">) => (
        <h1
            className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
            {...props}
        />
    ),
    h2: ({ className, ...props }: ComponentProps<"h2">) => (
        <h2
            className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
            {...props}
        />
    ),
    h3: ({ className, ...props }: ComponentProps<"h3">) => (
        <h3
            className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            {...props}
        />
    ),
    h4: ({ className, ...props }: ComponentProps<"h4">) => (
        <h4
            className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            {...props}
        />
    ),
    h5: ({ className, ...props }: ComponentProps<"h5">) => (
        <h5
            className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
            {...props}
        />
    ),
    h6: ({ className, ...props }: ComponentProps<"h6">) => (
        <h6
            className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
            {...props}
        />
    ),
    a: ({ className, ...props }: ComponentProps<"a">) => (
        <a
            className="font-medium underline underline-offset-4"
            {...props}
        />
    ),
    p: ({ className, ...props }: ComponentProps<"p">) => (
        <p
            className="leading-7 [&:not(:first-child)]:mt-6"
            {...props}
        />
    ),
    ul: ({ className, ...props }: ComponentProps<"ul">) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    ol: ({ className, ...props }: ComponentProps<"ol">) => (
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
    ),
    li: ({ className, ...props }: ComponentProps<"li">) => (
        <li className="mt-2" {...props} />
    ),
    blockquote: ({ className, ...props }: ComponentProps<"blockquote">) => (
        <blockquote
            className="mt-6 border-l-2 pl-6 italic"
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-md border" alt={alt} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({ className, ...props }: ComponentProps<"table">) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full" {...props} />
        </div>
    ),
    tr: ({ className, ...props }: ComponentProps<"tr">) => (
        <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
    ),
    th: ({ className, ...props }: ComponentProps<"th">) => (
        <th
            className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
            {...props}
        />
    ),
    td: ({ className, ...props }: ComponentProps<"td">) => (
        <td
            className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
            {...props}
        />
    ),
    pre: ({ children }: ComponentProps<"pre">) => {
        return <>{children}</>
    },
    code: ({ className, children, ...props }: ComponentProps<"code">) => {
        const match = /language-(\w+)/.exec(className || "")
        const language = match ? match[1] : ""
        const isInline = !match

        if (isInline) {
            return (
                <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                    {...props}
                >
                    {children}
                </code>
            )
        }

        return (
            <CodeBlock
                code={String(children).replace(/\n$/, "")}
                language={language}
            />
        )
    },
    Image,
}
