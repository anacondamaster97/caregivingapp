import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  }
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
