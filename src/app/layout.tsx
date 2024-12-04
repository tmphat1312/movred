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
        <body>{children}</body>
  );
}
