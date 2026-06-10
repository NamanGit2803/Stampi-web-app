import { Inter } from "next/font/google"
import { Comfortaa } from "next/font/google";
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Stampi - Customer Loyalty Platform",
  description: "Manage customer loyalty, rewards, and payments with ease",

  icons: {
    icon: [
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo/favicon-32x32.png"],   // fallback icon
  },

  // manifest: "/site.webmanifest",
}

export const viewport = {
  themeColor: "#1F2937",
  colorScheme: "light",
  userScalable: true,
}

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${comfortaa.variable} bg-background text-foreground`}>
        <NextTopLoader
          color="#6836b6"
          height={3}
          showSpinner={false}
        />
        <Navbar/>
        {children}
        <Footer/>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
