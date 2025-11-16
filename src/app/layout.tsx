import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
