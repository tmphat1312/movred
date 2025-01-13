"use server";

import { redirect, RedirectType } from "next/navigation";
import { removeFromRatingList as removeFromRatingListFn } from "../data/remove-from-rating-list";
import { FormState } from "./FormState";

export async function removeFromRatingList(
  preState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawFormData = {
    movieId: parseInt(formData.get("movieId") as string, 10),
  };

  try {
    await removeFromRatingListFn({
      movieId: rawFormData.movieId,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error);
    return {
      message: "Something happened on the server, please try again",
      status: "error",
    };
  }

  redirect("/profile", RedirectType.replace);
  return { message: "It's out of your list", status: "success" };
}
