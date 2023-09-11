import Image from "next/image";
import Mocha from "@/assets/mocha.png";

export default function Home() {
    return (
        <div className="absolute flex justify-center w-full h-3/6 bg-rainbow-gradient animate-breathing-gradient">
            <div className="relative flex h-full bg-white border-black lg:w-9/12 xl:w-7/12 drop-shadow-2xl mt-72 rounded-3xl">
                <div className="flex content-center justify-center w-1/2 h-full">
                    <Image className="object-contain" src={Mocha} alt="Mocha" />
                </div>
                <div className="flex flex-col justify-center w-1/2 h-full">
                    <h1 className="text-6xl text-center">Mocha</h1>
                    <h2 className="text-2xl text-center">
                        A Discord bot for moderation, fun, and more!
                    </h2>
                </div>
            </div>
        </div>
    );
}
