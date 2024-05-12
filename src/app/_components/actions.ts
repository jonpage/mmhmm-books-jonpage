"use server";

import { revalidateTag } from "next/cache";

// out of scope, this would be a key place to validate inputs
export async function deleteBook(id: string) {
  const response = await fetch(
    `https://us-central1-all-turtles-interview.cloudfunctions.net/books/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer jonpage",
      },
    }
  );
  revalidateTag("books");
  return response.ok;
}
