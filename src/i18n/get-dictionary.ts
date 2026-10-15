import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import en from "./dictionaries/en";
import ms from "./dictionaries/ms";
import ar from "./dictionaries/ar";
import zh from "./dictionaries/zh";

const dictionaries: Record<Locale, Dictionary> = { en, ms, ar, zh };

export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang];
