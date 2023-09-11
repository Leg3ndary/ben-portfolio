import Image from "next/image";
import Mocha from "@/assets/mocha.png";
import Hockey from "@/assets/hockey.jpg";


export default function Home() {
    
    return (
        <>
            <div className="relative top-0 flex justify-center w-full h-[700px] bg-rainbow-gradient animate-breathing-gradient">
                <div className="relative flex h-[600px] bg-white border-black w-[1170px] drop-shadow-2xl mt-44 rounded-3xl">
                    <div className="flex content-center justify-center w-1/2 h-full">
                        <Image
                            className="object-contain"
                            src={Mocha}
                            alt="Mocha"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-1/2 h-full p-12">
                        <h3 className="p-2 text-lg">HELLO THERE!</h3>
                        <h1 className="p-2 text-6xl font-black">I'M BEN</h1>
                        <h2 className="p-2 font-bold text-md">
                            PROGRAMMER, HOCKEY PLAYER, TERRIBLE GAMER
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            This is my website! I made it using Next.JS,
                            TypeScript, and TailwindCSS!
                        </p>
                        <div className="flex mt-12 place-content-evenly">
                            <Image
                                className=""
                                width={100}
                                height={100}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                alt="NextJS"
                            />
                            <Image
                                className=""
                                width={100}
                                height={100}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                alt="TypeScript"
                            />
                            <Image
                                className=""
                                width={100}
                                height={100}
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                alt="TailwindCSS"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full p-32">
                <div className="flex w-[1170px]">
                    <div className="flex flex-col justify-center w-1/2 h-full p-12">
                        <Image
                            className="object-contain"
                            src={Hockey}
                            alt="Hockey"
                            loading="lazy"
                        />
                        <p className="p-2 font-normal text-center">
                            My U16 Team at a tournament in Niagara, Ontario
                        </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/2 h-full p-12">
                        <h3 className="p-2 text-lg">ABOUT ME</h3>
                        <h1 className="p-2 text-5xl font-black">I LIKE HOCKEY</h1>
                        <h2 className="p-2 font-medium text-md">
                            TIER 2 PLAYER / ASSISTANT COACH
                        </h2>
                        <p className="p-2 pt-4 pb-4 font-light">
                            I've been skating since before I can remember, and started playing hockey when I was around 10. I stopped playing competitively in my junior year to help coach other teams and focus more on programming.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
