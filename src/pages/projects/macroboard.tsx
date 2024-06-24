// import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
// import SpotifyMacroboard from "@/../public/home/compeng.jpg";
import Image from "next/image";
import TestingLed from "@/../public/projects/SpotifyMacroboard/testingLed.png";
// import { useState, useEffect } from "react";
// import { cookies } from "next/headers";

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default function Macroboard() {
    // const cookieStore = cookies();
    // const [showDisclaimer, setShowDisclaimer] = useState(true);

    // useEffect(() => {
    //     if (!cookieStore.has("spotifyDisclaimer")) {
    //         cookieStore.set("spotifyDisclaimer", "t");
    //     }
    // }, []);

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
            <div className="relative top-0 flex justify-center w-full h-24 lg:h-32 bg-rainbow-gradient animate-breathing-gradient" />
            {/* <AnimatePresence>
                {showDisclaimer && (
                    <motion.div
                        className="fixed z-20 p-4 bg-white shadow-xl w-60 bottom-4 right-4 rounded-xl"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ x: 20, opacity: 0 }}
                    >
                        <h2 className="font-black">Disclaimer</h2>
                        <p className="text-xs">
                            In accordance with{" "}
                            <a
                                href="https://developer.spotify.com/policy#vi-naming-and-branding"
                                target="_blank"
                                className="font-medium text-blue-500 underline"
                            >
                                Spotify&apos;s Developer Policy
                            </a>
                            , I must state that this project is not in anyway
                            related to or endorsed by Spotify.
                        </p>
                        <div
                            onClick={() => setShowDisclaimer(false)}
                            className="px-2 py-1 mt-2 text-xs font-medium text-white bg-red-500 rounded-md hover:cursor-pointer"
                        >
                            Dismiss
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}

            <div className="flex mx-auto w-[400px] md:w-[700px] lg:w-[1000px] xl:[1200px] mt-12 mb-16 lg:mb-10 lg:mt-8 p-2 lg:p-4 scroll-m-6">
                <div className="flex flex-col w-full px-6 ">
                    <h1 className="py-2 text-3xl font-black lg:text-5xl">
                        Designing My Custom Spotify Macroboard
                    </h1>
                    <h2 className="py-2 italic text-md lg:text-xl font-base">
                        A Step-by-Step Guide to Building a Personalized Macro
                        Keyboard for Spotify
                    </h2>
                    <h3 className="py-2 text-xs font-light lg:text-sm">
                        Ben Zhou - Posted: [DATE] - Last Updated: [DATE]
                    </h3>
                    <iframe
                        src="https://www.youtube.com/embed/Q0jAZzOjw8w?si=cPZXy6WQykXa3-q3"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full mx-auto my-4 border-0 rounded-lg shadow-lg aspect-video"
                    />
                    <p className="px-4 my-2 text-sm italic font-light text-center">
                        A full demo of my project and its features.
                    </p>
                    <hr className="my-3" />
                    <h2 className="py-4 text-4xl font-semibold">
                        Introduction
                    </h2>
                    <p className="my-3 text-lg font-light">
                        For my Computer Engineering Final Performance Task
                        (FPT), I was tasked with using everything I&apos;d
                        learnt throughout the course to build a project of my
                        choice. I decided to build a macrokeyboard that would be
                        able to control my Spotify music while also having a
                        multitude of other quality of life features.
                    </p>
                    <p className="my-3 text-lg font-light">
                        My inspiration for this project came from the fact that
                        I listen to a lot of music, and with that I often adjust
                        the song playing, as well as other features such as
                        volume or looping. However, since I used a 60% keyboard,
                        that meant that I would have to click 3-4 keys to
                        achieve some simple functionality such as skipping a
                        song.
                    </p>
                    <p className="my-3 text-lg font-light">
                        Therefore, I aimed to build a macroboard that would
                        enable effortless control over my Spotify music while
                        incorporating features like dynamic lighting and a
                        built-in screen to display the current song. The
                        finished product has satisfyingly smooth fading lights,
                        clicky blue switches, a sleek case, and a vibrant
                        display.
                    </p>
                    <h2 className="py-4 text-4xl font-semibold">Research</h2>
                    <p className="my-3 text-lg font-light">
                        Before creating this macroboard, I had to do some basic
                        research. I started by considering the essential
                        functions I wanted my keyboard to have. Firstly, I
                        wanted custom RGB lighting that could match the color of
                        the currently playing music. Additionally, I wanted a
                        screen, even if small, to display the current song and
                        related information. Finally, I aimed to have maximum
                        control over the music player, including the ability to
                        shuffle and loop without needing to manually open
                        Spotify.
                    </p>
                    <p className="my-3 text-lg font-light">
                        For lighting I decided to go for some simple RGB
                        addressable LED strips, this allowed me to control
                        exactly what LEDs I wanted to turn on and off, as well
                        as the colour of the LEDs. This particular LED strip is
                        called the{" "}
                        <a
                            href="https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf"
                            target="_blank"
                            className="font-medium text-blue-500 underline"
                        >
                            WS2812B
                        </a>{" "}
                        and is a popular choice since it is easy to control and
                        has a wide range of colours. This would also allow me to
                        implement some cool lighting effects such as a rainbow
                        wave or a breathing effect.
                    </p>
                    <hr className="my-3" />
                    <div className="w-full mx-auto mt-4 sm:mt-0 sm:w-1/2 md:w-4/5">
                        <Image
                            src={TestingLed}
                            alt="Testing the LED"
                            className="object-cover w-full mx-auto my-4 rounded-lg shadow-lg"
                        />
                        <p className="px-4 my-2 text-sm italic font-light text-center">
                            After soldering all of the components I gave my
                            project a quick test to see if everything was
                            turning on and working properly.
                        </p>
                    </div>
                    <hr className="my-3" />
                    <h2 className="py-4 text-4xl font-semibold">
                        Circuit/PCB Design
                    </h2>
                    <h2 className="py-4 text-4xl font-semibold">
                        User Instructions
                    </h2>
                    <h2 className="py-4 text-4xl font-semibold">Code Review</h2>
                    <h2 className="py-4 text-4xl font-semibold">
                        Required Parts
                    </h2>
                    <p className="my-3 text-lg font-light">More text</p>
                </div>
            </div>
        </>
    );
}
