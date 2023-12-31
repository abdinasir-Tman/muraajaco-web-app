import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Culuumta",
  description: "Caawiyaha f4",
  openGraph: {
    type: "website",
    url: "https://culuumta.com",
    title: "Culuumta",
    description: "Caawiyaha f4",
    siteName: "Culuumta",
    images: [
      {
        url: "/assets/meta/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
