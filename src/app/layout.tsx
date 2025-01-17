"use client"

import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import { usePathname } from "next/navigation";

//components
import Header from "@/components/Navbar/Header"
import Footer from "@/components/Footer/Footer"

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const noLayoutRoutes = ["/donate"];

  if (noLayoutRoutes.includes(pathname)) {
    return (
      <html lang="en">
        <body className={`${nunitoSans.variable} antialiased`}>
          {children}
        </body>
      </html>
    );
  }
  else {
    return (
      <html lang="en">
        <body className={`${nunitoSans.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
}
