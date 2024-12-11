import Link from "next/link";
import { SignOutButton } from "../sign-out-button";

export function DashboardHeader() {
  return (
    <header className="flex justify-center">
      <nav className="flex gap-2 rounded bg-gray-100 p-1.5">
        <Link className="px-2.5 py-1.5 hover:underline" href="/">
          Home
        </Link>
        <Link className="px-2.5 py-1.5 hover:underline" href="/dashboard">
          Dashboard
        </Link>
        <SignOutButton />
      </nav>
    </header>
  );
}
