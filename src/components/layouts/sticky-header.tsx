import { Logo } from "../logo";
import { AuthenticationNavigation } from "./authentication-navigation";

export function StickyHeader() {
  return (
    <div className="bg-layout-bg text-layout-fg">
      <header className="container flex items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-4">
          <AuthenticationNavigation />
        </div>
      </header>
    </div>
  );
}
