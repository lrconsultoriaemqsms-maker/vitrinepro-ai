import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitrinePro AI — Seu negócio em outro nível",
  description: "Crie sua vitrine digital, apresente seus produtos e serviços e venda com inteligência artificial.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
