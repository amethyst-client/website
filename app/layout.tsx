import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

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
  description: "A minimal, premium Minecraft client landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${drukWide.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
