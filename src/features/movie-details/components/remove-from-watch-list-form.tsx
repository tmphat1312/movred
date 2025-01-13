"use client";

import { useActionState } from "react";
import { FaBookmark } from "react-icons/fa";

import { FloatingMessage } from "@/components/ui/floating-message";
import { IconButton } from "../../../components/ui/icon-button";
import { FormState } from "../actions/add-to-favorite";
import { removeFromWatchList } from "../actions/remove-from-watch-list";
import { AddToWatchListForm } from "./add-to-watch-list-form";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function RemoveFromWatchListForm({ movieId }: { movieId: number }) {
  const [state, formAction, pending] = useActionState(
    removeFromWatchList,
    initialState,
  );

  if (state.status === "success") {
    return <AddToWatchListForm movieId={movieId} />;
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="movieId" value={movieId} />
      <IconButton
        aria-label="remove from watch list"
        title="Remove watch list"
        disabled={pending}
      >
        <FaBookmark size={18} />
      </IconButton>
      {state.status == "error" && (
        <FloatingMessage variant="error">{state.message}</FloatingMessage>
      )}
    </form>
  );
}
