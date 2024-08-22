import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EventProvider } from "@/context/EventContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Antonio",
  description: "Portafolio de José Antonio Trejo Moreno",
  keywords: "Portafolio",
  icons: '/Logo_Gimikode.svg',
  creator: 'José Antonio Trejo Moreno',
  metadataBase: new URL('https://portfolio-anthos-trejo-gimikode.netlify.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/es-MX'
    },
  },
  openGraph: {
    type: "website",
    title: "José Antonio",
    description: "Portafolio de José Antonio Trejo Moreno",
    siteName: "Mi Portafolio",
    images: [{
      url: "/Photo2.jpg",
    }],
  }
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='dark scrollbar scrollbar-thumb-cybergreen-200 scrollbar-track-cyberblack overflow-y-auto' lang="en">
      <EventProvider>
        <body className={`${inter.className} bg-cyberblack`}>{children}</body>
      </EventProvider>
    </html>
  );
}
