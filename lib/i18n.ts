export type Locale = "hu" | "ro" | "en";

export const locales: Locale[] = ["hu", "ro", "en"];

export const localeLabels: Record<Locale, string> = {
  hu: "Magyar",
  ro: "Română",
  en: "English",
};

// Flag image URLs (FlagCDN) – reliable cross-platform display
export const localeFlagSrc: Record<Locale, string> = {
  hu: "https://flagcdn.com/w80/hu.png",
  ro: "https://flagcdn.com/w80/ro.png",
  en: "https://flagcdn.com/w80/us.png",
};

export type Translations = {
  nav: {
    drinks: string;
    about: string;
    contact: string;
    reservation: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  drinks: {
    title: string;
    subtitle: string;
    viewRecipe: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

// Hungarian content (current). RO/EN can be added later with the same keys.
const hu: Translations = {
  nav: {
    drinks: "Italok",
    about: "Rólunk",
    contact: "Kapcsolat",
    reservation: "Foglalás",
  },
  hero: {
    title: "Fedezd fel a koktélok művészetét",
    subtitle: "a DejaVu Cocktail barral",
    cta: "Foglalás",
  },
  drinks: {
    title: "Italaink",
    subtitle: "Prémium koktélok, egyedi ízek",
    viewRecipe: "Recept megtekintése",
  },
  cta: {
    title: "Készítsünk együtt emlékezetes estét",
    description: "Mobil bárunk bárhova eljön – rendezvény, lagzi, céges buli.",
    button: "Foglalás kérése",
  },
  footer: {
    tagline: "DejaVu Cocktail bar – a koktélok művészete mobilban.",
    rights: "Minden jog fenntartva.",
  },
};

// Placeholder: same as Hungarian until you add Romanian/English translations.
const ro: Translations = hu;
const en: Translations = hu;

export const translations: Record<Locale, Translations> = { hu, ro, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? hu;
}
