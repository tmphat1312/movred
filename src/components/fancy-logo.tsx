import Link from "next/link";

export function FancyLogo() {
  return (
    <Link href="/" className="uppercase tracking-widest">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 280 120"
        width={280}
        height={120}
      >
        <defs>
          <linearGradient id="__logo-gradient">
            <stop offset="5%" stopColor="#89cda4" />
            <stop offset="95%" stopColor="#13b6dc" />
          </linearGradient>
          <linearGradient id="__logo-gradient-reverse">
            <stop offset="5%" stopColor="#13b6dc" />
            <stop offset="95%" stopColor="#89cda4" />
          </linearGradient>
          <linearGradient id="__logo-gradient-circle">
            <stop stopColor="#89cda4" />
            <stop offset="80%" stopColor="#13bfac" />
          </linearGradient>
          <linearGradient id="__logo-gradient-circle-reverse">
            <stop stopColor="#13bfac" />
            <stop offset="80%" stopColor="#89cda4" />
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
          MOVIES REC
        </text>
        <circle
          cx="11.25%"
          cy="50%"
          r="10"
          fill="url(#__logo-gradient-circle)"
        />
        <rect
          x="57%"
          y="50%"
          transform="translate(4, -9)"
          width={60}
          height={18}
          fill="#13b6dc"
          rx="10"
          ry="10"
        />

        <text
          x="20%"
          y="75%"
          fill="url(#__logo-gradient-reverse)"
          fontSize="28"
          fontWeight="bold"
          alignmentBaseline="central"
        >
          MENDATIONS
        </text>
        <circle
          cx="67%"
          cy="75%"
          r="10"
          fill="url(#__logo-gradient-circle-reverse)"
        />
        <rect
          x="0%"
          y="75%"
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
