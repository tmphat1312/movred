"use client";

import { useActionState } from "react";
import { FaRegBookmark } from "react-icons/fa";

import { FloatingMessage } from "@/components/ui/floating-message";
import { IconButton } from "../../../components/ui/icon-button";
import { FormState } from "../actions/add-to-favorite";
import { addToWatchList } from "../actions/add-to-watch-list";
import { RemoveFromWatchListForm } from "./remove-from-watch-list-form";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function AddToWatchListForm({ movieId }: { movieId: number }) {
  const [state, formAction, pending] = useActionState(
    addToWatchList,
    initialState,
  );

  if (state.status === "success") {
    return <RemoveFromWatchListForm movieId={movieId} />;
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="movieId" value={movieId} />
      <IconButton
        aria-label="add to watch list"
        title="Add to watch list"
        disabled={pending}
      >
        <FaRegBookmark size={18} />
      </IconButton>
      {state.status == "error" && (
        <FloatingMessage variant="error">{state.message}</FloatingMessage>
      )}
    </form>
  );
}
