import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import './globals.css';
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";

const unbounded = Unbounded({
  variable: "--font-druk-wide",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amethyst Studios",
  description: "An indie development studio building and testing practical tools and plugins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${poppins.variable} antialiased selection:bg-[#8b5cf6] selection:text-white`}>
        <NoiseOverlay />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
