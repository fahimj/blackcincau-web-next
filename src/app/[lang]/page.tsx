import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import hero1 from "@/assets/img/hero-1.jpg";
import hero2 from "@/assets/img/hero-2.jpg";
import hero3 from "@/assets/img/hero-3.jpg";
import iconCommunity from "@/assets/img/icon-community.png";
import iconQuality from "@/assets/img/icon-quality.png";
import iconWorld from "@/assets/img/icon-world.png";
import { ContactList } from "@/components/ContactList";
import { CtaBanner } from "@/components/CtaBanner";
import { FactsTable } from "@/components/FactsTable";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ProductCard } from "@/components/ProductCard";
import { company, exportDestinations } from "@/content/company";
import { getFacts } from "@/content/facts";
import { productSlugs, products } from "@/content/products";
import { isEnabledLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";

const featureIcons = [iconQuality, iconWorld, iconCommunity];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) return {};
  const { home } = getDictionary(lang);
  return pageMetadata({
    lang,
    path: "",
    title: home.metaTitle,
    description: home.metaDescription,
  });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { home } = dict;
  const base = `/${lang}`;

  return (
    <>
      <section className="hero">
        <HeroSlideshow images={[hero1, hero2, hero3]} />
        <div className="container hero-content">
          <h1>{home.heroTitle}</h1>
          <p>{home.heroSubtitle}</p>
          <div className="btn-row">
            <Link href={`${base}/contact`} className="btn btn-primary">
              {dict.cta.quote}
            </Link>
            <Link href={`${base}/contact?type=sample`} className="btn btn-light">
              {dict.cta.sample}
            </Link>
          </div>
        </div>
      </section>

      <section className="stats" aria-label={home.featuresTitle}>
        <dl className="container stats-grid">
          {home.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{home.aboutEyebrow}</p>
            <h2 className="section-title">{home.aboutTitle}</h2>
            {home.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="muted">{dict.common.alsoKnownAs}</p>
            <Link href={`${base}/about`} className="btn btn-outline">
              {dict.cta.readMore}
            </Link>
          </div>
          <Image
            className="split-image"
            src={hero3}
            alt={dict.about.gallery[2]}
            sizes="(max-width: 1024px) 100vw, 540px"
            placeholder="blur"
          />
        </div>
      </section>

      <section className="section section-alt" id="products">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">{home.productsTitle}</h2>
            <p>{home.productsIntro}</p>
          </header>
          <div className="grid-3">
            {productSlugs.map((slug) => (
              <ProductCard
                key={slug}
                product={products[slug]}
                href={`${base}/products/${slug}`}
                name={dict.products.items[slug].name}
                summary={dict.products.items[slug].summary}
                action={dict.cta.viewSpecs}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">{home.featuresTitle}</h2>
          </header>
          <div className="grid-3">
            {home.features.map((feature, index) => (
              <div className="feature" key={feature.title}>
                <Image src={featureIcons[index]} alt="" width={60} height={60} />
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">{home.processTitle}</h2>
            <p>{home.processIntro}</p>
          </header>
          <div className="process-photos">
            <Image
              src={hero1}
              alt={dict.about.gallery[0]}
              sizes="(max-width: 767px) 100vw, 560px"
              placeholder="blur"
            />
            <Image
              src={hero2}
              alt={dict.about.gallery[1]}
              sizes="(max-width: 767px) 100vw, 560px"
              placeholder="blur"
            />
          </div>
          <ol className="steps">
            {home.process.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top">
          <div>
            <h2 className="section-title">{home.termsTitle}</h2>
            <p>{home.termsIntro}</p>
            <FactsTable
              facts={getFacts(lang)}
              labels={dict.facts.labels}
              price={{ label: dict.facts.price, value: dict.common.onRequest }}
            />
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
            <Link href={`${base}/faq`} className="btn btn-outline">
              {dict.cta.allFaq}
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{dict.cta.contactUs}</p>
            <h2 className="section-title">{home.contactTitle}</h2>
            <ContactList />
            <div className="btn-row">
              <Link href={`${base}/contact`} className="btn btn-primary">
                {dict.cta.quote}
              </Link>
              <a href={company.whatsappLink} className="btn btn-outline">
                {dict.cta.whatsapp}
              </a>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              loading="lazy"
              src={company.mapEmbedUrl}
              title={dict.contact.mapTitle}
            />
          </div>
        </div>
      </section>
    </>
  );
}
