import { FaRegHeart } from "react-icons/fa";

export function AddToFavorite({}: { movieId: number }) {
  return (
    <button
      aria-label="add to watch list"
      className="hover:green-gradient rounded-full bg-layout-bg p-2.5 text-layout-fg shadow"
    >
      <FaRegHeart size={18} />
    </button>
  );
}
