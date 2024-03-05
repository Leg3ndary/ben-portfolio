import { motion } from "framer-motion";
import Head from "next/head";
import SpotifyMacroboard from "@/../public/home/compeng.jpg";
import Image from "next/image";

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
            <div className="flex mx-auto w-[400px] md:w-[700px] lg:w-[1000px] xl:[1200px] mt-12 mb-16 lg:mb-10 lg:mt-8 p-2 lg:p-4">
                <div className="flex flex-col w-3/4 px-6 ">
                    <h1 className="py-1 text-4xl font-black">
                        Creating my very own Spotify Macroboard
                    </h1>
                    <h2 className="py-1 text-xl italic font-base">
                        The process behind building a macrokeyboard
                    </h2>
                    <h3 className="py-1 text-sm font-light">
                        Ben Zhou - Posted: [DATE] - Last Updated: [DATE]
                    </h3>
                    <Image
                        src={SpotifyMacroboard}
                        alt="Spotify Macroboard"
                        className="w-full mx-auto mt-4 rounded-lg shadow-lg"
                    />
                    <p className="px-4 my-2 text-sm italic font-light">
                        After soldering all of the components I gave my project
                        a quick test to see if everything was turning on and
                        working properly.
                    </p>
                    <hr className="my-3" />
                    <p className="my-3 text-lg font-light">
                        For my Grade 12 Computer Engineering final performance
                        task I was tasked with using everything I&apos;d learnt
                        throughout the course to build a project of my choice. I
                        decided to build a macrokeyboard that would be able to
                        control my Spotify music while also having a bunch of
                        other QOL features.
                    </p>
                    <p className="my-3 text-lg font-light">
                        My inspiration for this project came from the fact that
                        I listen to a lot of music, and with that I often adjust
                        the song playing, as well as other features such as
                        volume or looping. However, since I use a 60% keyboard,
                        that means that I have to click a few extra keys to
                        achieve some functionality.
                    </p>
                </div>
                <div className="w-1/4">
                    <div className="p-4 bg-[#f6f6f6] rounded-md flex flex-col">
                        <h2 className="py-1 text-2xl font-black text-center">
                            Table of Contents
                        </h2>
                        <ul className="py-1 text-lg font-thin">
                            <li>Introduction</li>
                            <li>Planning</li>
                            <li>Design</li>
                            <li>Building</li>
                            <li>Testing</li>
                            <li>Conclusion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
