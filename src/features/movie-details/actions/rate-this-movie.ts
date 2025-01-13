"use server";

import { PostARating } from "../data/post-a-rating";

export type FormState =
  | {
      status: "idle" | "error";
      message: string;
    }
  | {
      status: "success";
      message: string;
      rating: number;
    };

export async function rateThisMovie(
  preState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawFormData = {
    rating: parseInt(formData.get("rating") as string, 10),
    movieId: parseInt(formData.get("movieId") as string, 10),
  };

  const rating = Math.ceil(rawFormData.rating / 10);

  console.log(rating);

  if (rating <= 0) {
    return { message: "Please rate the movie", status: "error" };
  }

  if (rating > 10) {
    return { message: "Rating is too high", status: "error" };
  }

  try {
    await PostARating({
      rating: rating,
      movieId: rawFormData.movieId,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Something happened on the server, please try again",
      status: "error",
    };
  }

  return {
    message: "You rated this movie",
    rating,
    status: "success",
  };
}
