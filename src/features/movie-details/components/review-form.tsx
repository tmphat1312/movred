"use client";

import { useActionState } from "react";
import { FormState, postAReview } from "../actions/post-a-review";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ReviewForm({ movieId }: { movieId: number }) {
  const [state, formAction, pending] = useActionState(
    postAReview,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div>
        <p className="text-green-500">
          Your review has been posted! Here&apos;s yours:
        </p>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      <textarea
        className="mb-1 w-full rounded-md border border-gray-300 p-2 disabled:cursor-not-allowed disabled:bg-gray-100"
        placeholder="Write your review here"
        name="review"
        disabled={pending}
      ></textarea>
      <input type="hidden" name="movieId" value={movieId} disabled={pending} />
      {state.message && (
        <p className="mb-1 text-sm text-red-500" aria-live="polite">
          {state.message}
        </p>
      )}
      <button
        className="light-blue-gradient hover:green-gradient rounded-md px-2 py-1 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={pending}
      >
        Post my review
      </button>
    </form>
  );
}
