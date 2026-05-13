const STYLE_KEYWORDS = {
  retro: ["retro", "vintage", "eski", "70'", "80'", "90'", "nostalji", "nostaljik", "klasik"],
  luxury: ["lüks", "luxury", "premium", "altın", "gold", "şık", "elite", "mücevher", "kuyumcu", "vip", "butik"],
  neon: ["neon", "gece", "club", "kulüp", "oyun", "gaming", "cyber", "siber", "dj", "rave", "elektronik"],
  kurumsal: [
    "kurumsal", "finans", "banka", "teknoloji", "yazılım", "saas", "danışmanlık",
    "hukuk", "şirket", "ofis", "b2b", "muhasebe",
  ],
  eglenceli: [
    "çocuk", "oyuncak", "eğlence", "renkli", "parti", "doğum günü", "okul",
    "kreş", "anaokulu", "festival",
  ],
  minimal: [
    "minimal", "sade", "doğal", "organik", "modern", "temiz", "scandinavian",
    "kozmetik", "wellness", "yoga", "spa", "vegan",
  ],
};

const PROJECT_KEYWORDS = {
  logo: ["logo", "amblem", "marka işareti"],
  social: ["instagram", "sosyal medya", "post", "story", "twitter", "facebook", "tiktok", "reels"],
  poster: ["afiş", "poster", "billboard", "banner", "duyuru", "ilan"],
  brand: ["marka kimliği", "kurumsal kimlik", "brand", "kimlik", "rebrand"],
};

const STYLE_LABELS = {
  minimal: "Minimal",
  retro: "Retro",
  luxury: "Luxury",
  neon: "Neon",
  kurumsal: "Kurumsal",
  eglenceli: "Eğlenceli",
};

const COLORS = [
  { id: "kan",        label: "kan kırmızısı", keywords: ["kan rengi", "kan kırmızı", "blood red"],          params: { hue: [-6, 6],    sat: [78, 95], light: [24, 36] } },
  { id: "bordo",      label: "bordo",          keywords: ["bordo", "burgundy", "şarap rengi"],              params: { hue: [342, 358], sat: [55, 80], light: [22, 32] } },
  { id: "lacivert",   label: "lacivert",       keywords: ["lacivert", "navy"],                              params: { hue: [217, 233], sat: [55, 85], light: [20, 32] } },
  { id: "turkuaz",    label: "turkuaz",        keywords: ["turkuaz", "turquoise", "teal"],                  params: { hue: [165, 185], sat: [55, 80], light: [44, 60] } },
  { id: "altın",      label: "altın",          keywords: ["altın", "gold", "altun"],                        params: { hue: [36, 48],   sat: [55, 80], light: [50, 62] } },
  { id: "pembe",      label: "pembe",          keywords: ["pembe", "pink", "rose"],                         params: { hue: [322, 348], sat: [55, 80], light: [65, 80] } },
  { id: "kahverengi", label: "kahverengi",     keywords: ["kahverengi", "kahve rengi", "brown"],            params: { hue: [17, 33],   sat: [25, 50], light: [22, 38] } },
  { id: "bej",        label: "bej",            keywords: ["bej", "beige", "krem"],                          params: { hue: [27, 43],   sat: [18, 35], light: [78, 90] } },
  { id: "kırmızı",    label: "kırmızı",        keywords: ["kırmızı", "kızıl", "red"],                       params: { hue: [-8, 8],    sat: [70, 92], light: [40, 55] } },
  { id: "turuncu",    label: "turuncu",        keywords: ["turuncu", "orange"],                             params: { hue: [17, 33],   sat: [75, 95], light: [50, 62] } },
  { id: "sarı",       label: "sarı",           keywords: ["sarı", "yellow"],                                params: { hue: [44, 56],   sat: [75, 95], light: [55, 68] } },
  { id: "yeşil",      label: "yeşil",          keywords: ["yeşil", "green"],                                params: { hue: [110, 145], sat: [50, 80], light: [38, 55] } },
  { id: "mavi",       label: "mavi",           keywords: ["mavi", "blue"],                                  params: { hue: [200, 230], sat: [55, 85], light: [42, 58] } },
  { id: "mor",        label: "mor",            keywords: ["mor", "purple", "violet", "menekşe"],            params: { hue: [265, 295], sat: [50, 80], light: [42, 58] } },
  { id: "siyah",      label: "siyah",          keywords: ["siyah", "black"],                                params: { hue: [0, 360],   sat: [0, 6],   light: [4, 14] } },
  { id: "beyaz",      label: "beyaz",          keywords: ["beyaz", "white"],                                params: { hue: [0, 360],   sat: [0, 6],   light: [92, 98] } },
  { id: "gri",        label: "gri",            keywords: ["gri", "gray", "grey"],                           params: { hue: [0, 360],   sat: [0, 8],   light: [45, 65] } },
];

const clampRange = (range, min, max) => [
  Math.max(min, Math.min(max, range[0])),
  Math.max(min, Math.min(max, range[1])),
];

const MODIFIERS = [
  {
    id: "koyu",
    keywords: ["koyu", "derin", "dark", "deep"],
    apply: (p) => ({
      ...p,
      light: clampRange([p.light[0] - 15, p.light[1] - 15], 4, 100),
      sat: clampRange([p.sat[0] + 5, p.sat[1] + 5], 0, 100),
    }),
  },
  {
    id: "açık",
    keywords: ["açık", "pastel", "soft", "pudra"],
    apply: (p) => ({
      ...p,
      light: clampRange([p.light[0] + 18, p.light[1] + 18], 0, 96),
      sat: clampRange([p.sat[0] - 18, p.sat[1] - 18], 12, 100),
    }),
  },
  {
    id: "canlı",
    keywords: ["canlı", "parlak", "vibrant", "vivid"],
    apply: (p) => ({
      ...p,
      sat: clampRange([p.sat[0] + 8, 100], 0, 100),
      light: clampRange([p.light[0] + 3, p.light[1] + 3], 0, 100),
    }),
  },
  {
    id: "mat",
    keywords: ["mat", "soluk", "muted", "dusty", "tozlu"],
    apply: (p) => ({
      ...p,
      sat: clampRange([p.sat[0] - 22, p.sat[1] - 22], 10, 100),
    }),
  },
];

function scoreCategory(text, keywords) {
  const t = text.toLowerCase();
  let best = { key: null, score: 0, matched: [] };
  for (const [key, kws] of Object.entries(keywords)) {
    const matched = kws.filter((kw) => t.includes(kw));
    if (matched.length > best.score) {
      best = { key, score: matched.length, matched };
    }
  }
  return best.score > 0 ? best : null;
}

function findColor(text) {
  const t = text.toLowerCase();
  for (const color of COLORS) {
    for (const kw of color.keywords) {
      if (t.includes(kw)) {
        return { color, matchedKeyword: kw };
      }
    }
  }
  return null;
}

function applyModifiers(text, params) {
  const t = text.toLowerCase();
  const applied = [];
  let next = params;
  for (const mod of MODIFIERS) {
    if (mod.keywords.some((kw) => t.includes(kw))) {
      next = mod.apply(next);
      applied.push(mod.id);
    }
  }
  return { params: next, modifiers: applied };
}

export function analyzeIdea(text) {
  if (!text || text.trim().length < 3) return null;

  const style = scoreCategory(text, STYLE_KEYWORDS);
  const project = scoreCategory(text, PROJECT_KEYWORDS);
  const colorMatch = findColor(text);

  if (!style && !project && !colorMatch) return null;

  let colorParams = null;
  let colorLabel = null;
  if (colorMatch) {
    const { params: modified, modifiers } = applyModifiers(text, colorMatch.color.params);
    colorParams = modified;
    colorLabel = modifiers.length
      ? `${modifiers.join(" ")} ${colorMatch.color.label}`
      : colorMatch.color.label;
  }

  const parts = [];
  if (colorMatch) {
    parts.push(`Ana renk: ${colorLabel}`);
  }
  if (style) {
    parts.push(`${STYLE_LABELS[style.key]} stili`);
  }
  if (project) {
    const label =
      project.key === "logo" ? "Logo" :
      project.key === "social" ? "Sosyal Medya Postu" :
      project.key === "poster" ? "Afiş" : "Marka Kimliği";
    parts.push(`Proje türü: ${label}`);
  }

  return {
    styleId: style?.key || null,
    projectType: project?.key || null,
    colorParams,
    colorLabel,
    reason: parts.join(" · "),
  };
}
