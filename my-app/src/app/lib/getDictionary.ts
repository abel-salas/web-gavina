import es from "@/app/translations/ES.json";
import en from "@/app/translations/EN.json";
import ca from "@/app/translations/CA.json";
import nl from "@/app/translations/NL.json";

import { Dictionary } from "./dictionary.models";
import { DEFAULT_LOCALE, isValidLocale } from "./languages";

const dictionaries: Record<string, Dictionary> = {
    es,
    en,
    ca,
    nl,
};

export function getDictionary(locale: string): Dictionary {
    // Validar que el locale es válido antes de usarlo
    const validLocale = isValidLocale(locale) ? locale : DEFAULT_LOCALE;
    return dictionaries[validLocale] || dictionaries[DEFAULT_LOCALE];
}
