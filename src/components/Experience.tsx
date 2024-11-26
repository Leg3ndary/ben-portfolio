import { motion } from "framer-motion";

type Job = {
    title: string;
    company: string;
    description: string;
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
            className="py-8 list-none bg-clip-text bg-rainbow-gradient animate-breathing-gradient"
        >
            <h3 className="pt-3 text-xl font-black text-transparent lg:text-4xl">
                {job.title}
            </h3>
            <h4 className="py-2 text-lg font-bold">{job.company}</h4>
            <p>{job.description}</p>
        </motion.li>
    );
}

const jobs: Job[] = [
    {
        title: "Software Engineering Intern",
        company: "Fuego.io, San Francisco, California",
        description: "I will be joining Fuego for the January 2025 term."
    },
    {
        title: "Prototype Engineering Intern",
        company: "Averroes Technologies Toronto, Ontario",
        description:
            "Developed 12 diverse firmware and hardware prototypes, utilizing C++ and Python to iteratively test, validate, and optimize core product functionalities.",
    },
    {
        title: "Software Developer Coop Student",
        company: "SAP Toronto, Ontario",
        description:
            "Developed a Cloudflare worker to handle and sanitize GPT-4 requests using TypeScript, and implemented comprehensive tests to achieve 100% coverage.",
    },
    {
        title: "Eureka Hacks Website Lead",
        company: "Eureka Hacks 2024 Oakville, Ontario",
        description:
            "Led a team of three to build a modern, responsive website using Next.js that managed registrations, securing a max event capacity of 300 sign-ups a month before the event.",
    },
    {
        title: "Programming Instructor",
        company: "Triway Education Stouffville, Ontario",
        description:
            "Taught a comprehensive curriculum of 18 lessons to enhance programming skills in Java and Python.",
    },
];

export default function Experience() {
    return (
        <div className="flex w-11/12 mx-auto">
            <div className="w-2 h-full m-2 mx-4 mr-4 lg:mr-12 bg-rainbow-gradient animate-breathing-gradient rounded-xl" />
            <ol className="relative flex flex-col justify-center p-2">
                {jobs.map((job, index) => (
                    <Job key={index} job={job} />
                ))}
            </ol>
        </div>
    );
}
