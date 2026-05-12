import { STYLES } from "../data/presets";

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function generateFontCombo(styleId) {
  const pool = STYLES[styleId].fontPool;
  return { heading: pick(pool.headings), body: pick(pool.bodies) };
}

export function buildFontOptions(styleId, count, seed) {
  const seen = new Set();
  const result = [];

  const key = (f) => `${f.heading}|${f.body}`;
  const push = (f) => {
    const k = key(f);
    if (seen.has(k)) return false;
    seen.add(k);
    result.push(f);
    return true;
  };

  if (seed) push(seed);

  let tries = 0;
  while (result.length < count && tries < count * 20) {
    push(generateFontCombo(styleId));
    tries++;
  }

  return result;
}
