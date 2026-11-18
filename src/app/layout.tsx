import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Surprise for Sania 🌸",
  description: "A special digital gift celebrating one month of knowing each other.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFF7FC] text-gray-800 antialiased selection:bg-[#F06292]/20 selection:text-[#6D28D9]">
        {children}
      </body>
    </html>
  );
}
