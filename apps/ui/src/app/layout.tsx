import type { Metadata } from "next";
import "./globals.css";
import Providers from "../providers";
import Navbar from "../components/navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Chill Apes",
  description: "Best NFT community on earth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <div className="max-w-[800px] mx-auto py-6">{children}</div>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
