import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import en from "./dictionaries/en";
import ms from "./dictionaries/ms";
import ar from "./dictionaries/ar";

const dictionaries: Record<Locale, Dictionary> = { en, ms, ar };

export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang];
