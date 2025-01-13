"use client";

import { useActionState } from "react";

import { ScaleSlider } from "@/components/ui/scale-slider";
import { FormState, rateThisMovie } from "../actions/rate-this-movie";
import { YourRating } from "./your-rating";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function RatingForm({ movieId }: { movieId: number }) {
  const [state, formAction, pending] = useActionState(
    rateThisMovie,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div>
        <p className="mb-2 text-green-500">
          Your rating has been posted! Here&apos;s yours:
        </p>
        <YourRating rating={state.rating} />
      </div>
    );
  }

  return (
    <>
      <h4 className="mb-2 font-semibold">You will give it a</h4>
      <form className="flex items-center gap-5" action={formAction}>
        <ScaleSlider inputName="rating" />
        <input
          type="hidden"
          name="movieId"
          value={movieId}
          disabled={pending}
        />
        <button
          className="light-blue-gradient hover:green-gradient rounded-full px-3.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={pending}
        >
          Okay, Save My Rating
        </button>
      </form>
      {state.message && (
        <p className="mb-1 text-sm text-red-500" aria-live="polite">
          {state.message}
        </p>
      )}
    </>
  );
}
