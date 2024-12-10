import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { SignOutButton } from "../SignOutButton";

export function HomeHeader() {
  return (
    <header className="flex justify-center">
      <nav className="flex gap-2 rounded bg-gray-100 p-1.5">
        <Link className="px-2.5 py-1.5 hover:underline" href="/">
          Home
        </Link>
        <SignedOut>
          <Link className="px-2.5 py-1.5 hover:underline" href="/sign-up">
            Sign Up
          </Link>
          <Link className="px-2.5 py-1.5 hover:underline" href="/sign-in">
            Sign In
          </Link>
        </SignedOut>
        <SignedIn>
          <Link className="px-2.5 py-1.5 hover:underline" href="/dashboard">
            Dashboard
          </Link>
          <SignOutButton />
        </SignedIn>
      </nav>
    </header>
  );
}
