"use server";

import { removeFromFavoriteList } from "../data/remove-from-favorite-list";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function removeFromFavorite(
  preState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawFormData = {
    movieId: parseInt(formData.get("movieId") as string, 10),
  };

  try {
    await removeFromFavoriteList({
      movieId: rawFormData.movieId,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: "Something happened on the server, please try again",
      status: "error",
    };
  }

  return { message: "It's out of your list", status: "success" };
}
