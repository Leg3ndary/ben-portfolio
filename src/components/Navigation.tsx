import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [scrollY, setScrollY] = useState(0);

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
        <div
            className={`fixed top-0 z-10 flex justify-center w-full transition-height ${
                scrollY > 0 ? "h-16 bg-black" : "h-32"
            }`}
        >
            <div className="flex flex-row flex-wrap w-[1170px] h-full">
                <div className="flex items-center justify-center">
                    <a href="/">
                        <Image
                            className="w-12 h-auto"
                            src={Logo}
                            alt="Logo"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-end w-11/12 gap-10 ml-auto">
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
            </div>
        </div>
    );
}
