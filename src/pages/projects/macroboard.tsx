import { motion } from "framer-motion";
import Head from "next/head";

export default function Macroboard() {
    return (
        <>
            <Head>
                <title>Ben - Macroboard</title>
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
                    content="https://benzhou.tech/projects/macroboard"
                />
                <meta
                    name="description"
                    content="View my process for building my very own macroboard."
                />
            </Head>
            <div className="relative top-0 flex justify-center w-full h-[550px] bg-rainbow-gradient animate-breathing-gradient">
                <motion.div
                    className="relative flex h-[370px] lg:h-[300px] bg-white border-black w-11/12 lg:w-[1000px] drop-shadow-2xl mt-32 lg:mt-40 rounded-3xl duration-1000 ease-in-out transition-all"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h2 className="p-2 text-lg text-center">
                            BUILDING MY VERY OWN CUSTOM MACROKEYBOARD
                        </h2>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            SPOTIFY MACROBOARD
                        </h1>
                        <p className="p-2 py-5 font-light">
                            For my Grade 12 Computer Engineering final
                            performance task I decided to build my very own
                            custom macrokeyboard. This page goes through the fun
                            process of figuring out what I needed to do to make
                            this project a reality.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col flex-wrap content-center justify-center w-full pt-12 pb-16 lg:pb-20 lg:pt-24">
                
            </div>
        </>
    );
}
