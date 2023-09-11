import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navigation() {
    return (
        <div className="absolute z-10 flex justify-center w-full h-32 bg-transparent">
            <div className="flex flex-row flex-wrap w-8/12 h-full">
                <div className="flex items-center justify-center">
                    <a href="/">
                        <Image className="w-12 h-auto" src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex items-center justify-end w-11/12 gap-10 ml-auto">
                    <a
                        className="text-xl font-medium text-center text-white"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        className="text-xl font-medium text-center text-white"
                        href="/projects"
                    >
                        Projects
                    </a>
                </div>
            </div>
        </div>
    );
}
