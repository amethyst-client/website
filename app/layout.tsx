import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";

const drukWide = localFont({
  src: "./fonts/drukwide.ttf",
  variable: "--font-druk-wide",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amethyst Client",
  description: "An insanely fast and lightweight Minecraft client, for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${drukWide.variable} ${poppins.variable} antialiased selection:bg-[#8b5cf6] selection:text-white`}>
        <NoiseOverlay />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
