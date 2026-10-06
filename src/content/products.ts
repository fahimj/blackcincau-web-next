import type { StaticImageData } from "next/image";
import driedLeaves from "@/assets/img/product-dried-leaves.png";
import choppedLeaves from "@/assets/img/product-chopped-leaves.png";
import driedStems from "@/assets/img/product-dried-stems.png";

export const productSlugs = [
  "dried-leaves",
  "chopped-leaves",
  "dried-stems",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export interface Product {
  slug: ProductSlug;
  image: StaticImageData;
  // Published specifications. Keep in step with the table in ../CLAUDE.md.
  moisture: string;
  leavesPercent: number;
  stemsPercent: number;
}

export const products: Record<ProductSlug, Product> = {
  "dried-leaves": {
    slug: "dried-leaves",
    image: driedLeaves,
    moisture: "< 10%",
    leavesPercent: 95,
    stemsPercent: 5,
  },
  "chopped-leaves": {
    slug: "chopped-leaves",
    image: choppedLeaves,
    moisture: "< 10%",
    leavesPercent: 50,
    stemsPercent: 50,
  },
  "dried-stems": {
    slug: "dried-stems",
    image: driedStems,
    moisture: "< 10%",
    leavesPercent: 5,
    stemsPercent: 95,
  },
};

export const isProductSlug = (value: string): value is ProductSlug =>
  (productSlugs as readonly string[]).includes(value);
