import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul-Eliel Kouamé | Solutions Digitales pour PME en Côte d'Ivoire",
  description:
    "Développeur et consultant digital basé à Abidjan. Je crée des boutiques e-commerce, des bases de données performantes et des bots WhatsApp pour les PME ivoiriennes. Diplômé en Computer Science (IUGB).",
  keywords: [
    "développeur web",
    "Abidjan",
    "Côte d'Ivoire",
    "e-commerce",
    "Next.js",
    "Supabase",
    "WhatsApp bot",
    "PME",
    "digitalisation",
    "consultant digital",
  ],
  authors: [{ name: "Paul-Eliel Kouamé" }],
  openGraph: {
    title: "Paul-Eliel Kouamé | Solutions Digitales pour PME",
    description:
      "Transformer les entreprises ivoiriennes par l'innovation digitale. E-commerce, bases de données, automatisation WhatsApp.",
    type: "website",
    locale: "fr_CI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full overflow-x-hidden`}>
      <body className="min-h-full flex flex-col noise-overlay overflow-x-hidden max-w-full box-border">{children}</body>
    </html>
  );
}
