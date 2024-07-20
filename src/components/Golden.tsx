import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const ds = Dancing_Script({
    subsets: ["latin"],
    weight: ["700", "400"],
});

const names = [
    "Ben Zhou",
    "Alice Smith",
    "John Doe",
    "Jane Doe",
    "Jane Doe",
    "Jane Doe",
    "fdbd Doe",
    "sdfg Doe",
    "Jasd Doe",
    "wtf bro",
    "someone else",
];

export default function Golden() {
    return (
        <motion.div
            className={`text-yellow-300/80 flex justify-center w-full py-2 my-16 mb-32 ${ds.className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="w-full overflow-hidden whitespace-nowrap">
                <div className="inline-flex scrolling-text">
                    {names.concat(names).map((name, index) => (
                        <span
                            key={index}
                            className="px-8 py-0 mx-8 text-xl whitespace-nowrap"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .scrolling-text {
                    animation: scroll-left 15s linear infinite;
                }

                .scrolling-text:hover {
                    animation-play-state: paused;
                }

                @keyframes scroll-left {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </motion.div>
    );
}
