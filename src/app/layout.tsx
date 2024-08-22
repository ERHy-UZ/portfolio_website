import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Antonio",
  description: "Portafolio de José Antonio Trejo Moreno",
  keywords: "Portafolio",
  icons: '/Logo_Gimikode.svg',
  creator: 'José Antonio Trejo Moreno',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scrollbar scrollbar-thumb-cybergreen-200 scrollbar-track-cyberblack overflow-y-auto' lang="en">
      <body className={`${inter.className} bg-cyberblack`}>{children}</body>
    </html>
  );
}
