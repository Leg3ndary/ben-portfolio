import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const ds = Dancing_Script({
    subsets: ["latin"],
    weight: ["700", "400"],
});

export default function Golden() {
    return (
        <motion.div
            className={`text-yellow-300/80 flex justify-center w-full py-2 ${ds.className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <span className="text-3xl">Ben Zhou</span>
        </motion.div>
    );
}
