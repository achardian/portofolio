import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Achardian",
  description: "Muchammad Ardiansyah Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gradient-to-tr from-[#0F1035] to-[#03001c] text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
