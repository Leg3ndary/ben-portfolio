import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={dosis.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
