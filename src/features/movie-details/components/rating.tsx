import { ScaleSlider } from "@/components/ui/scale-slider";
import { UnderlineLink } from "@/components/ui/underline-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export function Rating() {
  const yourRating = undefined;

  if (yourRating) {
    return (
      <Layout>
        <p>
          Your rating: <span className="text-lg font-bold">{yourRating}</span>
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h4 className="mb-2 font-semibold">You will give it a</h4>
      <div className="flex items-center gap-5">
        <ScaleSlider />
        <button className="light-blue-gradient hover:green-gradient rounded-full px-4 py-2">
          Okay, Save My Rating
        </button>
      </div>
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
