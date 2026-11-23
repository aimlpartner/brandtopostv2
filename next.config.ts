import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: "/onboarding",
        destination: "/brandtopost_onboarding_skeleton.html",
      },
      {
        source: "/workspace",
        destination: "/brandtopost_app_skeleton.html",
      },
      {
        source: "/app",
        destination: "/brandtopost_app_skeleton.html",
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
