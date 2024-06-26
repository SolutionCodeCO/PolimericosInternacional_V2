import type { Metadata, ResolvingMetadata } from "next";
import { outfit } from "@/config/fonts";
import "./globals.css";
import "../../public/js/main"
import { getCourseBySlug } from "@/actions";


export const metadata: Metadata ={
  title: {
    template: '%s | Store',
    default: 'Polimerico Internacional | Store'
  },
  description: "Polimericos Dial de Colombia es una compañia de servicios internacionales donde encontraras infinidades de cursos sobre tecnicas de pintado y mucho mas..."
}

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
