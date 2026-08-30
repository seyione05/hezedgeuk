import type { Metadata } from "next";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://hezedge.com");
export const siteName = "HezEdge Consulting";
export const defaultDescription = "Web and app development, SEO, AI automation, cloud infrastructure, systems integration and technology consulting for ambitious businesses.";

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_GB", url: path, siteName, title, description },
    twitter: { card: "summary", title, description },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl.href,
  logo: new URL("/hezedge-logo.svg", siteUrl).href,
  email: "info@hezedge.com",
};
