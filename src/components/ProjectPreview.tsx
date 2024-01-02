import ProjectHoverable from "@/components/ProjectHoverable";
import { ProjectPreviewProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

const colorVariants: { [key: string]: string[] } = {
    "purple-400": [
        "hover:shadow-purple-400",
        "group-hover:text-purple-400",
        "hover:text-purple-400",
        "group-hover:bg-purple-400",
    ],
    "red-500": [
        "hover:shadow-red-500",
        "group-hover:text-red-500",
        "hover:text-red-500",
        "group-hover:bg-red-500",
    ],
    "green-400": [
        "hover:shadow-green-400",
        "group-hover:text-green-400",
        "hover:text-green-400",
        "group-hover:bg-green-400",
    ],
    "cyan-300": [
        "hover:shadow-cyan-300",
        "group-hover:text-cyan-300",
        "hover:text-cyan-300",
        "group-hover:bg-cyan-300",
    ],
    "orange-500": [
        "hover:shadow-orange-500",
        "group-hover:text-orange-500",
        "hover:text-orange-500",
        "group-hover:bg-orange-500",
    ],
    "fuchsia-400": [
        "hover:shadow-fuchsia-400",
        "group-hover:text-fuchsia-400",
        "hover:text-fuchsia-400",
        "group-hover:bg-fuchsia-400",
    ],

    default: [
        "hover:shadow-blue-400",
        "group-hover:text-blue-400",
        "hover:text-blue-400",
        "group-hover:bg-blue-400",
    ],
};

export default function ProjectPreview({
    image,
    title,
    sub,
    description,
    icons,
    color,
}: ProjectPreviewProps) {
    const colorVariant = colorVariants[color] || colorVariants.default;
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 500,
            }}
        >
            <div
                className={`self-start justify-self-center group flex flex-col justify-center w-full lg:w-[570px] p-10 bg-white shadow-2xl rounded-3xl hover:shadow-2xl transition hover:scale-105 ${colorVariant[0]} duration-1000`}
            >
                <Image
                    className="object-contain mx-auto animate-fade-in"
                    src={image.src}
                    width={image.width ? image.width : 100}
                    height={image.height ? image.height : 100}
                    alt={image.alt}
                    loading="lazy"
                />
                <h2 className="p-2 mt-4 text-3xl font-black">{title}</h2>
                <h3
                    className={`p-2 font-medium transition-colors duration-1000 text-md ${colorVariant[1]}`}
                >
                    {sub}
                </h3>
                <p className="p-2 pt-4 pb-4 font-light">{description}</p>
                <div className="flex justify-center w-full mt-auto">
                    <div
                        className={`w-[1170px] h-[1px] bg-[#dddddd] ${colorVariant[3]} transition-colors duration-1000`}
                    />
                </div>
                <div className="flex pt-8 place-content-evenly">
                    {icons.map((icon, index) => (
                        <ProjectHoverable
                            key={index}
                            image={icon.image}
                            alt={icon.alt}
                            link={icon.link}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
