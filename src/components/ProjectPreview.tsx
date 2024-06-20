import ProjectHoverable from "@/components/ProjectHoverable";
import { ProjectPreviewProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

const colorVariants: { [key: string]: string[] } = {
    "purple-400": [
        "hover:shadow-purple-400",
        "group-hover:text-purple-400",
        "hover:text-purple-400",
        "group-hover:bg-purple-400",
        "bg-purple-400",
    ],
    "red-500": [
        "hover:shadow-red-500",
        "group-hover:text-red-500",
        "hover:text-red-500",
        "group-hover:bg-red-500",
        "bg-red-500",
    ],
    "green-400": [
        "hover:shadow-green-400",
        "group-hover:text-green-400",
        "hover:text-green-400",
        "group-hover:bg-green-400",
        "bg-green-400",
    ],
    "cyan-300": [
        "hover:shadow-cyan-300",
        "group-hover:text-cyan-300",
        "hover:text-cyan-300",
        "group-hover:bg-cyan-300",
        "bg-cyan-300",
    ],
    "orange-500": [
        "hover:shadow-orange-500",
        "group-hover:text-orange-500",
        "hover:text-orange-500",
        "group-hover:bg-orange-500",
        "bg-orange-500",
    ],
    "fuchsia-400": [
        "hover:shadow-fuchsia-400",
        "group-hover:text-fuchsia-400",
        "hover:text-fuchsia-400",
        "group-hover:bg-fuchsia-400",
        "bg-fuchsia-400",
    ],
    "amber-400": [
        "hover:shadow-amber-400",
        "group-hover:text-amber-400",
        "hover:text-amber-400",
        "group-hover:bg-amber-400",
        "bg-amber-400",
    ],
    "sky-600": [
        "hover:shadow-sky-600",
        "group-hover:text-sky-600",
        "hover:text-sky-600",
        "group-hover:bg-sky-600",
        "bg-sky-600",
    ],
    "yellow-400": [
        "hover:shadow-yellow-400",
        "group-hover:text-yellow-400",
        "hover:text-yellow-400",
        "group-hover:bg-yellow-400",
        "bg-yellow-400",
    ],
    "emerald-600": [
        "hover:shadow-emerald-600",
        "group-hover:text-emerald-600",
        "hover:text-emerald-600",
        "group-hover:bg-emerald-600",
        "bg-emerald-600",
    ],
    default: [
        "hover:shadow-blue-400",
        "group-hover:text-blue-400",
        "hover:text-blue-400",
        "group-hover:bg-blue-400",
        "bg-blue-400",
    ],
};

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const boxItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut" 
        }
    },
};

export default function ProjectPreview({
    image,
    title,
    sub,
    description,
    icons,
    color,
    index = 1,
    projectLink,
    slug,
}: ProjectPreviewProps) {
    const colorVariant = colorVariants[color] || colorVariants.default;
    return (
        <motion.li
            className="self-center list-none justify-self-center"
            variants={boxItem}
        >
            <div
                className={`group flex flex-col justify-center w-[380px] lg:w-[570px] p-10 bg-white shadow-2xl rounded-3xl hover:shadow-2xl transition ${colorVariant[0]} duration-1000`}
            >
                <Image
                    className="object-contain h-auto mx-auto rounded-md shadow-lg"
                    src={image.src}
                    width={image.width ? image.width : 100}
                    alt={image.alt}
                    loading={image.priority ? "eager" : "lazy"}
                    priority={image.priority}
                />
                <h2 className="p-2 mt-4 text-xl font-black uppercase lg:text-3xl">
                    {title}
                </h2>
                <h3
                    className={`p-2 font-medium transition-colors duration-500 text-sm lg:text-base uppercase ${colorVariant[1]}`}
                >
                    {sub}
                </h3>
                <p className="p-2 mb-2 text-sm font-light lg:text-base">
                    {description}
                </p>
                <div className="flex justify-center w-full mt-auto">
                    <div
                        className={`w-[1170px] h-[1px] bg-[#dddddd] ${colorVariant[3]} transition-colors duration-1000`}
                    />
                </div>
                <motion.div
                    className="flex py-6 pb-0 place-content-evenly"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {icons.map((icon, index) => (
                        <ProjectHoverable
                            key={index}
                            image={icon.image}
                            alt={icon.alt}
                            link={icon.link}
                            height={icon.height}
                            width={icon.width}
                        />
                    ))}
                </motion.div>
                <div className="flex justify-center w-full my-6">
                    <div
                        className={`w-[1170px] h-[1px] bg-[#dddddd] ${colorVariant[3]} transition-colors duration-1000`}
                    />
                </div>
                <div className="flex items-center mx-2 mt-1">
                    {projectLink && (
                        <motion.div
                            className={`flex items-center gap-2 p-2 px-4 pl-3 text-xl text-white rounded-lg cursor-pointer ${colorVariant[4]}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 8,
                            }}
                        >
                            <MdOpenInNew className="text-2xl" />
                            <a
                                className="text-sm font-medium lg:text-lg"
                                target="_blank"
                                href={projectLink}
                            >
                                View Project
                            </a>
                        </motion.div>
                    )}
                    {slug && (
                        <motion.div
                            className={`flex items-center ml-auto gap-2 p-2 px-4 text-sm lg:text-xl text-black rounded-lg cursor-pointer`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 8,
                            }}
                        >
                            <Link
                                className="text-sm font-medium lg:text-lg"
                                href={`/projects/${slug}`}
                                prefetch={false}
                            >
                                Read More
                            </Link>
                            <FaArrowRight className="text-2xl" />
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.li>
    );
}
