import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import GenericCodeBlock from "./components/CodeBlocks/GenericCodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="py-2 text-3xl font-black lg:text-5xl">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="py-2 italic text-md lg:text-xl font-base">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="py-2 text-xs font-light lg:text-sm">{children}</h3>
        ),
        p: ({ children }) => (
            <p className="my-3 text-lg font-light">{children}</p>
        ),
        a: ({ children, href }) => (
            <a
                className="text-blue-500 underline"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
        ),
        img: (props) => (
            <Image
                className="w-full h-auto rounded-lg shadow-lg"
                {...(props as ImageProps)}
                width={2500}
                height={2500}
                alt={{ ...props }.alt as string}
            />
        ),
        li: ({ children }) => (<li className="ml-3 text-lg font-light "><span className="mx-2">-</span> {children}</li>),
        ...components,
    };
}
