import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
  href: string;
  name: string;
  summary: string;
  action: string;
}

export function ProductCard({ product, href, name, summary, action }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link href={href} className="product-card-image" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.image}
          alt=""
          sizes="(max-width: 767px) 90vw, 360px"
        />
      </Link>
      <h3>
        <Link href={href}>{name}</Link>
      </h3>
      <p>{summary}</p>
      <Link href={href} className="btn btn-outline btn-block">
        {action}
      </Link>
    </article>
  );
}
