import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import YouTubeEmbed from "./components/mdx/YoutubeEmbed";
import GenericCodeBlock from "./components/CodeBlocks/GenericCodeBlock";
import styles from "@/styles/mdx.module.css";
import { getImageDimensions } from "./utils/getImageDimensions";
import { useEffect, useState } from "react";
import Note from "./components/mdx/Note";

const MDXImage = ({
    src,
    alt,
    ...props
}: { src: string; alt?: string } & Omit<ImageProps, "src" | "alt">) => {
    const [dimensions, setDimensions] = useState<{
        width: number;
        height: number;
    } | null>(null);

    useEffect(() => {
        getImageDimensions(src)
            .then((dims) => {
                const scaleFactor = 600 / dims.height;
                setDimensions({
                    width: Math.round(dims.width * scaleFactor),
                    height: 600,
                });
            })
            .catch(console.error);
    }, [src]);

    return (
        <div className="relative w-full h-[400px]">
            <Image
                className="object-cover mx-auto my-4 rounded-lg shadow-lg"
                src={src}
                alt={alt || "Image"}
                width={dimensions?.width || 400}
                height={400}
                {...props}
            />
        </div>
    );
};

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
            <p
                className={`my-5 text-xs font-light leading-5 ${styles.mdxParagraph} lg:text-base`}
            >
                {children}
            </p>
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
        // strong: ({ children }) => (
        //     <strong className="font-bold animate-breathing-gradient bg-rainbow-gradient bg-clip-text">
        //         {children}
        //     </strong>
        // ),
        strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
        ),
        img: (props) => {
            if (!props.src || typeof props.src !== "string") return null;
            return <MDXImage src={props.src} alt={props.alt} />;
        },
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
        hr: () => (
            <div className="my-6 max-w-[1170px] h-[1px] bg-[#dddddd] dark:bg-[#383838] transition-colors duration-1000" />
        ),
        Youtube: ({ src }: { src: string }) => <YouTubeEmbed src={src} />,
        blockquote: ({ children }) => {
            if (
                Array.isArray(children) &&
                typeof children[0] === "string" &&
                children[0].trim().startsWith("Note:")
            ) {
                const content = children[0].replace(/^Note:\s*/, "");
                return <Note>{content}</Note>;
            }
            return (
                <blockquote className="pl-4 italic border-l-4">
                    {children}
                </blockquote>
            );
        },
        ...components,
    };
}
