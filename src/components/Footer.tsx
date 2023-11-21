import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div className="flex justify-center w-full h-48 bg-black">
            <div className="flex w-[1170px]">
                <div className="flex flex-row flex-wrap w-full h-full">
                    <div className="flex flex-row items-center justify-center w-full h-full p-12">
                        <div className="flex justify-start flex-1 gap-4">
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="p-1 transition border border-white rounded-md group hover:border-transparent">
                                    <a
                                        href="https://github.com/Leg3ndary"
                                        target="_blank"
                                    >
                                        <ImGithub className="w-6 h-6 transition hover:text-[#9f7be1] text-white" />
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="p-1 transition border border-white rounded-md group hover:border-transparent">
                                    <a
                                        href="https://www.linkedin.com/in/ben-zhou06/"
                                        target="_blank"
                                    >
                                        <FaLinkedin className="w-6 h-6 text-white transition hover:text-[#0077B5]" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex-1">
                            <p className="p-3 text-base text-[#777777] text-right">
                                Copyright © 2023 Ben Zhou All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
