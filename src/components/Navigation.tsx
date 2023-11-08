import Logo from "@/assets/home/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const hamburger =
        "h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300";

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 z-10 flex flex-col w-full h-auto transition-all duration-1000">
            <div
                className={`flex justify-center w-full transition-all h-20 bg-black duration-1000 ${
                    scrollY > 0
                        ? "lg:h-16 lg:bg-black"
                        : "lg:bg-transparent lg:h-32"
                }`}
            >
                <div className="flex flex-row flex-wrap w-[1170px] h-full">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <Image
                                className="w-16 ml-8 lg:ml-0 lg:auto lg:w-12"
                                src={Logo}
                                alt="Logo"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className="items-center justify-end hidden gap-10 ml-auto lg:flex lg:w-11/12 bg-clip-text bg-rainbow-gradient animate-breathing-gradient">
                        <Link
                            className={`text-base font-bold text-center text-white transition-all duration-1000 ${scrollY > 0 ? "hover:text-transparent" : ""}`}
                            href="/"
                        >
                            HOME
                        </Link>
                        <Link
                            className={`text-base font-bold text-center text-white transition-all duration-1000 ${scrollY > 0 ? "hover:text-transparent" : ""}`}
                            href="/projects"
                        >
                            PROJECTS
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-10 ml-auto lg:hidden">
                        <button
                            className="flex flex-col items-center justify-center w-12 h-12 mr-4 rounded"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`${hamburger} ${
                                    isOpen ? "rotate-45 translate-y-3" : ""
                                }`}
                            />
                            <div
                                className={`${hamburger} ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <div
                                className={`${hamburger} ${
                                    isOpen ? "-rotate-45 -translate-y-3" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isOpen ? "flex h-auto" : "h-0 hidden"
                } w-full relative lg:hidden flex-col bg-black p-4`}
            >
                <Link
                    className="p-2 text-xl font-bold text-center text-white"
                    href="/"
                >
                    HOME
                </Link>
                <Link
                    className="p-2 text-xl font-bold text-center text-white"
                    href="/projects"
                >
                    PROJECTS
                </Link>
            </div>
        </div>
    );
}
