import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pearlabs.dev"),
  title: { default: "David Pereira | AI, Robotics & Software Development", template: "%s | David Pereira" },
  description: "David Pereira de Magalhães, Computer Science master\'s student in Luxembourg. Projects in AI, robotics, embedded systems, and web and mobile development.",
  openGraph: { title: "David Pereira | AI, Robotics & Software Development", description: "Explore my projects in AI, robotics, embedded systems, and web and mobile development.", url: "https://pearlabs.dev", siteName: "David Pereira", type: "website" },
  keywords: ["Next.js", "React", "Portfolio", "Computer Science", "Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
