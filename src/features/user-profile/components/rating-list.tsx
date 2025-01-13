import { getRatingList } from "../data/get-rating-list";

export async function RatingList() {
  const list = await getRatingList();

  if (!list || list.length === 0) {
    return (
      <p className="text-green-gradient text-lg">
        You have not rated any movie yet.
      </p>
    );
  }

  return <div>RatingList</div>;
}
