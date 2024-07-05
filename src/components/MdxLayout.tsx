import { BlogMetadata } from "@/types";
import Head from "next/head";

export default function MdxLayout({
    children,
    metadata,
}: {
    children: React.ReactNode;
    metadata: BlogMetadata;
}) {

    return (
        <>
            <Head>
                <title>Ben - HelloWorld</title>
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content="Ben's Macroboard" />
                <meta
                    property="og:description"
                    content="Ben's Projects Page."
                />
                <meta
                    property="description"
                    content="Ben's Macroboard project page."
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`https://bzhou.ca/blog/${metadata.slug}`}
                />
                <meta
                    name="description"
                    content="View my process for building my very own macroboard."
                />
            </Head>
            <div className="relative top-0 flex justify-center w-full h-24 lg:h-32 bg-rainbow-gradient animate-breathing-gradient" />
            <div className="flex mx-auto w-[400px] md:w-[700px] lg:w-[1000px] xl:[1200px] mt-12 mb-16 lg:mb-10 lg:mt-8 p-2 lg:p-4 scroll-m-6 dark:text-[#ececec]">
                <div className="flex flex-col w-full min-h-screen px-6">
                    <h1 className="py-2 text-3xl font-black lg:text-5xl">
                        {metadata.title}
                    </h1>
                    <h2 className="py-2 italic text-md lg:text-xl font-base">
                        {metadata.description}
                    </h2>
                    <h3 className="py-2 text-xs font-light lg:text-sm">
                        Posted: {metadata.created} - Last Updated:{" "}
                        {metadata.updated}
                    </h3>
                    {children}
                </div>
            </div>
        </>
    );
}
