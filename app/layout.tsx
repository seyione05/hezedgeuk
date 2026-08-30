import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "HezEdge Consulting | Practical Technology for Business Growth", template: "%s | HezEdge Consulting" },
  description: "Web and app development, SEO, AI automation, cloud infrastructure, systems integration and technology consulting for ambitious businesses.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
