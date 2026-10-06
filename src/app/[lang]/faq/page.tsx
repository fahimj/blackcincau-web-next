import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getFacts } from "@/content/facts";
import { isEnabledLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) return {};
  const { faq } = getDictionary(lang);
  return pageMetadata({
    lang,
    path: "/faq",
    title: faq.metaTitle,
    description: faq.metaDescription,
  });
}

export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const facts = getFacts(lang);
  const items = dict.faq.items.map((item) => ({ q: item.q, a: item.a(facts) }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="section">
      <div className="container narrow">
        <h1 className="page-title">{dict.faq.title}</h1>
        <p className="lead">{dict.faq.lead}</p>
        <div className="faq">
          {items.map((item) => (
            <section key={item.q}>
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </section>
          ))}
        </div>
        <div className="btn-row">
          <Link href={`/${lang}/contact`} className="btn btn-primary">
            {dict.cta.quote}
          </Link>
          <Link href={`/${lang}/contact?type=sample`} className="btn btn-outline">
            {dict.cta.sample}
          </Link>
        </div>
      </div>
      <JsonLd data={faqJsonLd} />
    </section>
  );
}
