import { CodeBlock } from "react-code-block/dist/code-block";
import { useCopyToClipboard } from "react-use";
import { themes } from "prism-react-renderer";
import { useState } from "react";
import { motion } from "framer-motion";

type CodeBlockProps = {
    code: string;
    language: string;
};

export default function CodeBlockDemo({ code, language }: CodeBlockProps) {
    const [state, copyToClipboard] = useCopyToClipboard();
    const [isCopied, setIsCopied] = useState("Copy");

    const copyCode = () => {
        copyToClipboard(code);
        setIsCopied("Copied!");

        setTimeout(() => {
            setIsCopied("Copy");
        }, 3000);
    };

    return (
        <CodeBlock code={code} language={language} theme={themes.vsDark} >
            <motion.div className="relative">
                <CodeBlock.Code className="bg-[#242424] lg:!p-6 !px-5 !py-4 rounded-xl shadow-lg overflow-auto">
                    <div className="table-row">
                        <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-right text-gray-500 select-none" />
                        <CodeBlock.LineContent className="table-cell">
                            <CodeBlock.Token />
                        </CodeBlock.LineContent>
                    </div>
                </CodeBlock.Code>

                <motion.button
                    className="bg-[#333333] text-white hover:text-[#9cdcfe] rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold duration-500 ease-in-out transition-all"
                    onClick={copyCode}
                >
                    {isCopied}
                </motion.button>
            </motion.div>
        </CodeBlock>
    );
}
