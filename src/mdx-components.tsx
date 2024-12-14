import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import YouTubeEmbed from "./components/mdx/YoutubeEmbed";
import GenericCodeBlock from "./components/CodeBlocks/GenericCodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="py-2 text-3xl font-black lg:text-5xl">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="py-2 text-lg font-black lg:text-2xl">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="py-2 font-black text-md lg:text-xl">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="py-2 text-sm font-black lg:text-lg">{children}</h4>
        ),
        p: ({ children }) => (
            <p className="my-3 text-sm font-light lg:text-lg">{children}</p>
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
            <strong className="font-bold animate-breathing-gradient bg-rainbow-gradient bg-clip-text">
                {children}
            </strong>
        ),
        img: (props) => (
            <Image
                className="w-full h-auto my-4 rounded-lg shadow-lg"
                {...(props as ImageProps)}
                width={2500}
                height={2500}
                alt={({ ...props }.alt as string) || "Image"}
            />
        ),
        ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
        ul: ({ children }) => <ul className="list-disc">{children}</ul>,
        li: ({ children }) => (
            <li className="my-2 text-sm font-light lg:text-lg">{children}</li>
        ),

        code: ({ children, className }) => {
            if (className?.includes("language-")) {
                const language = className.replace("language-", "");
                return (
                    <GenericCodeBlock
                        code={children as string}
                        language={language}
                    />
                );
            }
            return <code className={className}>{children}</code>;
        },
        hr: () => <div className="my-6 max-w-[1170px] h-[1px] bg-[#dddddd] dark:bg-[#383838] transition-colors duration-1000" />,
        Youtube: ({ src }: { src: string }) => <YouTubeEmbed src={src} />,
        ...components,
    };
}
