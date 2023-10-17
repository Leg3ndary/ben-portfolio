import Image from "next/image";
import Mocha from "@/assets/home/mocha.png";
import Hockey from "@/assets/home/hockey.jpg";
import HackTheNorth from "@/assets/home/hackthenorth.jpg";

export default function Home() {
    return (
        <>
            <div className="relative top-0 flex justify-center w-full h-[700px] bg-rainbow-gradient animate-breathing-gradient">
                <div className="relative flex h-[900px] lg:h-[600px] bg-white border-black w-11/12 lg:w-[1170px] drop-shadow-2xl mt-44 rounded-3xl flex-col lg:flex-row">
                    <div className="flex flex-wrap justify-center w-full h-full lg:w-1/2">
                        <Image
                            className="object-contain max-w-xs lg:max-w-none animate-fade-in"
                            width={512}
                            height={600}
                            src={Mocha}
                            alt="Mocha"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-full h-full p-12 -mt-10 lg:w-1/2 lg:mt-0">
                        <h3 className="p-2 text-lg">HELLO THERE!</h3>
                        <h1 className="p-2 text-6xl font-black">I'M BEN</h1>
                        <h2 className="p-2 font-bold text-md">
                            PROGRAMMER, HOCKEY PLAYER
                        </h2>
                        <p className="p-2 py-4 font-light">
                            This is my website! I made it using NextJS,
                            TypeScript, and TailwindCSS!
                        </p>
                        <p className="p-2 font-light">
                            You can always contact me on{" "}
                            <a
                                className="font-medium text-blue-500"
                                href="https://discord.com/users/360061101477724170"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Discord
                            </a>
                            , or{" "}
                            <a
                                className="font-medium text-blue-500"
                                href="https://www.linkedin.com/in/ben-zhou06/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            !
                        </p>
                        <div className="flex mt-12 place-content-evenly">
                            <a href="https://nextjs.org/" target="_blank">
                                <Image
                                    className="transition-transform ease-in-out animate-fade-in hover:scale-125"
                                    width={75}
                                    height={75}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                    alt="NextJS"
                                />
                            </a>
                            <a
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                            >
                                <Image
                                    className="transition-transform ease-in-out animate-fade-in hover:scale-125"
                                    width={75}
                                    height={75}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                    alt="TypeScript"
                                />
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank">
                                <Image
                                    className="transition-transform ease-in-out animate-fade-in hover:scale-125"
                                    width={75}
                                    height={75}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                    alt="TailwindCSS"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full pt-[360px] lg:pt-32">
                <div className="flex w-11/12 lg:w-[1170px] lg:flex-row flex-col">
                    <div className="flex flex-col justify-center w-full h-full p-12 -mb-[100px] lg:w-1/2 lg:mb-0">
                        <Image
                            className="object-contain animate-fade-in"
                            width={489}
                            height={626}
                            src={Hockey}
                            alt="Hockey"
                            loading="lazy"
                        />
                        <p className="p-2 font-light text-center">
                            My U16 Team at a tournament in Niagara, Ontario
                        </p>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full p-12 lg:w-1/2">
                        <h3 className="p-2 text-lg">ABOUT ME</h3>
                        <h1 className="p-2 text-5xl font-black">
                            I LIKE HOCKEY
                        </h1>
                        <h2 className="p-2 font-medium text-md">
                            TIER 2 PLAYER / ASSISTANT COACH
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            I've been skating since before I can remember, and
                            started playing hockey when I was around 10. I
                            stopped playing competitively in my junior year to
                            help coach other teams and focus more on
                            programming.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="w-10/12 lg:w-[1170px] h-[1px] bg-[#dddddd]" />
            </div>
            <div className="flex justify-center w-full">
                <div className="flex w-11/12 lg:w-[1170px] lg:flex-row flex-col">
                    <div className="flex flex-col justify-center w-full h-full p-12 pb-0 lg:w-1/2">
                        <h3 className="p-2 text-lg">I ALSO ATTEND...</h3>
                        <h1 className="p-2 text-3xl font-black lg:text-5xl">
                            HACKATHONS!
                        </h1>
                        <h2 className="p-2 font-medium text-md">
                            WHEN I HAVE TIME :(
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            Hackathons are fun competitions where "Hackers"
                            build a working development version of some project
                            or idea in a short amount of time.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full p-12 lg:p-12 lg:w-1/2 lg:mb-0">
                        <Image
                            className="object-contain animate-fade-in"
                            width={489}
                            height={367}
                            src={HackTheNorth}
                            alt="HTN"
                            loading="lazy"
                        />
                        <p className="p-2 font-light text-center">
                            Hack The North Opening Ceremonies!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
