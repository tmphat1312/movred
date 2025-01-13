import { SignedIn, SignedOut } from "@clerk/nextjs";

import { UnderlineLink } from "@/components/ui/underline-link";
import { findYourRating } from "../data/find-your-rating";
import { RatingForm } from "./rating-form";
import { YourRating } from "./your-rating";

export async function Rating({ movieId }: { movieId: number }) {
  const yourRating = await findYourRating({ movieId });

  if (yourRating) {
    return (
      <Layout>
        <YourRating rating={yourRating.rating} />
      </Layout>
    );
  }

  return (
    <Layout>
      <RatingForm movieId={movieId} />
    </Layout>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="w-fit rounded-md bg-layout-bg px-2 py-1 text-sm text-layout-fg">
          <UnderlineLink href="/sign-in">
            Sign in to rate this movie
          </UnderlineLink>
        </div>
      </SignedOut>
    </>
  );
}
