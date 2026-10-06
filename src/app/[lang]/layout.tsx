import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { company } from "@/content/company";
import { enabledLocales, isEnabledLocale, localeDir } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { organizationJsonLd, siteUrl } from "@/lib/seo";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return enabledLocales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Paste the code from Google Search Console into NEXT_PUBLIC_GSC_VERIFICATION.
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={localeDir[lang]}
      className={`${roboto.variable} ${poppins.variable}`}
    >
      <body>
        <Header
          lang={lang}
          locales={enabledLocales}
          brand={company.brand}
          labels={{ ...dict.nav, quote: dict.cta.quote }}
        />
        <main>{children}</main>
        <Footer lang={lang} dict={dict} />
        <WhatsAppChat
          number={company.whatsappNumber}
          message={company.whatsappGreeting}
          labels={dict.chat}
        />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
