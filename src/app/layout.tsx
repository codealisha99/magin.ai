import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Monet.ai | Turn Knowledge Into Art",
  description: "AI-powered platform that transforms any topic into a deeply researched, visually rich, hand-illustrated infographic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable}`}>
      <body className="antialiased font-sans selection:bg-pastel-gold selection:text-primary">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
