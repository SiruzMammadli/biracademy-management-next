import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    productionBrowserSourceMaps: false,
    compiler: {
        emotion: true,
    },
};

export default nextConfig;
