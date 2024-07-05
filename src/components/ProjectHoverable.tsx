import Image from "next/image";
import { motion } from "framer-motion";

type ProjectHoverableProps = {
    link: string;
    image: string;
    alt: string;
    width?: number;
    height?: number;
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export default function ProjectHoverable({
    link,
    image,
    alt,
    width = 45,
    height = 45,
}: ProjectHoverableProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            className="flex items-center justify-center"
            variants={item}
        >
            <Image
                className="transition-transform duration-200 ease-in-out animate-fade-in hover:scale-125"
                src={image}
                width={width}
                height={height}
                alt={alt}
            />
        </motion.a>
    );
}
