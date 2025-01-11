import { UnderlineLink } from "@/components/ui/underline-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export function YourReview() {
  const yourReview = "";

  return (
    <Layout>
      {yourReview ? (
        <p>{yourReview}</p>
      ) : (
        <form action="">
          <textarea
            className="mb-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Write your review here"
          ></textarea>
          <button
            className="light-blue-gradient hover:green-gradient rounded-md px-2 py-1"
            type="submit"
          >
            Post my review
          </button>
        </form>
      )}
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-2 font-medium">Your review</h4>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="w-fit rounded-md bg-layout-bg px-2 py-1 text-sm text-layout-fg">
          <UnderlineLink href="/sign-in">
            Sign in to post a review for this movie
          </UnderlineLink>
        </div>
      </SignedOut>
    </section>
  );
}
