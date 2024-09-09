import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "LC University",
  description: "AIESEC In Tunisia Manar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[65px] bg-university-gray">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
