import { FancyLogo } from "../fancy-logo";

export function Footer() {
  return (
    <div className="bg-layout-bg text-layout-fg">
      <footer className="container flex items-center justify-center gap-4 py-8">
        <FancyLogo />
        <p>Movred &copy;2024</p>
      </footer>
    </div>
  );
}
