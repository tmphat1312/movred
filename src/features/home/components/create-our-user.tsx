import { createOurUser } from "../data/create-our-user";

export async function CreateOurUser() {
  await createOurUser();
  return null;
}
