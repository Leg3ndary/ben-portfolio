import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["900", "700", "500", "400", "300", "100"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={roboto.className}>
            <ThemeProvider attribute="class">
                <Layout>
                    <Component {...pageProps} />
                    <SpeedInsights />
                </Layout>
                <Analytics />
            </ThemeProvider>
        </div>
    );
}
