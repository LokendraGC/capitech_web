import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DictionaryProvider } from "@/context/dictionaryContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capitech Dictionary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DictionaryProvider>
          <Header />
          {children}
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
