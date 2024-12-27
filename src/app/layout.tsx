import type { Metadata } from "next";
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'  // keep this import as is


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavan Kulkarni Bedikhanna",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <Body>{children}</Body>
        <Footer />
      </body>
    </html>
  );
}