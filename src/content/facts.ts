import type { Locale } from "@/i18n/config";

// ---------------------------------------------------------------------------
// COMMERCIAL FACTS
//
// Confirmed by the exporter (CV Ambar Sari) on the verification sheet of
// 6 October 2026. Change a value here, in all three languages, and it updates
// the commercial terms tables, the product pages and the FAQ answers.
// Anything not yet confirmed is marked TODO; `npm run todos` lists those.
// ---------------------------------------------------------------------------

export const factKeys = [
  "moq",
  "packaging",
  "containerLoad",
  "capacity",
  "leadTime",
  "incoterms",
  "port",
  "payment",
  "hsCode",
  "shelfLife",
  "samplePolicy",
] as const;

export type FactKey = (typeof factKeys)[number];
export type Facts = Record<FactKey, string>;

const facts: Record<FactKey, Record<Locale, string>> = {
  moq: {
    en: "5 metric tons",
    ms: "5 tan metrik",
    ar: "5 أطنان مترية",
  },
  packaging: {
    en: "Pressed bales in woven polypropylene bags, 50 kg net each",
    ms: "Bandela mampat dalam guni polipropilena tenun, 50 kg bersih setiap satu",
    ar: "بالات مضغوطة في أكياس من البولي بروبيلين المنسوج، بوزن صافٍ 50 كجم لكل بالة",
  },
  containerLoad: {
    en: "About 8 metric tons per 20 ft container; about 18 metric tons per 40 ft HC container",
    ms: "Kira-kira 8 tan metrik bagi kontena 20 kaki; kira-kira 18 tan metrik bagi kontena 40 kaki HC",
    ar: "نحو 8 أطنان مترية للحاوية 20 قدمًا؛ نحو 18 طنًا متريًا للحاوية 40 قدمًا HC",
  },
  capacity: {
    en: "50 metric tons per month",
    ms: "50 tan metrik sebulan",
    ar: "50 طنًا متريًا شهريًا",
  },
  leadTime: {
    en: "14 to 21 days after order confirmation",
    ms: "14 hingga 21 hari selepas pengesahan pesanan",
    ar: "من 14 إلى 21 يومًا بعد تأكيد الطلب",
  },
  incoterms: {
    en: "FOB or CFR",
    ms: "FOB atau CFR",
    ar: "FOB أو CFR",
  },
  port: {
    en: "Tanjung Emas (Semarang) or Tanjung Perak (Surabaya), Indonesia",
    ms: "Tanjung Emas (Semarang) atau Tanjung Perak (Surabaya), Indonesia",
    ar: "تانجونغ إيماس (سيمارانغ) أو تانجونغ بيراك (سورابايا)، إندونيسيا",
  },
  payment: {
    en: "50% down payment, and the remaining 50% when the container is loaded (stuffing)",
    ms: "Bayaran pendahuluan 50%, dan baki 50% semasa kontena dimuatkan (stuffing)",
    ar: "50% دفعة مقدمة، والـ50% المتبقية عند تحميل الحاوية (stuffing)",
  },
  hsCode: {
    en: "0712.90.90",
    ms: "0712.90.90",
    ar: "0712.90.90",
  },
  shelfLife: {
    en: "24 months in a cool, dry place away from direct sunlight",
    ms: "24 bulan di tempat sejuk dan kering, jauh daripada cahaya matahari terus",
    ar: "24 شهرًا في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة",
  },
  // TODO(owner): the exporter gave the quantities and who pays the courier,
  // but did not say whether the sample itself is free or charged.
  samplePolicy: {
    en: "200 g for one product, 150 g each for two products, or 100 g each for all three; the buyer pays the courier cost",
    ms: "200 g untuk satu produk, 150 g setiap satu untuk dua produk, atau 100 g setiap satu untuk ketiga-tiga produk; pembeli menanggung kos kurier",
    ar: "200 غرام لمنتج واحد، أو 150 غرامًا لكل منتج عند طلب منتجين، أو 100 غرام لكل منتج عند طلب المنتجات الثلاثة؛ ويتحمل المشتري تكلفة الشحن السريع",
  },
};

export function getFacts(lang: Locale): Facts {
  return Object.fromEntries(
    factKeys.map((key) => [key, facts[key][lang]]),
  ) as Facts;
}
