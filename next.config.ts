import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'schools.org.in',
        port: '',
        pathname: '/assets/images/**',
      },
      // Add more domains if needed for other external images
      {
        protocol: 'https',
        hostname: '**', // This allows all HTTPS domains (use cautiously)
        port: '',
        pathname: '**',
      }
    ],
    // Allow data URLs for base64 images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;