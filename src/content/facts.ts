import type { Locale } from "@/i18n/config";

// ---------------------------------------------------------------------------
// COMMERCIAL FACTS — EVERY VALUE IN THIS FILE IS AN INVENTED PLACEHOLDER.
//
// None of these figures has been confirmed by the owner. They exist so the
// prototype shows a realistic layout. Replace each line marked TODO with the
// real value (all three languages), then delete its TODO comment.
// `npm run todos` lists the ones still open.
//
// These values appear in the commercial terms table, the product pages and
// the FAQ answers, so this is the only place they need to change.
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
  // TODO(owner): real minimum order quantity
  moq: {
    en: "5 metric tons",
    ms: "5 tan metrik",
    ar: "5 أطنان مترية",
  },
  // TODO(owner): real bag type and net weight per bale
  packaging: {
    en: "Pressed bales in woven polypropylene bags, 50 kg net each",
    ms: "Bandela mampat dalam guni polipropilena tenun, 50 kg bersih setiap satu",
    ar: "بالات مضغوطة في أكياس من البولي بروبيلين المنسوج، بوزن صافٍ 50 كجم لكل بالة",
  },
  // TODO(owner): real loading quantity per container size
  containerLoad: {
    en: "About 8 metric tons per 20 ft container; about 18 metric tons per 40 ft HC container",
    ms: "Kira-kira 8 tan metrik bagi kontena 20 kaki; kira-kira 18 tan metrik bagi kontena 40 kaki HC",
    ar: "نحو 8 أطنان مترية للحاوية 20 قدمًا؛ نحو 18 طنًا متريًا للحاوية 40 قدمًا HC",
  },
  // TODO(owner): real monthly supply capacity
  capacity: {
    en: "100 metric tons per month",
    ms: "100 tan metrik sebulan",
    ar: "100 طن متري شهريًا",
  },
  // TODO(owner): real lead time
  leadTime: {
    en: "14 to 21 days after order confirmation",
    ms: "14 hingga 21 hari selepas pengesahan pesanan",
    ar: "من 14 إلى 21 يومًا بعد تأكيد الطلب",
  },
  // TODO(owner): Incoterms actually offered
  incoterms: {
    en: "FOB or CIF",
    ms: "FOB atau CIF",
    ar: "FOB أو CIF",
  },
  // TODO(owner): real loading port
  port: {
    en: "Tanjung Emas, Semarang, Indonesia",
    ms: "Tanjung Emas, Semarang, Indonesia",
    ar: "تانجونغ إيماس، سيمارانغ، إندونيسيا",
  },
  // TODO(owner): real payment terms
  payment: {
    en: "T/T, 30% deposit and 70% against copy of bill of lading; or L/C at sight",
    ms: "T/T, deposit 30% dan 70% atas salinan bil muatan; atau L/C at sight",
    ar: "حوالة مصرفية (T/T): 30% مقدمًا و70% مقابل نسخة بوليصة الشحن؛ أو اعتماد مستندي بالاطلاع",
  },
  // TODO(owner): HS code used on your export declarations
  hsCode: {
    en: "1211.90",
    ms: "1211.90",
    ar: "1211.90",
  },
  // TODO(owner): real shelf life and storage conditions
  shelfLife: {
    en: "24 months in a cool, dry place away from direct sunlight",
    ms: "24 bulan di tempat sejuk dan kering, jauh daripada cahaya matahari terus",
    ar: "24 شهرًا في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة",
  },
  // TODO(owner): real sample policy
  samplePolicy: {
    en: "Free sample up to 500 g per product; the buyer pays the courier cost",
    ms: "Sampel percuma sehingga 500 g bagi setiap produk; pembeli menanggung kos kurier",
    ar: "عينة مجانية حتى 500 غرام لكل منتج؛ ويتحمل المشتري تكلفة الشحن السريع",
  },
};

export function getFacts(lang: Locale): Facts {
  return Object.fromEntries(
    factKeys.map((key) => [key, facts[key][lang]]),
  ) as Facts;
}
