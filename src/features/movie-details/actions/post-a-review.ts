"use server";

import { PostAReview } from "../data/post-a-review";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function postAReview(
  preState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawFormData = {
    review: formData.get("review") as string,
    movieId: parseInt(formData.get("movieId") as string, 10),
  };

  if (rawFormData.review.length <= 0) {
    return { message: "Please write a review", status: "error" };
  }

  if (rawFormData.review.length > 256) {
    return { message: "Review is too long", status: "error" };
  }

  try {
    await PostAReview({
      review: rawFormData.review,
      movieId: rawFormData.movieId,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Something happened on the server, please try again",
      status: "error",
    };
  }

  return { message: rawFormData.review, status: "success" };
}
