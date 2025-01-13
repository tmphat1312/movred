"use server";

import { addToFavoriteList } from "../data/add-to-favorite-list";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function addToFavorite(
  preState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawFormData = {
    movieId: parseInt(formData.get("movieId") as string, 10),
  };

  try {
    await addToFavoriteList({
      movieId: rawFormData.movieId,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Something happened on the server, please try again",
      status: "error",
    };
  }

  return { message: "That's right, it's in your list", status: "success" };
}
