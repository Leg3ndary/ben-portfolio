import { ProjectPreviewProps } from "@/types";

import bTagScript from "@/../public/projects/bTagScript.png";
import PortfolioImage from "@/../public/projects/Leg3ndaryPortfolio.png";
import APMC from "@/../public/projects/APMC.png";
import Announcements from "@/../public/projects/Announcements.png";
import FlashNotes from "@/../public/projects/FlashNotes.png";
import Eureka from "@/../public/projects/Eureka2024.png";
import Macroboard from "@/../public/projects/Macroboard.png";

const projectPreviews = [
    {
        image: {
            src: Macroboard,
            alt: "Spotify Macroboard",
            width: 900,
            height: 100,
            priority: true,
        },
        title: "SPOTIFY MACROBOARD",
        sub: "FULLY CUSTOM MACROBOARD FOR SPOTIFY",
        description: (
            <>
                I designed and built and fully custom macroboard for Spotify: it
                has a translucent case, fully wireless capabilities, and smooth 
                RGB lighting. Using EasyEDA I designed a PCB and had it
                printed out, then I soldered all of the components and
                programmed the board using C++. After that, I designed a custom case
                for the project along with keycaps. The final project includes 7
                fully programmable keys and a 128x64 OLED screen. I also created an
                API to help port over information that I needed, which includes
                matching album covers with their respective overall colours to
                make an aesthetically pleasing experience. You can view the
                project on{" "}
                <a
                    href="https://github.com/Leg3ndary/SpotifyMacroboard"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-fuchsia-400"
                >
                    GitHub
                </a>
                !
            </>
        ),
        icons: [
            {
                link: "https://arduino.cc",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg",
                alt: "Arduino",
            },
            {
                link: "https://typescriptlang.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "TypeScript",
            },
            {
                link: "https://cplusplus.com/",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                alt: "C++",
            },
            {
                link: "https://nextjs.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                alt: "NextJS",
            },
        ],
        color: "amber-400",
    },
    {
        image: {
            src: Eureka,
            alt: "EUREKAHACKS 2024",
            width: 900,
            height: 100,
            priority: false,
        },
        title: "EUREKAHACKS 2024",
        sub: "RESPONSIVE MODERN HACKATHON WEBSITE",
        description: (
            <>
                As the lead director of web development for EurekaHACKS 2024, I
                was tasked with creating a modern and responsive website to
                attract both attendees and sponsors. To make sure our department
                could collaborate effectively, we used standard JavaScript along
                with Next.js to speed up some of our processes. Working with our
                Design team, I replicated and created layouts, while also
                creating animations and transitions to make the website more
                appealing. I also helped transfer domains and manage DNS records
                while also managing the production site using Netlify. You can
                view the site at{" "}
                <a
                    href="https://eurekahacks.ca"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-fuchsia-400"
                > 
                    Eurekahacks.ca
                </a>
                !
            </>
        ),
        icons: [
            {
                link: "https://nextjs.org",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                alt: "NextJS",
            },
            {
                link: "https://javascript.com",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                alt: "JavaScript",
            },
            {
                link: "https://netlify.com",
                image: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
                alt: "Netlify",
            },
            {
                link: "https://figma.com",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                alt: "Figma",
            },
        ],
        color: "fuchsia-400",
    },
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
                For a hackathon, I led my team to create FlashNotes: a
                professional AI-based note summarization and organization tool that
                would read handwritten notes to create flash cards based on
                their main concepts. Though I primarily focused on making a
                reactive and primarily aesthetic frontend, I also linked our API
                to our frontend code while also troubleshooting various issues
                we had when working with OpenAI&apos;s vision model. You can
                watch our project in action on{" "}
                <a
                    href="https://youtu.be/iBQgLgNp7AE"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-orange-500"
                >
                    YouTube
                </a>
                ! You can also view our winning project&apos;s submission on{" "}
                <a
                    href="https://devpost.com/software/flashnotes-i0cymh"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-orange-500"
                >
                    DevPost
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
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
                static website containing lots of information about a competition 
                we had hosted, which we had unfortunately severely misjudged; we
                accidentally put the winning team in second place. Though there
                are obviously better choices in terms of frameworks hosting 
                static content, I wanted to repeatedly use Next.js to improve 
                my proficiency. I plan to add more features and submission functions
                to the website later on. You can view the site hosted by vercel
                at{" "}
                <a
                    href="https://apmc.vercel.app/"
                    target="_blank"
                    className="font-bold text-blue-500 transition-colors duration-1000 hover:text-purple-400"
                >
                    apmc.vercel.app
                </a>
                !
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
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
                templating language that I made, which I named bTagScript. Intrigued by
                the static language primarily made popular in the discord bot{" "}
                <a
                    className="font-bold text-blue-500 transition-colors hover:text-red-500"
                    href="https://carl.gg"
                    target="_blank"
                >
                    Carl-bot
                </a>
                , I thought I could not only make it better, but also enhance
                the development experience for this niche language. It focuses
                on simplicity and quick programming for functions that may be 
                tedious to program, yet simple in practice.
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
                Because our School Announcements were crudely added to a 96 page
                Google Document every single day, I took it upon myself to design a
                better way of checking and viewing announcements through my
                phone. Using{" "}
                <a
                    className="font-bold text-blue-500 transition-colors hover:text-green-400"
                    href="https://discordpy.readthedocs.io/en/stable/"
                    target="_blank"
                >
                    Discord.py
                </a>{" "}
                as a UI, I made a bot that would scrape the document at
                regular intervals throughout the day, which then used RegEx to parse
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
                This website was created by using NextJS, TypeScript, and TailwindCSS!
                I wanted to design a website that was simple yet elegant, and I
                think I did pretty well. Here is where I&apos;ll showcase my
                projects, and the technologies I used to create them! I may also
                post some blogs or something of the sort later!
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
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
