import { Logo } from "../Logo";
import { AuthenticationNavigation } from "./authentication-navigation";
import { MainNavigation } from "./main-navigation";

export function StickyHeader() {
  return (
    <div className="bg-layout-bg text-layout-fg">
      <header className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Logo />
          <MainNavigation />
        </div>
        <div className="flex items-center gap-4">
          <AuthenticationNavigation />
        </div>
      </header>
    </div>
  );
}
