export const BIRTHDAY_DISMISS_KEY = "carinostri-birthday-dismissed";
export const BIRTHDAY_EXPIRY = new Date("2026-11-28T00:00:00+01:00").getTime();

export const isBirthdayVisible = (now = new Date()) => {
  const italianDate = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Rome", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(now);
  return italianDate <= "2026-11-27";
};

export const birthdayEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "16° Compleanno Carinostri",
  startDate: "2026-11-27T18:00:00+01:00",
  endDate: "2026-11-27T23:30:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place", name: "Carinostri",
    address: {
      "@type": "PostalAddress", streetAddress: "Via Francesco Baracca, 64",
      postalCode: "31036", addressLocality: "Sala d'Istrana", addressRegion: "TV", addressCountry: "IT",
    },
  },
  description: "Aperitivo aperto a tutti dalle 18.00, cena con spiedo cotto a legna dalle 20.00 e dolce sorpresa finale.",
  offers: {
    "@type": "Offer", price: "20", priceCurrency: "EUR", description: "Cena, bevande escluse",
    url: "https://carinostripizzeria.lovable.app/",
  },
  url: "https://carinostripizzeria.lovable.app/",
  organizer: { "@type": "Organization", name: "Carinostri", url: "https://carinostripizzeria.lovable.app/" },
};