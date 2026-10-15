export const locales = ["en", "ms", "ar", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Only these languages are built and linked. Malay is drafted in
// ./dictionaries but stays off until a native speaker has reviewed it;
// add "ms" here to publish it.
export const enabledLocales: readonly Locale[] = ["en", "ar", "zh"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ms: "Bahasa Melayu",
  ar: "العربية",
  zh: "简体中文",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ms: "ltr",
  ar: "rtl",
  zh: "ltr",
};

export const isEnabledLocale = (value: string): value is Locale =>
  (enabledLocales as readonly string[]).includes(value);
