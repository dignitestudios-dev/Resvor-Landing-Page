import type { Metadata } from "next";
import "./compiled.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resvor.com"),
  title: "Resvor | The Operating System for Premier Lounges & Nightlife",
  description:
    "Transform how your lounge manages guest profiling, VIP table reservations, dual-interface event scheduling, and automated SMS/email marketing. Built for high-volume nightlife and hospitality.",
  keywords: [
    "lounge management software",
    "nightlife CRM",
    "VIP table booking",
    "lounge guest book",
    "nightclub event management",
    "hospitality software",
  ],
  authors: [{ name: "Resvor Technologies" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Resvor | Plan Better. Party Smarter.",
    description: "Where every occasion finds its lounge. Comprehensive Guest Book, Dual Event Management, and VIP Table Reservations.",
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Resvor Emblem",
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
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      </head>
      <body className="min-h-full bg-[#050816] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
