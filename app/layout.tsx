import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: '#008630',
};

export const metadata: Metadata = {
  title: "AZ Masérská škola",
  description: "Masérské kurzy s akreditací a autorizací",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-icon.png' },
      { url: '/favicon/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicon/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicon/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicon/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicon/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
      { url: '/favicon/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon/android-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon/android-icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/android-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/ms-icon-70x70.png', sizes: '70x70', type: 'image/png' },
      { url: '/favicon/ms-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon/ms-icon-150x150.png', sizes: '150x150', type: 'image/png' },
      { url: '/favicon/ms-icon-310x310.png', sizes: '310x310', type: 'image/png' },
    ],
  },
  manifest: '/favicon/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AZ Masérská škola',
  },
  applicationName: 'AZ Masérská škola',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="apple-touch-icon-precomposed" href="/favicon/apple-icon-precomposed.png" />
        <meta name="msapplication-TileColor" content="#008630" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#008630" />
      </head>
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
