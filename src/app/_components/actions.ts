"use server";

import { revalidateTag } from "next/cache";
import { z } from "zod";

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

const addBookSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
});

export async function addBook(formData: FormData) {
  console.log(formData);
  const validatedFields = addBookSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message);
  }

  const response = await fetch(
    `https://us-central1-all-turtles-interview.cloudfunctions.net/books`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer jonpage",
      },
      body: JSON.stringify({
        ...validatedFields.data,
        imageUrl: "https://picsum.photos/125/200",
      }),
    }
  );
  revalidateTag("books");
  return response.ok;
}
