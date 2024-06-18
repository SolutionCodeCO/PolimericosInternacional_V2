import type { Metadata } from "next";
import { outfit } from "@/config/fonts";
import "./globals.css";
import "../../public/js/main"


export const metadata: Metadata = {
  title: "Polimericos Internacional",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
