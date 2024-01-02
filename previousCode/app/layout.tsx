import Header from "@/app/components/global/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import DownloadBtn from "./components/DownloadBtn";

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
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <DownloadBtn />
      </body>
    </html>
  );
}
