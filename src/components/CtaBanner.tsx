import Image from "next/image";
import Link from "next/link";
import ctaBg from "@/assets/img/cta-bg.jpg";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function CtaBanner({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <figure className="cta-banner">
      <Image src={ctaBg} alt="" fill sizes="100vw" placeholder="blur" />
      <div className="container cta-content">
        <h2>{dict.home.ctaTitle}</h2>
        <p>{dict.home.ctaBody}</p>
        <div className="btn-row">
          <Link href={`/${lang}/contact`} className="btn btn-primary">
            {dict.cta.quote}
          </Link>
          <Link href={`/${lang}/contact?type=sample`} className="btn btn-light">
            {dict.cta.sample}
          </Link>
        </div>
      </div>
      <figcaption>{dict.home.ctaCaption}</figcaption>
    </figure>
  );
}
