export const languages = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'es';

export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.home': 'Home',
    'nav.jovellanos': 'Casa/Apartamento Jovellanos',
    'nav.alameda23': 'Casa Alameda 23',
    'nav.alameda33': 'Casa Alameda 33',
    'nav.contact': 'Contacto',

    'header.welcome': 'Bienvenido a',
    'header.title': 'Casas das Figueiras',
    'header.subtitle': 'Alquiler de casas vacacionales',
  },
  en: {
    'nav.home': '',
    'nav.jovellanos': 'Jovellanos House',
    'nav.alameda23': '',
    'nav.alameda33': '',
    'nav.contact': 'Contact',

    'header.welcome': 'Welcome to',
    'header.title': 'Casas das Figueiras',
    'header.subtitle': 'Holiday homes for rent',
  },
  de: {
    'nav.home': '',
    'nav.jovellanos': 'Jovellanos Haus',
    'nav.alameda23': '',
    'nav.alameda33': '',
    'nav.contact': 'Kontakt',

    'header.welcome': 'Willkommen bei',
    'header.title': 'Casas das Figueiras',
    'header.subtitle': 'Ferienhäuser zu vermieten',
  },
} as const;
