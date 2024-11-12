import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    APP_API_URL: process.env.REACT_APP_API,
  }
};

export default nextConfig;
