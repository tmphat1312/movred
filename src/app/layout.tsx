import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const source_sans_font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovRed - Movies Recommendation",
  description: "Centralized movies recommendation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`custom-scrollbar min-h-dvh ${source_sans_font.className}`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
