import { Footer } from "@/components/layouts/footer";
import { StickyHeader } from "@/components/layouts/sticky-header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyHeader />
      {children}
      <Footer />
    </>
  );
}
