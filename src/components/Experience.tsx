import { motion, useInView } from "framer-motion";
import { StaticImageData } from "next/image";
import fuego from "@/../public/experience/fuego.webp";
import SAP from "@/../public/experience/SAP.png";
import Eureka from "@/../public/experience/Eureka.png";
import Averroes from "@/../public/experience/averroes.png";
// import Triway from "@/../public/experience/triway.png";
import Image from "next/image";
import MidnightSun from "@/../public/experience/midnightsun.png";
import { useRef } from "react";

type Job = {
    title: string;
    company: string;
    description: string;
    date: string;
    image: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
        priority?: boolean;
    };
};

type JobProps = {
    job: Job;
    index: number;
};

// const container = {
//     hidden: { opacity: 1, scale: 0 },
//     visible: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             delayChildren: 0.3,
//             staggerChildren: 0.2,
//         },
//     },
// };

// const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.8,
//             ease: "easeOut",
//         },
//     },
// };

function Job({ job, index }: JobProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="relative grid grid-cols-[4rem_auto] md:grid-cols-[10rem_auto] py-8 list-none group"
            key={index}
        >
            <div className="absolute left-0 w-2 h-full -ml-6 transition-opacity duration-300 rounded-full opacity-0 bg-rainbow-gradient animate-breathing-gradient group-hover:opacity-100" />
            <div className="flex items-center justify-center w-12 h-12 m-1 mt-4 overflow-hidden transition-transform duration-300 rounded-xl lg:my-auto md:m-2 lg:m-5 md:h-24 md:w-24 group-hover:scale-110">
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
                <span className="text-sm dark:text-[#ececec]">{job.date}</span>
                <h3 className="pt-2 text-xl font-black transition-colors duration-300 lg:text-3xl group-hover:text-transparent bg-clip-text bg-rainbow-gradient animate-breathing-gradient">
                    {job.title}
                </h3>
                <h4 className="py-2 text-lg font-medium transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {job.company}
                </h4>
                <p className="dark:text-[#ececec] font-light">
                    {job.description}
                </p>
            </div>
        </motion.li>
    );
}

const jobs: Job[] = [
    {
        title: "Software Engineering Intern",
        company: "Fuego.io - San Francisco, California",
        description:
            "Developing GraphQL queries for Shopify metafield management and building API routes for targeted notifications. Creating tailored solutions enabling real-time data analysis for 40+ brands.",
        date: "Jan 2025 - Apr 2025",
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
            "Developing ping testing functions in Python and C to verify connectivity across CAN networks. Writing driver functions to process temperature readings from raw voltage values.",
        date: "Sep 2024 - Present",
        image: {
            src: MidnightSun,
            alt: "Midnight Sun Logo",
            width: 150,
            height: 150,
        },
    },
    {
        title: "Prototype Engineering Intern",
        company: "Averroes Technologies - Toronto, Ontario",
        description:
            "Developed 12 firmware prototypes in C++ for iterative product validation. Created an MQTT client-server broker in Python for API request handling and SQLite data storage.",
        date: "Jul 2024 - Aug 2024",
        image: {
            src: Averroes,
            alt: "Averroes Technologies Logo",
            width: 150,
            height: 150,
        },
    },
    {
        title: "Software Developer Co-op Student",
        company: "SAP - Toronto, Ontario",
        description:
            "Created a TypeScript worker for GPT-4 request handling, reducing errors by 23%. Implemented comprehensive Vitest testing with 100% coverage. Developed Python and Node scripts to clean 248,000 records, improving processing speed by 26%.",
        date: "Feb 2024 - Jul 2024",
        image: {
            src: SAP,
            alt: "SAP Logo",
            width: 150,
            height: 150,
        },
    },
    {
        title: "FullStack Developer Lead",
        company: "EurekaHacks 2024 - Oakville, Ontario",
        description:
            "Enhanced SEO strategies, improving page load times by 160% and achieving 3,800+ increase in impressions. Led development of a Next.js website that secured 300+ event registrations.",
        date: "Nov 2023 - May 2024",
        image: {
            src: Eureka,
            alt: "Eureka Hacks Logo",
            width: 150,
            height: 150,
        },
    },
];

export default function Experience() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-11/12 max-w-[1170px] relative">
                <ol className="relative flex flex-col justify-center">
                    {jobs.map((job, index) => (
                        <Job key={index} job={job} index={index} />
                    ))}
                </ol>
            </div>
        </div>
    );
}
