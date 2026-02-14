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
    title: "Fedezd fel a koktélok világát",
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

// Romanian translations.
const ro: Translations = {
  nav: {
    drinks: "Băuturi",
    about: "Despre noi",
    contact: "Contact",
    reservation: "Rezervare",
  },
  hero: {
    title: "Descoperă lumea cocktailurilor",
    subtitle: "cu DejaVu Cocktail bar",
    cta: "Rezervare",
  },
  drinks: {
    title: "Băuturile noastre",
    subtitle: "Cocktailuri premium, arome unice",
    viewRecipe: "Vezi rețeta",
  },
  cta: {
    title: "Hai să creăm împreună o seară de neuitat",
    description:
      "Barul nostru mobil vine la tine – evenimente, nunti, petreceri corporate.",
    button: "Solicită rezervare",
  },
  footer: {
    tagline: "DejaVu Cocktail bar – arta cocktailurilor în mișcare.",
    rights: "Toate drepturile rezervate.",
  },
};

// English translations.
const en: Translations = {
  nav: {
    drinks: "Drinks",
    about: "About us",
    contact: "Contact",
    reservation: "Reservation",
  },
  hero: {
    title: "Discover the world of cocktails",
    subtitle: "with DejaVu Cocktail bar",
    cta: "Reservation",
  },
  drinks: {
    title: "Our drinks",
    subtitle: "Premium cocktails, unique flavours",
    viewRecipe: "View recipe",
  },
  cta: {
    title: "Let’s create a memorable evening together",
    description:
      "Our mobile bar comes to you – events, weddings, corporate parties.",
    button: "Request reservation",
  },
  footer: {
    tagline: "DejaVu Cocktail bar – the art of cocktails on the move.",
    rights: "All rights reserved.",
  },
};

export const translations: Record<Locale, Translations> = { hu, ro, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? hu;
}
