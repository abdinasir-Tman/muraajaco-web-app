import Header from "@/app/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  title: string;
  description: string;
  openGraph: {
    type: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
    images: [{}];
  };
}

export const metadata: Props = {
  title: "Muraajaco",
  description: "Caawiyaha f4",
  openGraph: {
    type: "website",
    url: "https://muraajaco.com",
    title: "Muraajaco",
    description: "Caawiyaha f4",
    siteName: "Muraajaco",
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
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
