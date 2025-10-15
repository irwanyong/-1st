import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
  transpilePackages: ["@1st/react-toolkit"],
}

export default nextConfig
