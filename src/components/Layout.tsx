import React, { PropsWithChildren } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="scroll-smooth">
            <Head>
                <title>Ben's Portfolio</title>
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content="Ben Z'z Portfolio" />
                <meta
                    property="og:description"
                    content="Ben's Portfolio Website made with Next.js, TypeScript, and TailwindCSS."
                />
                <meta
                    property="description"
                    content="Ben's Portfolio Website made with Next.js, TypeScript, and TailwindCSS."
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://benzhou.tech" />
                <meta
                    name="description"
                    content="Ben Z's Portfolio site made with Next.js TypeScript, and TailwindCSS. View my projects and other relevant information about me!"
                />
            </Head>
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}
