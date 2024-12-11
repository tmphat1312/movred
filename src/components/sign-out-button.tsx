import { SignOutButton as ClerkSignOutButton } from "@clerk/nextjs";

export function SignOutButton() {
  return (
    <ClerkSignOutButton>
      <button className="px-2.5 py-1.5 hover:bg-gray-50">Signout</button>
    </ClerkSignOutButton>
  );
}
