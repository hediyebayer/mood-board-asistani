const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const hslToHex = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const v = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(v * 255).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const hsl = (h, s, l) =>
  hslToHex(((h % 360) + 360) % 360, clamp(s, 0, 100), clamp(l, 0, 100));

export function generatePalette(params) {
  const h = rand(params.hue[0], params.hue[1]);
  const s = rand(params.sat[0], params.sat[1]);
  const l = rand(params.light[0], params.light[1]);

  switch (params.scheme) {
    case "mono":
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(h, clamp(s, 0, 6), 97 + rand(-1, 2)),
          hsl(h, s + rand(2, 8), 84 + rand(-3, 4)),
          hsl(h, s + rand(8, 16), 64 + rand(-4, 4)),
          hsl(h + rand(-10, 10), s + rand(12, 22), 42 + rand(-4, 6)),
          hsl(h + rand(-8, 8), s + rand(15, 28), 22 + rand(-4, 6)),
        ],
      };

    case "analogous":
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(h + rand(20, 40), s - rand(5, 12), l + rand(12, 22)),
          hsl(h + rand(45, 70), s - rand(10, 20), l + rand(18, 28)),
          hsl(h - rand(15, 30), s, l - rand(4, 12)),
          hsl(h - rand(30, 50), s + rand(0, 10), l - rand(10, 20)),
          hsl(h + 180 + rand(-15, 15), s - rand(10, 25), 22 + rand(-4, 8)),
        ],
      };

    case "luxury":
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(42 + rand(-6, 10), 55 + rand(0, 20), 56 + rand(-6, 10)),
          hsl(38 + rand(-10, 10), 28 + rand(0, 18), 82 + rand(-4, 6)),
          hsl(h, s + rand(0, 12), l + rand(10, 20)),
          hsl(h + rand(-20, 20), s - rand(5, 15), Math.min(98, 92 + rand(-3, 4))),
          hsl(h, clamp(s - rand(0, 10), 10, 60), 8 + rand(-2, 6)),
        ],
      };

    case "triadic":
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(h + 120 + rand(-10, 10), s, l + rand(-5, 5)),
          hsl(h + 240 + rand(-10, 10), s, l + rand(-5, 5)),
          hsl(h + 60 + rand(-10, 10), s - rand(0, 12), l + rand(5, 15)),
          hsl(h + 180 + rand(-10, 10), s - rand(5, 15), l - rand(5, 15)),
          hsl(h, clamp(s - rand(40, 60), 0, 30), 8 + rand(-2, 6)),
        ],
      };

    case "corporate":
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(h + rand(-15, 15), s + rand(5, 18), 14 + rand(-3, 6)),
          hsl(h, 18 + rand(0, 14), 38 + rand(-5, 8)),
          hsl(h, 12 + rand(0, 12), 60 + rand(-6, 8)),
          hsl(h + rand(-10, 10), 14 + rand(0, 12), 86 + rand(-3, 5)),
          hsl(h, 8 + rand(0, 10), 96 + rand(-2, 3)),
        ],
      };

    case "rainbow":
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(h + rand(55, 80), s + rand(-10, 5), l + rand(-5, 8)),
          hsl(h + rand(110, 140), s - rand(0, 15), l + rand(0, 10)),
          hsl(h + rand(170, 200), s - rand(0, 12), l + rand(-5, 8)),
          hsl(h + rand(225, 255), s, l - rand(0, 10)),
          hsl(h + rand(285, 315), s - rand(5, 18), l + rand(0, 12)),
        ],
      };

    default:
      return {
        primary: hsl(h, s, l),
        colors: [
          hsl(h, s, 88),
          hsl(h, s, 70),
          hsl(h, s, 50),
          hsl(h, s, 32),
          hsl(h, s, 18),
        ],
      };
  }
}
