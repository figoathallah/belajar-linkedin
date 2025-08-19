"use client";

import React, { ReactNode, useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`flex flex-col min-h-screen ${barlow.variable}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
