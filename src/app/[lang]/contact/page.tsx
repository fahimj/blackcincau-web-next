import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactList } from "@/components/ContactList";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/content/company";
import { productSlugs } from "@/content/products";
import { defaultLocale, isEnabledLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) return {};
  const { contact } = getDictionary(lang);
  return pageMetadata({
    lang,
    path: "/contact",
    title: contact.metaTitle,
    description: contact.metaDescription,
  });
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const english = getDictionary(defaultLocale);

  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">{dict.contact.title}</h1>
        <p className="lead">{dict.contact.lead}</p>
        <div className="split split-top">
          <Suspense>
            <InquiryForm
              whatsappNumber={company.whatsappNumber}
              email={company.email}
              labels={dict.form}
              products={productSlugs.map((slug) => ({
                slug,
                label: dict.products.items[slug].name,
                messageName: english.products.items[slug].name,
              }))}
            />
          </Suspense>
          <div>
            <h2 className="sub-title">{dict.contact.directTitle}</h2>
            <ContactList />
            <div className="map-embed">
              <iframe
                loading="lazy"
                src={company.mapEmbedUrl}
                title={dict.contact.mapTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
