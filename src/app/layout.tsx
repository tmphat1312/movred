import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

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
        <body className="min-h-dvh container">{children}</body>
      </ClerkProvider>
    </html>
  );
}
