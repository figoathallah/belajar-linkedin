import { ReactNode } from "react";
import "./globals.css";
import { Barlow } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen ${barlow.variable}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
