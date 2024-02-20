import ProjectPreview from "@/components/ProjectPreview";
import projectPreviews from "@/data/projectPreviews";
import { motion } from "framer-motion";
import Head from "next/head";

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

export default function Projects() {
    return (
        <>
            <Head>
                <title>Ben&apos;s Projects</title>
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content="Ben Z'z Projects" />
                <meta
                    property="og:description"
                    content="Ben's Projects Page."
                />
                <meta
                    property="description"
                    content="Ben's Projects Page."
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://benzhou.tech/projects" />
                <meta
                    name="description"
                    content="Ben's current and featured projects page."
                />
            </Head>
            <div className="relative top-0 flex justify-center w-full h-[550px] bg-rainbow-gradient animate-breathing-gradient">
                <motion.div
                    className="relative flex h-[370px] lg:h-[300px] bg-white border-black w-11/12 lg:w-[1000px] drop-shadow-2xl mt-64 lg:mt-40 rounded-3xl duration-1000 ease-in-out transition-all"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h2 className="p-2 text-lg text-center">
                            HERE ARE SOME OF MY PROJECTS!
                        </h2>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            PROJECTS
                        </h1>
                        <p className="p-2 py-5 font-light">
                            I work with many languages and technologies! I&apos;m always learning new
                            things and looking for new projects to work on.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col flex-wrap content-center justify-center w-full pb-16 pt-28 lg:pb-20 lg:pt-24">
                <motion.div
                    className="grid gap-y-10 w-11/12 md:w-[600px] xl:w-[1300px] 3xl:w-[1850px] py-5 grid-flow-row grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3"
                    variants={boxAnim}
                >
                    {projectPreviews.map((project, index) => (
                        <ProjectPreview
                            key={index}
                            image={project.image}
                            title={project.title}
                            sub={project.sub}
                            description={project.description}
                            icons={project.icons}
                            color={project.color}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    );
}
