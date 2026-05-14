import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBIT Studio — Sites Web Premium, Agents IA & Systèmes Digitaux",
  description:
    "ORBIT Studio conçoit des sites web premium, des agents IA sur mesure et des systèmes digitaux complets pour booster votre présence en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
