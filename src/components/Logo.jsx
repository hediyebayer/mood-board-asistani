export default function Logo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="app__logo"
    >
      <defs>
        <linearGradient id="mba-wood" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#f9e0b3" />
          <stop offset="100%" stopColor="#c08438" />
        </linearGradient>
      </defs>
      <g transform="rotate(45 45 18)">
        <rect x="43.5" y="2" width="3" height="22" rx="1.5" fill="#7a4520" />
        <rect x="43" y="24" width="4" height="2.5" fill="#9ca3af" />
        <path d="M43 26.5 L47 26.5 L46 33 L44 33 Z" fill="#1e1b4b" />
      </g>
      <path
        fill="url(#mba-wood)"
        stroke="#8b5a20"
        strokeWidth="1.2"
        fillRule="evenodd"
        d="M9 38 C8 24 22 13 35 13 C50 13 58 23 57 37 C56 50 43 56 30 55 C16 53 9 47 9 38 Z
           M46 24 C50.5 24 50.5 31 46 31 C41.5 31 41.5 24 46 24 Z"
      />
      <circle cx="18" cy="29" r="2.4" fill="#a855f7" />
      <circle cx="25" cy="23" r="2.4" fill="#ec4899" />
      <circle cx="33" cy="20" r="2.4" fill="#f97316" />
      <circle cx="40" cy="23" r="2.4" fill="#facc15" />
      <text
        x="28"
        y="49"
        textAnchor="middle"
        fontFamily="Inter, -apple-system, system-ui, sans-serif"
        fontSize="17"
        fontWeight="900"
        fill="#1e1b4b"
        letterSpacing="-1.5"
      >
        mb
      </text>
    </svg>
  );
}
