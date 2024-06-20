// import { motion } from "framer-motion";
import Head from "next/head";
// import SpotifyMacroboard from "@/../public/home/compeng.jpg";
import Image from "next/image";
import TestingLed from "@/../public/projects/SpotifyMacroboard/testingLed.png";

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
            <div className="relative top-0 flex justify-center w-full h-24 lg:h-32 bg-rainbow-gradient animate-breathing-gradient" />
            <div className="flex mx-auto w-[400px] md:w-[700px] lg:w-[1000px] xl:[1200px] mt-12 mb-16 lg:mb-10 lg:mt-8 p-2 lg:p-4">
                <div className="flex flex-col w-full px-6 ">
                    <h1 className="py-1 text-4xl font-black">
                        Designing My Custom Spotify Macroboard
                    </h1>
                    <h2 className="py-1 text-xl italic font-base">
                        A Step-by-Step Guide to Building a Personalized Macro
                        Keyboard for Spotify
                    </h2>
                    <h3 className="py-1 text-sm font-light">
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
                    <p className="px-4 my-2 text-sm italic font-light">
                        A full demo of my project and its features.
                    </p>
                    <hr className="my-3" />
                    <p className="my-3 text-lg font-light">
                        For my Grade 12 Computer Engineering final performance
                        task, I was tasked with using everything I&apos;d learnt
                        throughout the course to build a project of my choice. I
                        decided to build a macrokeyboard that would be able to
                        control my Spotify music while also having a multitude
                        of other quality of life features.
                    </p>
                    <p className="my-3 text-lg font-light">
                        My inspiration for this project came from the fact that
                        I listen to a lot of music, and with that I often adjust
                        the song playing, as well as other features such as
                        volume or looping. However, since I use a 60% keyboard,
                        that means that I have to click 3-4 keys to achieve some
                        simple functionality such as skipping a song.
                    </p>
                    <p className="my-3 text-lg font-light">
                        I wanted to build a macroboard that would allow me to
                        control my Spotify music with ease, as well as having
                        other features such as dynamic lighting and built in
                        screen to display the current song playing.
                    </p>
                    <p className="my-3 text-lg font-light">
                        I first started by brainstorming the general overall
                        circuit and what components I would need to make this
                        project a reality, I specifically chose blue switches to
                        make the keyboard feel more tactile and responsive. I
                        also decided to use an ESP32 microcontroller for the
                        smaller form factor as well as the more powerful
                        processor. It would also provide me with a way to
                        connect with external APIs such as Spotify&apos;s. Later
                        I found that this would be wildly inefficient and
                        stupid, so I adjusted my approach later on.
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
                        <p className="px-4 my-2 text-sm italic font-thin">
                            After soldering all of the components I gave my
                            project a quick test to see if everything was
                            turning on and working properly.
                        </p>
                    </div>
                    <hr className="my-3" />
                    <p className="my-3 text-lg font-light">More text</p>
                    
                </div>
            </div>
        </>
    );
}
