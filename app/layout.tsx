import type { Metadata } from "next";
import { Inter, Grey_Qo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LanguageToggle } from "@/components/LanguageToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greyQo = Grey_Qo({
  weight: "400",
  variable: "--font-grey-qo",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: "400",
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "María Su Sarlat",
  description: "Proyectos de arquitectura y diseño con un enfoque atemporal y esencial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${greyQo.variable} ${playfairDisplay.variable}`}>
      <body
        className="antialiased bg-background text-foreground"
      >
        <Providers>
          <LanguageToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
