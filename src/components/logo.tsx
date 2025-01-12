import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="uppercase tracking-widest">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 170 60"
        width={170}
        height={60}
      >
        <defs>
          <linearGradient id="__logo-gradient">
            <stop offset="5%" stopColor="#89cda4" />
            <stop offset="95%" stopColor="#13b6dc" />
          </linearGradient>
          <linearGradient id="__logo-gradient-circle">
            <stop stopColor="#89cda4" />
            <stop offset="80%" stopColor="#13bfac" />
          </linearGradient>
        </defs>
        <text
          x="0%"
          y="50%"
          fill="url(#__logo-gradient)"
          fontSize="28"
          fontWeight="bold"
          alignmentBaseline="central"
        >
          MOVRED
        </text>
        <circle
          cx="18.9%"
          cy="50%"
          r="10"
          fill="url(#__logo-gradient-circle)"
        />
        <rect
          x="68%"
          y="50%"
          transform="translate(4, -9)"
          width={48}
          height={18}
          fill="#13b6dc"
          rx="10"
          ry="10"
        />
      </svg>
    </Link>
  );
}
