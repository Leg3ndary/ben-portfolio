import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <h1 className="py-2 text-3xl font-black lg:text-5xl">{children}</h1>,
        h2: ({ children }) => <h2 className="py-2 italic text-md lg:text-xl font-base">{children}</h2>,
        h3: ({ children }) => <h3 className="py-2 text-xs font-light lg:text-sm">{children}</h3>,
        p: ({ children }) => <p className="my-3 text-lg font-light">{children}</p>,
        img: (props) => (
            <Image
                className="w-full h-auto rounded-lg shadow-lg"
                {...(props as ImageProps)}
                width={2500}
                height={2500}
                alt={{ ...props }.alt as string}
            />
        ),
        ...components,
    };
}
