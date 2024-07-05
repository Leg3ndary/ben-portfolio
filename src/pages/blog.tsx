import Head from "next/head";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";
import { BlogMetadata } from "@/types";
import Link from "next/link";
import Hashtag from "@/components/Hashtag";

export async function getStaticProps() {
    const div = "src/pages/blog";
    const dir = path.resolve(process.cwd(), div);
    const filenames = fs.readdirSync(dir);

    const posts = filenames.map((filename) => {
        const filePath = path.join(dir, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");

        const data = JSON.parse(
            fileContent.split("export const metadata = ")[1].split("};")[0] +
                "}"
        );
        return {
            ...data,
            slug: filename.replace(/\.mdx?$/, ""),
        };
    });

    posts.sort((a, b) => {
        const dateA = new Date(a.updated);
        const dateB = new Date(b.updated);

        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
    });

    return {
        props: {
            posts,
        },
    };
}
export default function Blog({ posts }: { posts: BlogMetadata[] }) {
    return (
        <>
            <Head>
                <title>Ben&apos;s Blog</title>
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content="Ben's Blog" />
                <meta
                    property="og:description"
                    content="Ben's Projects Page."
                />
                <meta property="description" content="Ben's Blog Page." />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bzhou.ca/blog" />
                <meta
                    name="description"
                    content="Ben's Blog page, view some of my thoughts and experiences!"
                />
            </Head>
            <div className="relative top-0 flex justify-center w-full h-[550px] bg-rainbow-gradient animate-breathing-gradient">
                <motion.div
                    className="relative flex h-[370px] lg:h-[300px] bg-white dark:text-[#ececec] dark:bg-[#121212] border-black w-11/12 lg:w-[1000px] drop-shadow-2xl mt-32 lg:mt-40 rounded-3xl duration-1000 ease-in-out transition-all"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h2 className="p-2 text-lg text-center">
                            SOME OF MY THOUGHTS AND EXPERIENCES
                        </h2>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            BLOG
                        </h1>
                        <p className="p-2 py-5 font-light">
                            Welcome to my blog! Here you&apos;ll find some of my
                            thoughts and experiences that I&apos;ve had over the
                            years. I hope you enjoy reading them as much as I
                            enjoyed writing them!
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col flex-wrap content-center w-full min-h-[50vh] pt-12 pb-16 lg:pb-20 lg:pt-24 3xl:pt-12 dark:text-[#ececec] max-w-[1000px] mx-auto p-4">
                <table className="min-w-full table-auto">
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.slug}>
                                <td className="w-2/5 px-4 py-2 text-2xl font-bold text-blue-500 underline">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        prefetch={false}
                                    >
                                        {post.title}
                                    </Link>
                                </td>
                                <td className="w-2/5 px-4 py-2 text-lg text-right">
                                    {post.tags.map((element) => (
                                        <Hashtag
                                            key={element}
                                            hashtag={element}
                                        />
                                    ))}
                                </td>
                                <td className="justify-end px-4 py-2 text-lg text-right">
                                    {post.updated}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
