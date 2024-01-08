/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    legacyBrowsers: false,
    outputFileTracingRoot: path.join(__dirname, "../../"),
    outputFileTracingExcludes: {
        "*": [
            "node_modules/next/wasm"
        ],
    },
};

module.exports = nextConfig;
