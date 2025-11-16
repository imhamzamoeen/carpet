import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Method Clean - Professional Carpet Cleaning in Manchester",
  description: "Expert carpet, rug, upholstery, and leather cleaning services in Manchester and surrounding areas. Get an instant quote online.",
  keywords: "carpet cleaning Manchester, rug cleaning, upholstery cleaning, leather cleaning, mattress cleaning, car valeting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
