import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["900", "700", "500", "400", "300", "100"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={roboto.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
