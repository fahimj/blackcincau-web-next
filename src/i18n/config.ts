export const locales = ["en", "ms", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Only these languages are built and linked. Malay and Arabic are drafted
// in ./dictionaries but stay off until a native speaker has reviewed them;
// add "ms" / "ar" here to publish them.
export const enabledLocales: readonly Locale[] = ["en", "ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ms: "Bahasa Melayu",
  ar: "العربية",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ms: "ltr",
  ar: "rtl",
};

export const isEnabledLocale = (value: string): value is Locale =>
  (enabledLocales as readonly string[]).includes(value);
