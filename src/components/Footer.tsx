import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";
import { company } from "@/content/company";
import { productSlugs } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { ContactList } from "./ContactList";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const base = `/${lang}`;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image
            className="footer-logo"
            src={logo}
            alt={company.brand}
            width={96}
            height={96}
          />
          <p>{dict.footer.tagline}</p>
        </div>
        <div>
          <h2 className="footer-title">{dict.footer.products}</h2>
          <ul className="link-list">
            {productSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`${base}/products/${slug}`}>
                  {dict.products.items[slug].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{dict.footer.company}</h2>
          <ul className="link-list">
            <li><Link href={`${base}/about`}>{dict.nav.about}</Link></li>
            <li><Link href={`${base}/faq`}>{dict.nav.faq}</Link></li>
            <li><Link href={`${base}/contact`}>{dict.cta.quote}</Link></li>
            <li><Link href={`${base}/contact?type=sample`}>{dict.cta.sample}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">{dict.footer.contact}</h2>
          <ContactList />
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.legalName} · {company.brand}.{" "}
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
