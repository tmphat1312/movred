import { auth } from "@clerk/nextjs/server";

import { UnderlineLink } from "@/components/ui/underline-link";
import { findYourReview } from "../data/find-your-review";
import { ReviewForm } from "./review-form";
import { Shimmer } from "@/components/ui/shimmer";

export async function YourReview({ movieId }: { movieId: number }) {
  const { userId } = await auth();

  if (!userId) {
    return (
      <Layout>
        <div className="w-fit rounded-md bg-layout-bg px-2 py-1 text-sm text-layout-fg">
          <UnderlineLink href="/sign-in">
            Sign in to post a review for this movie
          </UnderlineLink>
        </div>
      </Layout>
    );
  }

  const yourReview = await findYourReview({ movieId });

  return (
    <Layout>
      {yourReview ? (
        <p className="border-y-2 border-dashed border-layout-bg p-2 italic">
          {yourReview.review}
        </p>
      ) : (
        <ReviewForm movieId={movieId} />
      )}
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-2 font-medium">Your review</h4>
      {children}
    </section>
  );
}

export function YourReviewFallback() {
  return (
    <Layout>
      <Shimmer className="h-[108px] w-full" />
    </Layout>
  );
}
