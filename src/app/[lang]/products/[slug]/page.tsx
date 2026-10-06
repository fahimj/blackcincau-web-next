import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FactsTable } from "@/components/FactsTable";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { company } from "@/content/company";
import { getFacts } from "@/content/facts";
import { isProductSlug, productSlugs, products } from "@/content/products";
import { enabledLocales, isEnabledLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, siteUrl } from "@/lib/seo";

type Props = PageProps<"/[lang]/products/[slug]">;

export function generateStaticParams() {
  return enabledLocales.flatMap((lang) =>
    productSlugs.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isEnabledLocale(lang) || !isProductSlug(slug)) return {};
  const copy = getDictionary(lang).products.items[slug];
  return pageMetadata({
    lang,
    path: `/products/${slug}`,
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function ProductPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isEnabledLocale(lang) || !isProductSlug(slug)) notFound();
  const dict = getDictionary(lang);
  const product = products[slug];
  const copy = dict.products.items[slug];
  const { spec } = dict.products;
  const base = `/${lang}`;
  const path = `${base}/products/${slug}`;

  const rows: [string, string][] = [
    [spec.product, copy.name],
    [spec.botanical, `${company.botanicalName} (syn. ${company.botanicalSynonym})`],
    [spec.otherNames, spec.otherNamesValue],
    [spec.moisture, product.moisture],
    [spec.leaves, `${product.leavesPercent}%`],
    [spec.stems, `${product.stemsPercent}%`],
    [spec.origin, spec.originValue],
    [spec.use, spec.useValue],
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: copy.name,
    description: copy.metaDescription,
    image: absoluteUrl(product.image.src),
    url: absoluteUrl(path),
    category: "Dried black grass jelly raw material",
    brand: { "@type": "Brand", name: company.brand },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    countryOfOrigin: { "@type": "Country", name: "Indonesia" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Moisture content", value: product.moisture },
      { "@type": "PropertyValue", name: "Dried leaves", value: `${product.leavesPercent}%` },
      { "@type": "PropertyValue", name: "Dried stems", value: `${product.stemsPercent}%` },
      { "@type": "PropertyValue", name: "Botanical name", value: company.botanicalName },
    ],
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label={dict.nav.breadcrumb}>
            <ol>
              <li><Link href={base}>{dict.nav.home}</Link></li>
              <li><Link href={`${base}#products`}>{dict.nav.products}</Link></li>
              <li aria-current="page">{copy.shortName}</li>
            </ol>
          </nav>
          <div className="split">
            <div>
              <p className="eyebrow">{dict.products.eyebrow}</p>
              <h1 className="page-title">{copy.name}</h1>
              <p>{copy.intro}</p>
              <p>{copy.selection}</p>
              <p className="muted">{dict.common.alsoKnownAs}</p>
              <div className="btn-row">
                <Link href={`${base}/contact?product=${slug}`} className="btn btn-primary">
                  {dict.cta.quote}
                </Link>
                <Link
                  href={`${base}/contact?type=sample&product=${slug}`}
                  className="btn btn-outline"
                >
                  {dict.cta.sample}
                </Link>
              </div>
            </div>
            <Image
              className="product-photo"
              src={product.image}
              alt={copy.name}
              sizes="(max-width: 1024px) 100vw, 540px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-top">
          <div>
            <h2 className="section-title">{dict.products.specsTitle}</h2>
            <table className="data-table">
              <tbody>
                {rows.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="section-title">{dict.products.termsTitle}</h2>
            <FactsTable
              facts={getFacts(lang)}
              labels={dict.facts.labels}
              price={{ label: dict.facts.price, value: dict.common.onRequest }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">{dict.products.otherTitle}</h2>
          </header>
          <div className="grid-3 grid-center">
            {productSlugs
              .filter((other) => other !== slug)
              .map((other) => (
                <ProductCard
                  key={other}
                  product={products[other]}
                  href={`${base}/products/${other}`}
                  name={dict.products.items[other].name}
                  summary={dict.products.items[other].summary}
                  action={dict.cta.viewSpecs}
                />
              ))}
          </div>
        </div>
      </section>

      <JsonLd data={productJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.nav.home, path: base },
          { name: copy.name, path },
        ])}
      />
    </>
  );
}
