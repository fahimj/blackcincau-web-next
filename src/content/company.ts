import type { Locale } from "@/i18n/config";

// Confirmed company details. Change them here and they update everywhere.
export const company = {
  brand: "Black Cincau",
  legalName: "CV Ambar Sari",
  founded: 2012,
  address: {
    street: "Dusun II, Kenteng, Purwantoro",
    locality: "Wonogiri Regency",
    region: "Central Java",
    postalCode: "57695",
    country: "Indonesia",
    countryCode: "ID",
  },
  addressLine:
    "Dusun II, Kenteng, Purwantoro, Wonogiri Regency, Central Java 57695, Indonesia",
  phoneDisplay: "+62 813-2548-5979",
  phoneE164: "+6281325485979",
  whatsappNumber: "6281325485979",
  whatsappLink: "https://wa.link/5063ef",
  whatsappGreeting: "Hi *Black Cincau*! I need more info about Black Cincau",
  email: "blackcincau49@gmail.com",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=57M3%2BW2%20Kenteng%2C%20Wonogiri%20Regency%2C%20Central%20Java&t=m&z=15&output=embed&iwloc=near",
  botanicalName: "Platostoma palustre",
  botanicalSynonym: "Mesona chinensis, Mesona palustris",
} as const;

// Countries the product has actually been shipped to, as confirmed by the
// exporter. Shipments to China went through other exporters, not directly.
// Do not add a country here unless that is true.
export const exportDestinations: Record<Locale, string[]> = {
  en: ["China", "Malaysia", "Thailand"],
  ms: ["China", "Malaysia", "Thailand"],
  ar: ["الصين", "ماليزيا", "تايلاند"],
};
