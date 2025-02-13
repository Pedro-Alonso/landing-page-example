import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CSSProperties } from "react";
import "@/theme/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exemplo de Landing Page",
  description: "Exemplo de Landing Page com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles: CSSProperties = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={styles}
      >
        {children}
      </body>
    </html>
  );
}
