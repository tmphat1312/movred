"use client";

import { FaHeart } from "react-icons/fa";
import { useActionState } from "react";

import { IconButton } from "./icon-button";
import { FloatingMessage } from "@/components/ui/floating-message";
import { FormState } from "../actions/add-to-favorite";
import { removeFromFavorite } from "../actions/remove-from-favorite";
import { AddToFavoriteForm } from "./add-to-favorite-form";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function RemoveFromFavoriteForm({ movieId }: { movieId: number }) {
  const [state, formAction, pending] = useActionState(
    removeFromFavorite,
    initialState,
  );

  if (state.status === "success") {
    return <AddToFavoriteForm movieId={movieId} />;
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="movieId" value={movieId} />
      <IconButton
        aria-label="remove from favorite list"
        title="Remove favorite list"
        disabled={pending}
      >
        <FaHeart size={18} />
      </IconButton>
      {state.status == "error" && (
        <FloatingMessage variant="error">{state.message}</FloatingMessage>
      )}
    </form>
  );
}
