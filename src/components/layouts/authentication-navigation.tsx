import { UnderlineLink } from "../underline-link";

export function AuthenticationNavigation() {
  return (
    <nav className="p-2" aria-label="Authentication navigation">
      <UnderlineLink className="inline-block p-2" href="/sign-in">
        Login
      </UnderlineLink>
      <UnderlineLink className="inline-block p-2" href="/sign-up">
        Join Movred
      </UnderlineLink>
    </nav>
  );
}
