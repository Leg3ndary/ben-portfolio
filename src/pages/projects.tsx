import Image from "next/image";
import ProjectHoverable from "@/components/ProjectHoverable";

import bTagScript from "@/assets/projects/bTagScript.png";
import PortfolioImage from "@/assets/projects/Leg3ndaryPortfolio.png";
import APMC from "@/assets/projects/APMC.png";

export default function Projects() {
    return (
        <>
            <div className="relative top-0 flex justify-center w-full h-[550px] bg-rainbow-gradient animate-breathing-gradient">
                <div className="relative flex h-[600px] lg:h-[300px] bg-white border-black w-11/12 lg:w-[1300px] drop-shadow-2xl mt-44 rounded-3xl">
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h3 className="p-2 text-lg text-center">
                            HERE ARE SOME OF MY PROJECTS!
                        </h3>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            PROJECTS
                        </h1>
                        <p className="p-2 py-5 font-light">
                            I work with many languages and technologies, you can
                            see some of them below! I'm always learning new
                            things, and I'm always looking for new projects to
                            work on.
                        </p>
                        <h3 className="p-2 text-xl text-center">
                            Please note that I'm still working on this site and
                            adding my newest projects is on my to do list... If
                            you do want to see all my projects, check out my
                            GitHub!
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-wrap content-center justify-center w-full pt-64 pb-16 lg:pb-20 lg:pt-24">
                <div className="flex w-11/12 lg:w-[1300px] flex-row flex-wrap place-content-evenly py-5">
                    <div className="group flex flex-col justify-center w-full lg:w-[570px] p-10 bg-white shadow-2xl rounded-3xl hover:shadow-2xl transition hover:scale-105 hover:shadow-purple-400 duration-1000">
                        <Image
                            className="object-contain animate-fade-in"
                            src={APMC}
                            width={900}
                            height={100}
                            alt="Portfolio"
                            loading="lazy"
                        />
                        <h1 className="p-2 mt-4 text-3xl font-black">
                            APHS MAKERS COMPETITION
                        </h1>
                        <h2 className="p-2 font-medium text-md">
                            CLUB WEBSITE USING NEXT.JS & TAILWIND
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            To continue practicing using Tailwind and Next.js I
                            made a static website containing lots of information
                            about an upcoming competition we hosted. Though
                            there are obviously better choices in terms of
                            frameworks I wanted to continue using Next.JS to
                            continue getting better and more proficient with the
                            framework. You can view the site{" "}
                            <a
                                href="https://apmc.vercel.app/"
                                target="_blank"
                                className="font-bold text-blue-500 transition-colors hover:text-red-500"
                            >
                                here
                            </a>
                            .
                        </p>
                        <div className="flex justify-center w-full">
                            <div className="w-[1170px] h-[1px] bg-[#dddddd] group-hover:bg-purple-400 transition-colors duration-1000" />
                        </div>
                        <div className="flex pt-8 place-content-evenly">
                            <ProjectHoverable
                                link="https://nextjs.org"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                                alt="NextJS"
                            />
                            <ProjectHoverable
                                link="https://typescriptlang.org"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                alt="TypeScript"
                            />
                            <ProjectHoverable
                                link="https://tailwindcss.com"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                alt="TailwindCSS"
                            />
                            <ProjectHoverable
                                link="https://react.dev"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="React"
                            />
                        </div>
                    </div>
                    <div className="group mt-10 lg:mt-0 flex flex-col justify-center w-full lg:w-[570px] p-10 bg-white shadow-2xl rounded-3xl hover:shadow-2xl transition duration-1000 hover:shadow-red-500 hover:scale-105">
                        <Image
                            className="object-contain animate-fade-in"
                            src={bTagScript}
                            width={900}
                            height={100}
                            alt="Hockey"
                            loading="lazy"
                        />
                        <h1 className="p-2 mt-4 text-3xl font-black">
                            BTAGSCRIPT PLAYGROUND
                        </h1>
                        <h2 className="p-2 font-medium text-md">
                            DYNAMICALLY TYPED INTERPRETER AND DEBUGGER
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            This website allows you to run and debug a small
                            string templating language also known as TagScript,
                            I was intrigued by the static language primarily
                            made popular in the discord bot{" "}
                            <a
                                className="font-bold text-blue-500 transition-colors hover:text-red-500"
                                href="https://carl.gg"
                                target="_blank"
                            >
                                Carl-bot
                            </a>
                            . I thought I could not only make it better, I
                            thought I could enhance the development experience
                            for this niche language, and that I did. This
                            language focuses on simplicity and quick programming
                            for functions that may be hard to program but simple
                            in practice.
                        </p>
                        <div className="mt-auto">
                            <div className="flex justify-center w-full">
                                <div className="w-[1170px] h-[1px] bg-[#dddddd] group-hover:bg-red-500 transition-colors duration-1000" />
                            </div>
                            <div className="flex pt-8 place-content-evenly">
                                <ProjectHoverable
                                    link="https://python.org"
                                    image="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                                    alt="Python"
                                />
                                <ProjectHoverable
                                    link="https://javascript.com"
                                    image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                    alt="JavaScript"
                                />
                                <ProjectHoverable
                                    link="https://html.com"
                                    image="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                                    alt="HTML5"
                                />
                                <ProjectHoverable
                                    link="https://www.w3schools.com/css/"
                                    image="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                                    alt="CSS"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-11/12 lg:w-[1300px] flex-row flex-wrap place-content-evenly py-5">
                    <div className="group flex flex-col justify-center w-full lg:w-[570px] p-10 bg-white shadow-2xl rounded-3xl hover:shadow-2xl transition hover:scale-105 hover:shadow-cyan-300 duration-1000">
                        <Image
                            className="object-contain animate-fade-in"
                            src={PortfolioImage}
                            width={900}
                            height={100}
                            alt="Portfolio"
                            loading="lazy"
                        />
                        <h1 className="p-2 text-3xl font-black">
                            THIS WEBSITE!
                        </h1>
                        <h2 className="p-2 font-medium text-md">
                            MY OWN PERSONAL WEBSITE
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            This website is made using NextJS, TypeScript, and
                            TailwindCSS. I wanted to make a website that was
                            simple, yet elegant, and I think I did pretty good.
                            Here is where I'll showcase my projects, and the
                            technologies I used to create them. I may also post
                            some blogs or something later!
                        </p>
                        <div className="flex justify-center w-full">
                            <div className="w-[1170px] h-[1px] bg-[#dddddd] group-hover:bg-cyan-300 transition-colors duration-1000" />
                        </div>
                        <div className="flex pt-8 place-content-evenly">
                            <ProjectHoverable
                                link="https://nextjs.org"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                                alt="NextJS"
                            />
                            <ProjectHoverable
                                link="https://typescriptlang.org"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                alt="TypeScript"
                            />
                            <ProjectHoverable
                                link="https://tailwindcss.com"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                alt="TailwindCSS"
                            />
                            <ProjectHoverable
                                link="https://react.dev"
                                image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="React"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
