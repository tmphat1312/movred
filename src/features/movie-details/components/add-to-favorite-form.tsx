"use client";

import { useActionState } from "react";
import { FaRegHeart } from "react-icons/fa";

import { FloatingMessage } from "@/components/ui/floating-message";
import { addToFavorite, FormState } from "../actions/add-to-favorite";
import { IconButton } from "../../../components/ui/icon-button";
import { RemoveFromFavoriteForm } from "./remove-from-favorite-form";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function AddToFavoriteForm({ movieId }: { movieId: number }) {
  const [state, formAction, pending] = useActionState(
    addToFavorite,
    initialState,
  );

  if (state.status === "success") {
    return <RemoveFromFavoriteForm movieId={movieId} />;
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="movieId" value={movieId} />
      <IconButton
        aria-label="add to favorite list"
        title="Add to favorite list"
        disabled={pending}
      >
        <FaRegHeart size={18} />
      </IconButton>
      {state.status == "error" && (
        <FloatingMessage variant="error">{state.message}</FloatingMessage>
      )}
    </form>
  );
}
