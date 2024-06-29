// import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
// import SpotifyMacroboard from "@/../public/home/compeng.jpg";
import Image from "next/image";
import TestingLed from "@/../public/projects/SpotifyMacroboard/testingLed.png";
import GenericCodeBlock from "@/components/CodeBlocks/GenericCodeBlock";
import esp32 from "@/../public/projects/SpotifyMacroboard/esp32.jpg";

export async function getStaticProps() {
    return {
        props: {},
    };
}

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
                        For my Computer Engineering Final Performance Task (
                        <a
                            href="https://docs.google.com/document/d/1Iq7kw4vsxsGyBO8FijJuKj1YM_IzRiWKbi5yHxk4ioc/edit#heading=h.8bc1f9ld33gc"
                            target="_blank"
                            className="font-medium text-blue-500 underline"
                        >
                            FPT
                        </a>
                        ), I was challenged to apply all the knowledge I had
                        acquired throughout the course to create a project of my
                        own choosing. I chose to design and build a macro
                        keyboard capable of controlling my Spotify music, along
                        with a range of other quality-of-life features.
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
                    <hr className="my-3" />
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
                    <p className="my-3 text-lg font-light">
                        I next looked at some possible screens, I had used
                        Liquid Crystal Displays before, however, this required a
                        mass amount of pins (up to 14 pins), which would not be
                        sufficient, especially if I wanted to connect multiple
                        other buttons and components to my microcontroller. As
                        such, I then researched other displays and found a
                        smaller display that had the same functionality while
                        only using 2 data pins. In addition, it had simple
                        functions that would allow me to adjust each pixel as I
                        wanted it. I ended up choosing the{" "}
                        <a
                            href="https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf"
                            target="_blank"
                            className="font-medium text-blue-500 underline"
                        >
                            SSD1306
                        </a>{" "}
                        0.96-inch OLED display. With a resolution of 128x64, it
                        would allow me to have 8 lines of data across a
                        manageable width. This part of the project also
                        introduced me to the{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/I%C2%B2C"
                            target="_blank"
                            className="font-medium text-blue-500 underline"
                        >
                            I2C
                        </a>{" "}
                        communication protocol. In addition to the screen, I
                        also looked for some simple mechanical switches that
                        would allow me to have a somewhat satisfying sound. I
                        settled on some simple blue switches I found on{" "}
                        <a
                            href="https://www.amazon.ca/dp/B07CB12Q5P?psc=1&ref=ppx_yo2ov_dt_b_product_details"
                            target="_blank"
                            className="font-medium text-blue-500 underline"
                        >
                            Amazon
                        </a>
                        .
                    </p>
                    <p className="my-3 text-lg font-light">
                        I finally looked at the problem of determining what
                        colour to show based on the album image of the music
                        playing. Unfortunately, simply using the Arduino would
                        never work, mainly due to the fact it is quite limited
                        in both memory and flash storage. To put this into
                        perspective, the average album art, even at scaled-down
                        resolutions, is around 160x160 pixels, even when blurry.
                        Each pixel can be represented by red, blue, and green in
                        every colour. Since the max value for any value is 255
                        or 3(2^8) bits per pixel. That means roughly, every
                        pixel takes up about 24 bits or 3 bytes. Multiplying
                        that by the 25,600 pixels the average album art has, we
                        get a total of 76,800 bytes or roughly 75 kilobytes.
                    </p>
                    <p className="my-3 text-lg font-light">
                        The Arduino only has 32 kilobytes of flash memory,
                        meaning there&apos;s absolutely no way we could even
                        store the images temporarily. As if this wasn&apos;t
                        already a big enough problem, I also had to consider how
                        I was going to get the information in the first place,
                        the regular Arduino R3 doesn&apos;t have any WiFi or
                        Bluetooth capabilities, meaning that I wouldn&apos;t
                        even be able to connect to my phone or laptop
                        wirelessly.
                    </p>
                    <div className="w-full mx-auto mt-4 sm:mt-0 sm:w-1/2 md:w-4/5">
                        <Image
                            src={esp32}
                            alt="The ESP32 Dev Module 1"
                            className="object-cover w-full mx-auto my-4 rounded-lg shadow-lg"
                        />
                        <p className="px-4 my-2 text-sm italic font-light text-center">
                            The ESP32 Dev Module 1 I used for my project.
                        </p>
                    </div>
                    <p className="my-3 text-lg font-light">
                        Taking into account all of this I looked at one final
                        solution, what if instead I simply used another
                        microcontroller? This brought me to the ESP32 Dev Module
                        1, this microcontroller has 2.4 GHz WiFi capabilities,
                        full Bluetooth support, as well as 320 kilobytes of
                        storage (520KB - 320 DRAM/200 IRAM). It was much smaller
                        than the regular Arduino, meaning I could save on space
                        and make my keyboard much more compact. However, there
                        was still a lingering issue. I still wouldn&apos;t be
                        able to process the images, and I would likely hit
                        memory issues later on.
                    </p>
                    <p className="my-3 text-lg font-light">
                        Therefore I decided to create an API to offload most of
                        the heavy computing. I decided on a simple REST API
                        which allows me to make a GET request to my server, and
                        then receive information or do things based on my
                        request. This allowed me to not only offload processing
                        the album images but also control a lot of things behind
                        the scenes. For example, I originally tried using a
                        public library online that another person had written.
                        Unfortunately, their code wasn&apos;t the best as it
                        took on average 3-5 seconds just to make a single API
                        request, by rewriting their code and making use of my
                        API, I was able to bring that down by almost 15 times,
                        with the average request taking around 0.2 seconds on
                        average.
                    </p>
                    <hr className="my-3" />

                    
                    <h2 className="py-4 text-4xl font-semibold">
                        Circuit/PCB Design
                    </h2>
                    <hr className="my-3" />
                    <h2 className="py-4 text-4xl font-semibold">
                        User Instructions
                    </h2>
                    <hr className="my-3" />
                    <h2 className="py-4 text-4xl font-semibold">Code Review</h2>
                    <GenericCodeBlock
                        code={`const String PASSWORD = "REDACTED";
const char SSID[] = "REDACTED";
const char SSID_PASS[] = "REDACTED";`}
                        language="cpp"
                    />
                    <hr className="my-3" />
                    <h2 className="py-4 text-4xl font-semibold">
                        Required Parts
                    </h2>
                    <p className="my-3 text-lg font-light">More text</p>
                    <hr className="my-3" />
                </div>
            </div>
        </>
    );
}

/* <AnimatePresence>
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
</AnimatePresence> */
