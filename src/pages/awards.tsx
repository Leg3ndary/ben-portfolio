import { motion } from "framer-motion";
import Head from "next/head";
import awardPreviews from "@/data/awardPreviews";
import Image from "next/image";

const boxAnim = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

export default function Awards() {
    return (
        <>
            <Head>
                <title>Ben&apos;s Awards</title>
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content="Ben's Awards" />
                <meta property="og:description" content="Ben's Awards Page." />
                <meta property="description" content="Ben's Awards Page." />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://benzhou.tech/awards" />
                <meta name="description" content="Some of my accomplishments" />
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
                            SOME ACCOMPLISHMENTS I&apos;M PROUD OF
                        </h2>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            AWARDS
                        </h1>
                        <p className="p-2 py-5 font-light">
                            Here are some of my accomplishments that I am proud
                            of. I&apos;ve had the opportunity to work with some
                            amazing people and organizations that have helped me
                            grow as a person.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col flex-wrap content-center justify-center w-full pt-8 pb-16 lg:pb-20 lg:pt-24">
                <motion.div
                    className="grid gap-y-10 w-11/12 md:w-[600px] xl:w-[1300px] 3xl:w-[1850px] py-5 grid-flow-row grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3"
                    variants={boxAnim}
                >
                    {awardPreviews.map((award, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col justify-center p-5 m-5 bg-white shadow-2xl rounded-3xl"
                            variants={{
                                hidden: { opacity: 0, scale: 0 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                        >
                            <div className="flex items-center">
                                <h2 className="p-2 pb-0 font-black sm:text-xl md:text-2xl lg:text-3xl 3xl:text-4xl">
                                    {award.award as string}
                                </h2>
                                <Image
                                    src={award.image.src}
                                    alt={award.image.alt}
                                    width={60}
                                    height={60}
                                    className="ml-auto rounded-xl"
                                />
                            </div>
                            <h3 className="p-2 pb-0 text-sm font-bold lg:text-lg">
                                {award.competition as string} -{" "}
                                {award.date as string}
                            </h3>
                            <p className="p-2 text-sm font-light lg:text-lg">
                                {award.description as string}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}
