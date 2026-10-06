import type { Metadata } from "next";
import { company } from "@/content/company";
import { defaultLocale, enabledLocales, type Locale } from "@/i18n/config";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blackcincau.my.id"
).replace(/\/$/, "");

export const localePath = (lang: Locale, path = "") => `/${lang}${path}`;

export const absoluteUrl = (path: string) => `${siteUrl}${path}`;

interface PageMeta {
  lang: Locale;
  // Path after the language prefix, e.g. "" for home or "/about".
  path: string;
  title: string;
  description: string;
}

export function pageMetadata({ lang, path, title, description }: PageMeta): Metadata {
  const url = localePath(lang, path);
  const languages: Record<string, string> = Object.fromEntries(
    enabledLocales.map((locale) => [locale, localePath(locale, path)]),
  );
  languages["x-default"] = localePath(defaultLocale, path);

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: company.brand,
      locale: lang,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.brand,
  legalName: company.legalName,
  url: siteUrl,
  logo: absoluteUrl("/logo.png"),
  foundingDate: String(company.founded),
  email: company.email,
  telephone: company.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: company.phoneE164,
    email: company.email,
    availableLanguage: ["English", "Indonesian"],
  },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
