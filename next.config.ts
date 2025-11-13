import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rules: {
    // Turn off or downgrade noisy rules
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn",
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
