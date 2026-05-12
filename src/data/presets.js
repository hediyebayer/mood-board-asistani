export const PROJECT_TYPES = [
  { id: "logo", label: "Logo" },
  { id: "social", label: "Sosyal Medya Postu" },
  { id: "poster", label: "Afiş" },
  { id: "brand", label: "Marka Kimliği" },
];

export const STYLES = {
  minimal: {
    label: "Minimal",
    params: { scheme: "mono", hue: [0, 360], sat: [6, 22], light: [18, 38] },
    fontPool: {
      headings: ["Inter", "Montserrat", "Space Grotesk", "Open Sans"],
      bodies: ["Inter", "Open Sans", "Space Grotesk", "Lora"],
    },
  },
  retro: {
    label: "Retro",
    params: { scheme: "analogous", hue: [5, 55], sat: [50, 82], light: [38, 58] },
    fontPool: {
      headings: ["Abril Fatface", "Playfair Display", "Fredoka", "Cormorant Garamond"],
      bodies: ["Lora", "Open Sans", "Quicksand", "Inter"],
    },
  },
  luxury: {
    label: "Luxury",
    params: { scheme: "luxury", hue: [0, 360], sat: [20, 55], light: [7, 18] },
    fontPool: {
      headings: ["Playfair Display", "Cormorant Garamond", "Abril Fatface", "Montserrat"],
      bodies: ["Cormorant Garamond", "Lora", "Open Sans", "Inter"],
    },
  },
  neon: {
    label: "Neon",
    params: { scheme: "triadic", hue: [0, 360], sat: [85, 100], light: [50, 62] },
    fontPool: {
      headings: ["Orbitron", "Space Grotesk", "Montserrat", "Fredoka"],
      bodies: ["Space Grotesk", "Inter", "Open Sans", "Quicksand"],
    },
  },
  kurumsal: {
    label: "Kurumsal",
    params: { scheme: "corporate", hue: [180, 260], sat: [50, 85], light: [26, 48] },
    fontPool: {
      headings: ["Montserrat", "Inter", "Space Grotesk", "Open Sans"],
      bodies: ["Open Sans", "Inter", "Lora", "Space Grotesk"],
    },
  },
  eglenceli: {
    label: "Eğlenceli",
    params: { scheme: "rainbow", hue: [0, 360], sat: [65, 85], light: [55, 68] },
    fontPool: {
      headings: ["Fredoka", "Quicksand", "Abril Fatface", "Montserrat"],
      bodies: ["Quicksand", "Open Sans", "Inter", "Lora"],
    },
  },
};
