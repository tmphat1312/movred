import { FaRegBookmark } from "react-icons/fa";

export function AddToWatchList({}: { movieId: number }) {
  return (
    <button
      aria-label="add to watch list"
      className="hover:green-gradient rounded-full bg-layout-bg p-2.5 text-layout-fg shadow"
    >
      <FaRegBookmark size={18} />
    </button>
  );
}
