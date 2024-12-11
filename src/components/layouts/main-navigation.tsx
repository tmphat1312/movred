import { UnderlineLink } from "../underline-link";

export function MainNavigation() {
  return (
    <nav aria-label="Main navigation" className="p-2">
      <UnderlineLink className="inline-block p-2" href="/movies">
        Movies
      </UnderlineLink>
    </nav>
  );
}
