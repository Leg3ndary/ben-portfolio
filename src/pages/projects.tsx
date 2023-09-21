import Image from "next/image";
import bTagScript from "@/assets/projects/bTagScript.png";
import PortfolioImage from "@/assets/projects/Leg3ndaryPortfolio.png";

export default function Projects() {
    return (
        <>
            <div className="relative top-0 flex justify-center w-full h-[400px] bg-rainbow-gradient animate-breathing-gradient">
                <div className="relative flex h-[300px] bg-white border-black w-[1300px] drop-shadow-2xl mt-44 rounded-3xl">
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h3 className="p-2 text-lg">
                            HERE ARE SOME OF MY PROJECTS!
                        </h3>
                        <h1 className="p-2 text-6xl font-black">PROJECTS</h1>
                        <p className="p-2 py-4 font-light">
                            I work with many languages and technologies, you can
                            see some of them below! I'm always learning new
                            things, and I'm always looking for new projects to
                            work on.
                        </p>
                        <h3 className="p-2 text-lg">
                            Please note that I'm still working on this site and
                            adding my newest projects is on my TDL... If you do
                            want to see all my projects, check out my GitHub!
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-32">
                <div className="flex w-[1300px] flex-row flex-wrap place-content-evenly">
                    <div className="group flex flex-col justify-center w-[570px] p-10 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition-shadow hover:shadow-cyan-300">
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
                            <div className="w-[1170px] h-[1px] bg-[#dddddd] group-hover:bg-cyan-300 transition-colors" />
                        </div>
                        <div className="flex pt-8 place-content-evenly">
                            <Image
                                className="animate-fade-in"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                                width={45}
                                height={45}
                                alt="NextJS"
                            />
                            <Image
                                className="animate-fade-in"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                width={45}
                                height={45}
                                alt="TypeScript"
                            />
                            <Image
                                className="animate-fade-in"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                width={45}
                                height={45}
                                alt="TailwindCSS"
                            />
                            <Image
                                className="animate-fade-in"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                width={45}
                                height={45}
                                alt="React"
                            />
                        </div>
                    </div>
                    <div className="group flex flex-col justify-center w-[570px] p-10 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition-shadow hover:shadow-red-500">
                        <Image
                            className="object-contain animate-fade-in"
                            src={bTagScript}
                            width={900}
                            height={100}
                            alt="Hockey"
                            loading="lazy"
                        />
                        <h1 className="p-2 text-3xl font-black">
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
                                <div className="w-[1170px] h-[1px] bg-[#dddddd] group-hover:bg-red-500 transition-colors" />
                            </div>
                            <div className="flex pt-8 place-content-evenly">
                                <Image
                                    className="animate-fade-in"
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                                    width={45}
                                    height={45}
                                    alt="Python"
                                />
                                <Image
                                    className="animate-fade-in"
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                    width={45}
                                    height={45}
                                    alt="JavaScript"
                                />
                                <Image
                                    className="animate-fade-in"
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                                    width={45}
                                    height={45}
                                    alt="HTML5"
                                />
                                <Image
                                    className="animate-fade-in"
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                                    width={45}
                                    height={45}
                                    alt="CSS"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
