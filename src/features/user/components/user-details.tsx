"use client";

import { useSession, useUser } from "@clerk/nextjs";

export function UserDetails() {
  const { session } = useSession();
  const { user } = useUser();

  if (!session || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-medium mb-3">User Details</h2>
        <div>
          <span>Username: </span>
          <span>{user.username}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>{user.emailAddresses.at(0)?.emailAddress}</span>
        </div>
        <div>
          <span>Fullname: </span>
          <span>{user.fullName || "No fullname provided"}</span>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-medium mb-3">Session Details</h2>
        <div>
          <span>Status: </span>
          <span>{session.status}</span>
        </div>
        <div>
          <span>Session ID: </span>
          <span>{session.id}</span>
        </div>
        <div>
          <span>Session Expiration: </span>
          <span>{session.expireAt.toUTCString()}</span>
        </div>
      </section>
    </div>
  );
}
