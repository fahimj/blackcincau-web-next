import type { MetadataRoute } from "next";
import { productSlugs } from "@/content/products";
import { enabledLocales } from "@/i18n/config";
import { absoluteUrl, localePath } from "@/lib/seo";

const paths = [
  "",
  ...productSlugs.map((slug) => `/products/${slug}`),
  "/about",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    enabledLocales.map((lang) => ({
      url: absoluteUrl(localePath(lang, path)),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          enabledLocales.map((locale) => [
            locale,
            absoluteUrl(localePath(locale, path)),
          ]),
        ),
      },
    })),
  );
}
