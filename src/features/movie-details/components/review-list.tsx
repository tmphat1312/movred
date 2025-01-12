export function ReviewList() {
  const reviewList = [
    {
      id: 1,
      review: "This movie is awesome!",
      from: "John Doe",
    },
    {
      id: 2,
      review: "This movie is awesome!",
      from: "John Doe",
    },
    {
      id: 3,
      review: "This movie is awesome!",
      from: "John Doe",
    },
    {
      id: 4,
      review: "This movie is awesome!",
      from: "John Doe",
    },
  ];

  if (reviewList.length == 0) {
    return (
      <Layout>
        <p>No reviews yet</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <ul className="divide-y-2 border-r-2 pe-8">
        {reviewList.map((review) => (
          <li key={review.id} className="py-2">
            <p className="text-sm italic">{review.from} said:</p>
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
