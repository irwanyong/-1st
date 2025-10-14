import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
  serverExternalPackages: ["@1st/ui-toolkit"],
}

export default nextConfig
