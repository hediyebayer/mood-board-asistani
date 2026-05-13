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
      headings: ["Inter", "Montserrat", "Space Grotesk", "DM Sans", "Poppins", "Manrope", "Raleway", "Syne", "Outfit", "Plus Jakarta Sans", "Jost", "Bricolage Grotesque", "Josefin Sans"],
      bodies: ["Inter", "Open Sans", "DM Sans", "Manrope", "Space Grotesk", "Nunito", "Lora", "Outfit", "Plus Jakarta Sans", "Jost", "PT Serif"],
    },
  },
  retro: {
    label: "Retro",
    params: { scheme: "analogous", hue: [5, 55], sat: [50, 82], light: [38, 58] },
    fontPool: {
      headings: ["Abril Fatface", "Playfair Display", "Fredoka", "Cormorant Garamond", "Lobster", "Bodoni Moda", "DM Serif Display", "Yeseva One", "Italiana", "Alfa Slab One", "Righteous", "Anton", "Zilla Slab", "Arvo"],
      bodies: ["Lora", "Open Sans", "Quicksand", "EB Garamond", "Cormorant Garamond", "Inter", "PT Serif", "Merriweather", "Spectral"],
    },
  },
  luxury: {
    label: "Luxury",
    params: { scheme: "luxury", hue: [0, 360], sat: [20, 55], light: [7, 18] },
    fontPool: {
      headings: ["Playfair Display", "Cormorant Garamond", "Abril Fatface", "Bodoni Moda", "DM Serif Display", "Cinzel", "EB Garamond", "Italiana", "Yeseva One", "Great Vibes", "Crimson Pro", "Spectral", "Fraunces"],
      bodies: ["Cormorant Garamond", "Lora", "EB Garamond", "Inter", "Raleway", "Crimson Pro", "Spectral", "PT Serif"],
    },
  },
  neon: {
    label: "Neon",
    params: { scheme: "triadic", hue: [0, 360], sat: [85, 100], light: [50, 62] },
    fontPool: {
      headings: ["Orbitron", "Space Grotesk", "Audiowide", "Archivo Black", "Russo One", "Bebas Neue", "Syne", "Fredoka", "Unbounded", "Bungee", "Black Ops One", "Permanent Marker", "Righteous"],
      bodies: ["Space Grotesk", "Inter", "IBM Plex Mono", "Open Sans", "Manrope", "JetBrains Mono", "Space Mono"],
    },
  },
  kurumsal: {
    label: "Kurumsal",
    params: { scheme: "corporate", hue: [180, 260], sat: [50, 85], light: [26, 48] },
    fontPool: {
      headings: ["Montserrat", "Inter", "Space Grotesk", "Poppins", "DM Sans", "Manrope", "Archivo Black", "Raleway", "Outfit", "Plus Jakarta Sans", "Oswald", "Bricolage Grotesque", "Roboto Slab"],
      bodies: ["Open Sans", "Inter", "DM Sans", "Manrope", "Nunito", "Lora", "Outfit", "Plus Jakarta Sans", "PT Serif", "Merriweather"],
    },
  },
  eglenceli: {
    label: "Eğlenceli",
    params: { scheme: "rainbow", hue: [0, 360], sat: [65, 85], light: [55, 68] },
    fontPool: {
      headings: ["Fredoka", "Quicksand", "Pacifico", "Lobster", "Caveat", "Abril Fatface", "Sacramento", "Bebas Neue", "Bungee", "Dancing Script", "Kaushan Script", "Permanent Marker", "Patrick Hand", "Comfortaa", "Alfa Slab One"],
      bodies: ["Quicksand", "Open Sans", "Inter", "Nunito", "Poppins", "Comfortaa", "Patrick Hand"],
    },
  },
  pastel: {
    label: "Pastel",
    params: { scheme: "analogous", hue: [0, 360], sat: [28, 50], light: [72, 86] },
    fontPool: {
      headings: ["Quicksand", "Fredoka", "Cormorant Garamond", "Lora", "Caveat", "Fraunces", "Sacramento", "Pacifico", "Dancing Script", "Comfortaa", "Josefin Sans", "Patrick Hand"],
      bodies: ["Quicksand", "Open Sans", "Lora", "EB Garamond", "Nunito", "Comfortaa", "Outfit"],
    },
  },
  doga: {
    label: "Doğa",
    params: { scheme: "analogous", hue: [28, 130], sat: [22, 52], light: [32, 52] },
    fontPool: {
      headings: ["Cormorant Garamond", "Lora", "Playfair Display", "Fraunces", "EB Garamond", "DM Serif Display", "Yeseva One", "Roboto Slab", "Zilla Slab", "Spectral", "Merriweather", "Crimson Pro", "Arvo"],
      bodies: ["Lora", "EB Garamond", "Open Sans", "Cormorant Garamond", "Nunito", "PT Serif", "Spectral", "Merriweather"],
    },
  },
  bohem: {
    label: "Bohem",
    params: { scheme: "analogous", hue: [8, 48], sat: [42, 70], light: [38, 58] },
    fontPool: {
      headings: ["Abril Fatface", "Cormorant Garamond", "Playfair Display", "Pacifico", "Caveat", "Cinzel", "Fraunces", "Sacramento", "Italiana", "Great Vibes", "Dancing Script", "Kaushan Script", "Yeseva One"],
      bodies: ["Lora", "EB Garamond", "Cormorant Garamond", "Open Sans", "PT Serif", "Spectral"],
    },
  },
  futurist: {
    label: "Fütürist",
    params: { scheme: "triadic", hue: [180, 290], sat: [55, 85], light: [40, 58] },
    fontPool: {
      headings: ["Orbitron", "Space Grotesk", "Audiowide", "Archivo Black", "Russo One", "Syne", "IBM Plex Mono", "Bebas Neue", "Unbounded", "Jost", "JetBrains Mono", "Space Mono", "Bricolage Grotesque", "Righteous"],
      bodies: ["Space Grotesk", "Inter", "IBM Plex Mono", "Manrope", "DM Sans", "JetBrains Mono", "Space Mono", "Outfit"],
    },
  },
  monokrom: {
    label: "Monokrom",
    params: { scheme: "mono", hue: [0, 360], sat: [0, 6], light: [10, 30] },
    fontPool: {
      headings: ["Montserrat", "Playfair Display", "Inter", "Space Grotesk", "Archivo Black", "DM Serif Display", "Bebas Neue", "Syne", "Anton", "Oswald", "Bricolage Grotesque", "Unbounded", "Jost"],
      bodies: ["Inter", "Open Sans", "Lora", "IBM Plex Mono", "DM Sans", "Manrope", "JetBrains Mono", "Space Mono", "PT Serif"],
    },
  },
};
