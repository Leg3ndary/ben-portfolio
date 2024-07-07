import { useEffect, useState } from 'react';
import { RawBlogMetadata } from "@/types";
import Head from "next/head";
import Hashtag from "@/components/Hashtag";

export default function MdxLayout({
    children,
    metadata,
}: {
    children: React.ReactNode;
    metadata: RawBlogMetadata;
}) {
    const [createdDate, setCreatedDate] = useState<Date>();
    const [updatedDate, setUpdatedDate] = useState<Date>();

    useEffect(() => {
        setCreatedDate(new Date(...metadata.created));
        setUpdatedDate(new Date(...metadata.updated));
    }, [metadata.created, metadata.updated]);

    return (
        <>
            <Head>
                <title>Ben - Blog Post</title> {/* use static props to pre render everything in the future */}
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="description" content={metadata.description} />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`https://bzhou.ca/blog/${metadata.slug}`}
                />
                <meta name="description" content={metadata.description} />
            </Head>
            <div className="relative top-0 flex justify-center w-full h-24 lg:h-32 bg-rainbow-gradient animate-breathing-gradient" />
            <div className="flex mx-auto w-[400px] md:w-[700px] lg:w-[1000px] xl:[1200px] mt-12 mb-16 lg:mb-10 lg:mt-8 p-2 lg:p-4 scroll-m-6 dark:text-[#ececec]">
                <div className="flex flex-col w-full min-h-screen px-6">
                    <h1 className="py-2 text-3xl font-black lg:text-5xl">
                        {metadata.title}
                    </h1>
                    <h3 className="py-2 italic text-md lg:text-xl font-base">
                        {metadata.description}
                    </h3>
                    <h4 className="py-2 text-xs font-light lg:text-sm">
                        Posted: {createdDate?.toLocaleString()}{" "}
                        - Last Updated:{" "}
                        {updatedDate?.toLocaleString()} - Tags:{" "}
                        {metadata.tags.map((tag) => (
                            <Hashtag key={tag} hashtag={tag} />
                        ))}
                    </h4>
                    {children}
                </div>
            </div>
        </>
    );
}
