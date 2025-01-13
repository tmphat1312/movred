import { Shimmer } from "@/components/ui/shimmer";
import { getMovieReviews } from "../data/get-movie-reviews";

export async function ReviewList({ movieId }: { movieId: number }) {
  const reviewList = await getMovieReviews({ movieId });
  const withIdReviewList = reviewList.map((review) => ({
    ...review,
    id: `${review.userId}-${review.movieId}`,
  }));

  if (withIdReviewList.length == 0) {
    return (
      <Layout>
        <p>No reviews yet</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <ul className="divide-y-2 border-r-2 pe-8">
        {withIdReviewList.map((review) => (
          <li key={review.id} className="py-2">
            <p className="text-sm italic">{review.from || "Someone"} said:</p>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-2 font-medium">Reviews</h4>
      {children}
    </section>
  );
}

export function ReviewListFallback() {
  return (
    <Layout>
      <Shimmer className="h-[108px] w-full" />
    </Layout>
  );
}
