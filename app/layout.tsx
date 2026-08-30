import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { defaultDescription, organizationSchema, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "HezEdge Consulting | Practical Technology for Business Growth", template: "%s | HezEdge Consulting" },
  description: defaultDescription,
  applicationName: siteName,
  keywords: ["web development", "SEO services", "AI automation", "cloud infrastructure", "technology consulting", "systems integration"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_GB", url: "/", siteName, title: "HezEdge Consulting | Practical Technology for Business Growth", description: defaultDescription },
  twitter: { card: "summary", title: "HezEdge Consulting | Practical Technology for Business Growth", description: defaultDescription },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased"><StructuredData data={organizationSchema}/>{children}</body>
    </html>
  );
}
