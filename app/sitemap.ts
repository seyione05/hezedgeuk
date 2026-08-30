import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/contact"];
  const updatedAt = new Date();

  return [
    ...pages.map((path) => ({ url: new URL(path, siteUrl).href, lastModified: updatedAt, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...services.map((service) => ({ url: new URL(`/services/${service.slug}`, siteUrl).href, lastModified: updatedAt, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
