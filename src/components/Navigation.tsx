import Logo from "@/assets/logo.png";
import Image from "next/image";
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
        <div className="fixed top-0 z-10 flex flex-col w-full h-auto transition-height">
            <div
                className={`flex justify-center w-full transition-height h-20 bg-black ${
                    scrollY > 0
                        ? "lg:h-16 lg:bg-black"
                        : "lg:bg-transparent lg:h-32"
                }`}
            >
                <div className="flex flex-row flex-wrap w-[1170px] h-full">
                    <div className="flex items-center justify-center">
                        <a href="/">
                            <Image
                                className="w-16 ml-8 lg:ml-0 lg:auto lg:w-12"
                                src={Logo}
                                alt="Logo"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div className="items-center justify-end hidden gap-10 ml-auto lg:flex lg:w-11/12">
                        <a
                            className="text-xs font-bold text-center text-white"
                            href="/"
                        >
                            HOME
                        </a>
                        <a
                            className="text-xs font-bold text-center text-white"
                            href="/projects"
                        >
                            PROJECTS
                        </a>
                    </div>
                    <div className="flex items-center justify-end gap-10 ml-auto lg:hidden">
                        <button
                            className="flex flex-col items-center justify-center w-12 h-12 mr-4 rounded group"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`${hamburger} ${
                                    isOpen
                                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                        : "opacity-50 group-hover:opacity-100"
                                }`}
                            />
                            <div
                                className={`${hamburger} ${
                                    isOpen
                                        ? "opacity-0"
                                        : "opacity-50 group-hover:opacity-100"
                                }`}
                            />
                            <div
                                className={`${hamburger} ${
                                    isOpen
                                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                        : "opacity-50 group-hover:opacity-100"
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isOpen
                        ? "flex h-auto transition-height"
                        : "hidden h-0 transition-height"
                } w-full relative lg:hidden flex-col bg-black`}
            >
                <a
                    className="text-base font-bold text-center text-white"
                    href="/"
                >
                    HOME
                </a>
                <a
                    className="text-base font-bold text-center text-white"
                    href="/projects"
                >
                    PROJECTS
                </a>
            </div>
        </div>
    );
}
