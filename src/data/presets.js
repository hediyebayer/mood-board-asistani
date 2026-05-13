export const PROJECT_TYPES = [
  { id: "logo", label: "Logo" },
  { id: "social", label: "Sosyal Medya Postu" },
  { id: "poster", label: "Afiş" },
  { id: "brand", label: "Marka Kimliği" },
  { id: "web", label: "Web Sitesi" },
  { id: "packaging", label: "Ambalaj" },
  { id: "card", label: "Kartvizit" },
  { id: "presentation", label: "Sunum" },
  { id: "book", label: "Kitap Kapağı" },
];

export const PROJECT_LABELS = Object.fromEntries(
  PROJECT_TYPES.map((p) => [p.id, p.label])
);

export const STYLES = {
  minimal: {
    label: "Minimal",
    params: { scheme: "mono", hue: [0, 360], sat: [6, 22], light: [18, 38] },
    fontPool: {
      headings: ["Inter", "Montserrat", "Space Grotesk", "DM Sans", "Poppins", "Manrope", "Raleway", "Syne"],
      bodies: ["Inter", "Open Sans", "DM Sans", "Manrope", "Space Grotesk", "Nunito", "Lora"],
    },
  },
  retro: {
    label: "Retro",
    params: { scheme: "analogous", hue: [5, 55], sat: [50, 82], light: [38, 58] },
    fontPool: {
      headings: ["Abril Fatface", "Playfair Display", "Fredoka", "Cormorant Garamond", "Lobster", "Bodoni Moda", "DM Serif Display", "Yeseva One", "Italiana"],
      bodies: ["Lora", "Open Sans", "Quicksand", "EB Garamond", "Cormorant Garamond", "Inter"],
    },
  },
  luxury: {
    label: "Luxury",
    params: { scheme: "luxury", hue: [0, 360], sat: [20, 55], light: [7, 18] },
    fontPool: {
      headings: ["Playfair Display", "Cormorant Garamond", "Abril Fatface", "Bodoni Moda", "DM Serif Display", "Cinzel", "EB Garamond", "Italiana", "Yeseva One"],
      bodies: ["Cormorant Garamond", "Lora", "EB Garamond", "Inter", "Raleway"],
    },
  },
  neon: {
    label: "Neon",
    params: { scheme: "triadic", hue: [0, 360], sat: [85, 100], light: [50, 62] },
    fontPool: {
      headings: ["Orbitron", "Space Grotesk", "Audiowide", "Archivo Black", "Russo One", "Bebas Neue", "Syne", "Fredoka"],
      bodies: ["Space Grotesk", "Inter", "IBM Plex Mono", "Open Sans", "Manrope"],
    },
  },
  kurumsal: {
    label: "Kurumsal",
    params: { scheme: "corporate", hue: [180, 260], sat: [50, 85], light: [26, 48] },
    fontPool: {
      headings: ["Montserrat", "Inter", "Space Grotesk", "Poppins", "DM Sans", "Manrope", "Archivo Black", "Raleway"],
      bodies: ["Open Sans", "Inter", "DM Sans", "Manrope", "Nunito", "Lora"],
    },
  },
  eglenceli: {
    label: "Eğlenceli",
    params: { scheme: "rainbow", hue: [0, 360], sat: [65, 85], light: [55, 68] },
    fontPool: {
      headings: ["Fredoka", "Quicksand", "Pacifico", "Lobster", "Caveat", "Abril Fatface", "Sacramento", "Bebas Neue"],
      bodies: ["Quicksand", "Open Sans", "Inter", "Nunito", "Poppins"],
    },
  },
  pastel: {
    label: "Pastel",
    params: { scheme: "analogous", hue: [0, 360], sat: [28, 50], light: [72, 86] },
    fontPool: {
      headings: ["Quicksand", "Fredoka", "Cormorant Garamond", "Lora", "Caveat", "Fraunces", "Sacramento", "Pacifico"],
      bodies: ["Quicksand", "Open Sans", "Lora", "EB Garamond", "Nunito"],
    },
  },
  doga: {
    label: "Doğa",
    params: { scheme: "analogous", hue: [28, 130], sat: [22, 52], light: [32, 52] },
    fontPool: {
      headings: ["Cormorant Garamond", "Lora", "Playfair Display", "Fraunces", "EB Garamond", "DM Serif Display", "Yeseva One"],
      bodies: ["Lora", "EB Garamond", "Open Sans", "Cormorant Garamond", "Nunito"],
    },
  },
  bohem: {
    label: "Bohem",
    params: { scheme: "analogous", hue: [8, 48], sat: [42, 70], light: [38, 58] },
    fontPool: {
      headings: ["Abril Fatface", "Cormorant Garamond", "Playfair Display", "Pacifico", "Caveat", "Cinzel", "Fraunces", "Sacramento", "Italiana"],
      bodies: ["Lora", "EB Garamond", "Cormorant Garamond", "Open Sans"],
    },
  },
  futurist: {
    label: "Fütürist",
    params: { scheme: "triadic", hue: [180, 290], sat: [55, 85], light: [40, 58] },
    fontPool: {
      headings: ["Orbitron", "Space Grotesk", "Audiowide", "Archivo Black", "Russo One", "Syne", "IBM Plex Mono", "Bebas Neue"],
      bodies: ["Space Grotesk", "Inter", "IBM Plex Mono", "Manrope", "DM Sans"],
    },
  },
  monokrom: {
    label: "Monokrom",
    params: { scheme: "mono", hue: [0, 360], sat: [0, 6], light: [10, 30] },
    fontPool: {
      headings: ["Montserrat", "Playfair Display", "Inter", "Space Grotesk", "Archivo Black", "DM Serif Display", "Bebas Neue", "Syne"],
      bodies: ["Inter", "Open Sans", "Lora", "IBM Plex Mono", "DM Sans", "Manrope"],
    },
  },
};
