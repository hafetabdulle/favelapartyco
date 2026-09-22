import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Toucan from "@/components/Toucan";

/** Editorial display face — its italic carries the brand voice. */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
});

/** UI + body copy. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rio Explore - Authentic Rio de Janeiro Tours & Experiences",
  description: "Experience the real Rio with guided favela tours, pubcrawls, hiking, hang gliding, and custom multi-day adventures. Book your unforgettable Brazilian experience today.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toucan />
      </body>
    </html>
  );
}
