import { ImGithub } from "react-icons/im";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const motionProps = {
    initial: { scale: 1 },
    whileHover: { scale: 1.2 },
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
    },
    whileTap: { scale: 0.9 },
};

export default function Footer() {
    return (
        <div className="flex justify-center w-full bg-black h-128 lg:h-96">
            <div className="flex xl:w-[1170px] 2xl:w-[1400px]">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="grid w-full h-full grid-flow-col grid-rows-2 p-12 py-4 lg:py-0 lg:grid-cols-2 lg:grid-flow-row lg:grid-rows-none">
                        <div className="flex flex-col flex-1 mx-4 lg:my-24">
                            <h2 className="py-4 text-3xl font-bold text-white text-start">
                                Contacts
                            </h2>
                            <p className="text-[#777777] py-2">
                                Thanks for reading through my website! If you
                                want to contact me please reach out on LinkedIn.
                            </p>
                            <p className="text-[#777777] py-2">
                                Copyright © 2023 Ben Zhou All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 mx-4 lg:my-24">
                            <h2 className="py-4 text-3xl font-bold text-white">
                                Socials
                            </h2>
                            <p className="text-[#777777] py-2 pb-8">
                                Check out my socials below!
                            </p>
                            <div className="flex gap-4">
                                <motion.div {...motionProps}>
                                    <div className="p-1 transition border border-white rounded-md group hover:border-transparent">
                                        <a
                                            href="https://discord.com/users/360061101477724170"
                                            target="_blank"
                                        >
                                            <FaDiscord className="w-6 h-6 lg:w-8 lg:h-8 text-white transition hover:text-[#7289DA]" />
                                        </a>
                                    </div>
                                </motion.div>
                                <motion.div {...motionProps}>
                                    <div className="p-1 transition border border-white rounded-md group hover:border-transparent">
                                        <a
                                            href="https://github.com/Leg3ndary"
                                            target="_blank"
                                        >
                                            <ImGithub className="w-6 h-6 lg:w-8 lg:h-8 transition hover:text-[#9f7be1] text-white" />
                                        </a>
                                    </div>
                                </motion.div>
                                <motion.div {...motionProps}>
                                    <div className="p-1 transition border border-white rounded-md group hover:border-transparent">
                                        <a
                                            href="https://www.linkedin.com/in/ben-zhou06/"
                                            target="_blank"
                                        >
                                            <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8 text-white transition hover:text-[#0077B5]" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
