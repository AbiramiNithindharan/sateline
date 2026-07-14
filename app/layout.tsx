import type { Metadata } from "next";
import { Inter, Poppins, Geist, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { defaultMetadata } from "@/lib/seo";

export const metadata = defaultMetadata;
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body
        className={`${inter.className} ${poppins.variable} ${outfit.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
