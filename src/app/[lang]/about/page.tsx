import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import hero1 from "@/assets/img/hero-1.jpg";
import hero2 from "@/assets/img/hero-2.jpg";
import hero3 from "@/assets/img/hero-3.jpg";
import { CtaBanner } from "@/components/CtaBanner";
import { company, exportDestinations } from "@/content/company";
import { productSlugs } from "@/content/products";
import { isEnabledLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";

const gallery = [hero1, hero2, hero3];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) return {};
  const { about } = getDictionary(lang);
  return pageMetadata({
    lang,
    path: "/about",
    title: about.metaTitle,
    description: about.metaDescription,
  });
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { about, home } = dict;
  const base = `/${lang}`;

  return (
    <>
      <section className="section">
        <div className="container narrow">
          <h1 className="page-title">{about.title}</h1>
          <p className="lead">{about.lead}</p>

          <h2 className="sub-title">{about.storyTitle}</h2>
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2 className="sub-title">{about.farmersTitle}</h2>
          <p>{about.farmers}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">{about.facilityTitle}</h2>
          </header>
          <div className="grid-3 gallery">
            {gallery.map((image, index) => (
              <figure key={image.src}>
                <Image
                  src={image}
                  alt={about.gallery[index]}
                  sizes="(max-width: 767px) 100vw, 380px"
                  placeholder="blur"
                />
                <figcaption>{about.gallery[index]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top">
          <div>
            <h2 className="section-title">{about.detailsTitle}</h2>
            <table className="data-table">
              <tbody>
                <tr>
                  <th scope="row">{about.details.legalName}</th>
                  <td>{company.legalName}</td>
                </tr>
                <tr>
                  <th scope="row">{about.details.brand}</th>
                  <td>{company.brand}</td>
                </tr>
                <tr>
                  <th scope="row">{about.details.founded}</th>
                  <td>{company.founded}</td>
                </tr>
                <tr>
                  <th scope="row">{about.details.business}</th>
                  <td>{about.details.businessValue}</td>
                </tr>
                <tr>
                  <th scope="row">{about.details.address}</th>
                  <td>{company.addressLine}</td>
                </tr>
                <tr>
                  <th scope="row">{about.details.products}</th>
                  <td>
                    <ul className="link-list">
                      {productSlugs.map((slug) => (
                        <li key={slug}>
                          <Link href={`${base}/products/${slug}`}>
                            {dict.products.items[slug].name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="section-title">{home.proofTitle}</h2>
            <h3 className="sub-title">{home.documentsTitle}</h3>
            <ul className="check-list">
              {home.documents.map((document) => (
                <li key={document}>{document}</li>
              ))}
            </ul>
            <h3 className="sub-title">{home.destinationsTitle}</h3>
            <p>{home.destinationsNote}</p>
            <ul className="tag-list">
              {exportDestinations[lang].map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
            <p>{home.destinationsInvite}</p>
          </div>
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />
    </>
  );
}
