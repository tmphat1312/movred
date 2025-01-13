"use server";

import { addToWatchList as addToWatchListFn } from "../data/add-to-watch-list";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function addToWatchList(
  preState: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawFormData = {
    movieId: parseInt(formData.get("movieId") as string, 10),
  };

  try {
    await addToWatchListFn({
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

  return { message: "That's right, it's in your list", status: "success" };
}
