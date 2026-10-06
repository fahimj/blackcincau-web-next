import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// not-found receives no params, so it is shown in the default language.
export default function NotFound() {
  const dict = getDictionary(defaultLocale);
  return (
    <section className="section">
      <div className="container narrow center">
        <h1 className="page-title">{dict.notFound.title}</h1>
        <p>{dict.notFound.body}</p>
        <Link href={`/${defaultLocale}`} className="btn btn-primary">
          {dict.notFound.home}
        </Link>
      </div>
    </section>
  );
}
