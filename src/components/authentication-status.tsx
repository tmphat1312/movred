import { SignedIn, SignedOut } from "@clerk/nextjs";

export function AuthenticationStatus() {
  return (
    <section>
      <h2 className="text-xl text-medium">Authentication Status</h2>
      <SignedIn>
        <p>You are signed in.</p>
      </SignedIn>
      <SignedOut>
        <p>You are signed out.</p>
      </SignedOut>
    </section>
  );
}
