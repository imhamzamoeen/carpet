import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: {
    default: "Fresh Fiber Carpet Cleaning Manchester | Professional Deep Clean",
    template: "%s | Fresh Fiber Carpet Cleaning"
  },
  description: "FreshFiber offers expert carpet cleaning in Manchester. Professional deep clean for carpets, rugs & upholstery. Same-day service, eco-friendly, 100% guarantee. Serving 100 miles.",
  keywords: "Fresh Fiber Carpet cleaning Manchester, carpet cleaning Manchester, rug cleaning, upholstery cleaning, professional carpet cleaners Manchester, eco-friendly carpet cleaning, same day carpet cleaning",
  authors: [{ name: "Fresh Fiber Carpet Cleaning Team" }],
  creator: "Fresh Fiber Carpet Cleaning",
  publisher: "Fresh Fiber Carpet Cleaning",
  metadataBase: new URL('https://freshfibercleaning.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fresh Fiber Carpet Cleaning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
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
