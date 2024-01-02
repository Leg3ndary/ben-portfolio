import { ProjectPreviewProps } from "@/types";

import bTagScript from "@/../public/projects/bTagScript.png";
import PortfolioImage from "@/../public/projects/Leg3ndaryPortfolio.png";
import APMC from "@/../public/projects/APMC.png";
import Announcements from "@/../public/projects/Announcements.png";
import FlashNotes from "@/../public/projects/FlashNotes.png";

// https://youtu.be/iBQgLgNp7AE

const projectPreviews = [
    {
        image: {
            src: FlashNotes,
            alt: "FlashNotes",
            width: 900,
            height: 100,
        },
        title: "FLASHNOTES",
        sub: "PROFESSIONAL AI VISION BASED NOTE SUMMARIZATION",
        description: (
            <>
                For a hackathon I led my team to create FlashNotes, a
                professional AI based note summarization/organization tool that
                would read handwritten notes and create flash cards based on
                their main concepts. Though I primarily focused on making a
                reactive and primarily aesthetic frontend, I also linked our API
                to our frontend code while also troubleshooting various issues
                we had when working with OpenAI's vision model. You can watch
                our project in action{" "}
                <a
                    href="https://youtu.be/iBQgLgNp7AE"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-orange-500"
                >
                    here
                </a>
                . You can also view our winning project{" "}
                <a
                    href="https://devpost.com/software/flashnotes-i0cymh"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-orange-500"
                >
                    here
                </a>.
            </>
        ),
        icons: [
            {
                link: "https://nextjs.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                alt: "NextJS",
            },
            {
                link: "https://typescriptlang.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "TypeScript",
            },
            {
                link: "https://tailwindcss.com",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                alt: "TailwindCSS",
            },
            {
                link: "https://openai.com",
                image: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
                alt: "OpenAI",
            },
        ],
        color: "orange-500",
    },
    {
        image: {
            src: APMC,
            alt: "APHS Makers Competition",
            width: 900,
            height: 100,
        },
        title: "APHS MAKERS COMPETITION",
        sub: "CLUB WEBSITE USING NEXT.JS & TAILWIND",
        description: (
            <>
                To continue practicing using Tailwind and Next.js, I made a
                static website containing lots of information about an upcoming
                competition we hosted. Though there are obviously better choices
                in terms of frameworks hosting static content, I wanted to
                continue using Next.js to improve my proficiency with the
                framework. I plan to add more features and submission functions
                to the website later on. You can view the site{" "}
                <a
                    href="https://apmc.vercel.app/"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-purple-400"
                >
                    here
                </a>
                .
            </>
        ),
        icons: [
            {
                link: "https://nextjs.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                alt: "NextJS",
            },
            {
                link: "https://typescriptlang.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "TypeScript",
            },
            {
                link: "https://tailwindcss.com",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                alt: "TailwindCSS",
            },
            {
                link: "https://react.dev",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                alt: "React",
            },
        ],
        color: "purple-400",
    },
    {
        image: {
            src: bTagScript,
            alt: "BTAGSCRIPT PLAYGROUND",
            width: 900,
            height: 100,
        },
        title: "BTAGSCRIPT PLAYGROUND",
        sub: "DYNAMICALLY TYPED INTERPRETER AND DEBUGGER",
        description: (
            <>
                I made an{" "}
                <a
                    className="font-bold text-blue-500 transition-colors hover:text-red-500"
                    href="https://github.com/Leg3ndary/bTagScript"
                    target="_blank"
                >
                    interpreter
                </a>{" "}
                and{" "}
                <a
                    className="font-bold text-blue-500 transition-colors hover:text-red-500"
                    href="https://leg3ndary.github.io/bTagScriptPlayground/"
                    target="_blank"
                >
                    website
                </a>{" "}
                that allows you to run and debug a small improved string
                templating language that I made called bTagScript. Intrigued by
                the static language primarily made popular in the discord bot{" "}
                <a
                    className="font-bold text-blue-500 transition-colors hover:text-red-500"
                    href="https://carl.gg"
                    target="_blank"
                >
                    Carl-bot
                </a>
                , I thought I could not only make it better, but also enhance
                the development experience for this niche language. This
                language focuses on simplicity and quick programming for
                functions that may be tedious to program but simple in practice.
            </>
        ),
        icons: [
            {
                link: "https://python.org",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                alt: "Python",
            },
            {
                link: "https://javascript.com",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                alt: "JavaScript",
            },
            {
                link: "https://html.com",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                alt: "HTML5",
            },
            {
                link: "https://www.w3schools.com/css/",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                alt: "CSS",
            },
        ],
        color: "red-500",
    },
    {
        image: {
            src: Announcements,
            alt: "School Announcements",
            width: 400,
            height: 100,
        },
        title: "SCHOOL ANNOUNCEMENTS",
        sub: "Automated School Announcement Forwarder",
        description: (
            <>
                Since our School Announcements are crudely added to a 96 page
                Google Document every day, I took it upon myself to make a
                better way of checking and viewing announcements through my
                phone. Using{" "}
                <a
                    className="font-bold text-blue-500 transition-colors hover:text-green-400"
                    href="https://discordpy.readthedocs.io/en/stable/"
                    target="_blank"
                >
                    Discord.py
                </a>{" "}
                as a UI, I made a bot that would scrape the entire document at
                regular intervals throughout the day. I then used regex to parse
                the document and send the announcements to a Discord channel. I
                also added a feature that would allow users to subscribe to the
                announcements list and therefore get notified whenever a new
                announcement is posted.
            </>
        ),
        icons: [
            {
                link: "https://cloud.google.com",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                alt: "Google",
            },
            {
                link: "https://python.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                alt: "Python",
            },
            {
                link: "https://discord.com",
                image: "https://cdnlogo.com/logos/d/43/discord.svg",
                alt: "Discord",
            },
            {
                link: "https://sheets.google.com",
                image: "https://www.cdnlogo.com/logos/g/71/google-sheets.svg",
                alt: "Sheets",
            },
        ],
        color: "green-400",
    },
    {
        image: {
            src: PortfolioImage,
            alt: "Portfolio",
            width: 900,
            height: 100,
        },
        title: "THIS WEBSITE!",
        sub: "MY OWN PERSONAL WEBSITE",
        description: (
            <>
                This website is made using NextJS, TypeScript, and TailwindCSS.
                I wanted to make a website that was simple, yet elegant, and I
                think I did pretty good. Here is where I'll showcase my
                projects, and the technologies I used to create them. I may also
                post some blogs or something later!
            </>
        ),
        icons: [
            {
                link: "https://nextjs.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                alt: "NextJS",
            },
            {
                link: "https://typescriptlang.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "TypeScript",
            },
            {
                link: "https://tailwindcss.com",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                alt: "TailwindCSS",
            },
            {
                link: "https://react.dev",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                alt: "React",
            },
        ],
        color: "cyan-300",
    },
];

export default projectPreviews;
