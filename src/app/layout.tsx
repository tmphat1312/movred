import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovRed - Movies Recommendation",
  description: "Centralized movies recommendation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://fav.farm/🎞️"
          type="image/x-icon"
        />
      </head>
    </html>
        <body>{children}</body>
  );
}
