import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "DAMRI - Perusahaan Umum DAMRI",
  description: "Perusahaan Umum DAMRI - Layanan Transportasi Terpercaya",
  icons: {
    icon: "/images/damri-icon.png",
    shortcut: "/images/damri-icon.png",
    apple: "/images/damri-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
