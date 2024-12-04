import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import fuego from "@/../public/experience/fuego.webp";
import SAP from "@/../public/experience/SAP.png";
import Eureka from "@/../public/experience/Eureka.png";
import Triway from "@/../public/experience/triway.png";
import Image from "next/image";
import MidnightSun from "@/../public/experience/midnightsun.png";

type Job = {
    title: string;
    company: string;
    description: string;
    image: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
        priority?: boolean;
    };
};

type JobProps = {
    key: number;
    job: Job;
};

function Job({ key, job }: JobProps) {
    return (
        <motion.li
            key={key}
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: -20, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="grid grid-cols-[4rem_auto] md:grid-cols-[10rem_auto] py-4 list-none bg-clip-text bg-rainbow-gradient animate-breathing-gradient"
        >
            <div className="flex items-center justify-center w-12 h-12 m-1 mt-4 overflow-hidden rounded-md lg:my-auto md:m-2 lg:m-5 md:h-24 md:w-24">
                <Image
                    src={job.image.src}
                    alt={job.image.alt}
                    width={150}
                    height={150}
                    priority={job.image.priority}
                    className="object-contain w-auto h-full"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="pt-3 text-xl font-black text-transparent lg:text-4xl">
                    {job.title}
                </h3>
                <h4 className="py-2 text-lg font-bold">{job.company}</h4>
                <p>{job.description}</p>
            </div>
        </motion.li>
    );
}

const jobs: Job[] = [
    {
        title: "Software Engineering Intern",
        company: "Fuego.io - San Francisco, California",
        description: "I will be joining Fuego for the January 2025 term.",
        image: {
            src: fuego,
            alt: "Fuego.io Logo",
            width: 150,
            height: 150,
        },
    },
    {
        title: "Firmware Team Member",
        company: "Midnight Sun - Waterloo, Ontario",
        description:
            "Developed ping testing functions in Python and C to verify connectivity across all devices on a CAN network.",
        image: {
            src: MidnightSun,
            alt: "Midnight Sun Logo",
            width: 150,
            height: 150,
        },
    },
    // {
    //     title: "Prototype Engineering Intern",
    //     company: "Averroes Technologies Toronto, Ontario",
    //     description:
    //         "Developed 12 diverse firmware and hardware prototypes, utilizing C++ and Python to iteratively test, validate, and optimize core product functionalities.",

    // },
    {
        title: "Software Developer Coop Student",
        company: "SAP - Toronto, Ontario",
        description:
            "Developed a Cloudflare worker to handle and sanitize GPT-4 requests using TypeScript, and implemented comprehensive tests to achieve 100% coverage.",
        image: {
            src: SAP,
            alt: "SAP Logo",
            width: 150,
            height: 150,
        },
    },
    {
        title: "Eureka Hacks Website Lead",
        company: "Eureka Hacks 2024 - Oakville, Ontario",
        description:
            "Led a team of three to build a modern, responsive website using Next.js that managed registrations, securing a max event capacity of 300 sign-ups a month before the event.",
        image: {
            src: Eureka,
            alt: "Eureka Hacks Logo",
            width: 150,
            height: 150,
        },
    },
    {
        title: "Programming Instructor",
        company: "Triway Education - Stouffville, Ontario",
        description:
            "Taught a comprehensive curriculum of 18 lessons to enhance programming skills in Java and Python.",
        image: {
            src: Triway,
            alt: "Triway Education Logo",
            width: 150,
            height: 150,
        },
    },
];

export default function Experience() {
    return (
        <div className="flex w-11/12 mx-auto">
            <div className="w-2 h-full m-2 mx-4 mr-4 md:mr-12 bg-rainbow-gradient animate-breathing-gradient rounded-xl" />
            <ol className="relative flex flex-col justify-center p-2">
                {jobs.map((job, index) => (
                    <Job key={index} job={job} />
                ))}
            </ol>
        </div>
    );
}
