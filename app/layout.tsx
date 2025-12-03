import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/style.css";
import { MyContextProvider } from "@/constants/context/MyContext";
import { contractData } from "@/constants/utils/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buildclaw Contract Invoice",
  description: "Invoice for Buildclaw Contract Payment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider data={contractData}>{children}</MyContextProvider>
      </body>
    </html>
  );
}
