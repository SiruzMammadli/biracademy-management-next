import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    compiler: {
        emotion: true,
    },
};

export default nextConfig;
