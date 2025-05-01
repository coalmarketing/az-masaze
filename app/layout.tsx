import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AZ Masérská škola",
  description: "Masérské kurzy s akreditací a autorizací",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
