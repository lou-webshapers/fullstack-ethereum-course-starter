/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
