export function YourReview() {
  const yourReview = "";

  return (
    <section>
      <h4 className="mb-2 font-medium">Your review</h4>
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
    </section>
  );
}
