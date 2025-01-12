import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { UnderlineLink } from "../ui/underline-link";
import { Shimmer } from "../ui/shimmer";

export function AuthenticationNavigation() {
  return (
    <nav
      className="flex items-center gap-4 p-2"
      aria-label="Authentication navigation"
    >
      <SignedOut>
        <UnderlineLink className="inline-block p-2" href="/sign-in">
          Login
        </UnderlineLink>
        <UnderlineLink className="inline-block p-2" href="/sign-up">
          Join Movred
        </UnderlineLink>
      </SignedOut>
      <SignedIn>
        <UnderlineLink className="inline-block p-2" href="/profile">
          My Activities
        </UnderlineLink>
        <div className="flex w-[28px] items-center">
          <ClerkLoading>
            <Shimmer className="size-[28px] rounded-full" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>
      </SignedIn>
    </nav>
  );
}
