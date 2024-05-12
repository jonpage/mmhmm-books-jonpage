import BookCard, { BookDetails } from "./BookCard";

async function getBooks(): Promise<BookDetails[]> {
  const response = await fetch(
    "https://us-central1-all-turtles-interview.cloudfunctions.net/books",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer jonpage",
      },
      next: {
        tags: ["books"],
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export default async function BookList() {
  // get list of books
  const books = await getBooks();
  return (
    <div className="flex flex-col justify-between gap-[36px]">
      {books.map((book, i) => (
        <BookCard key={i} {...book} />
      ))}
    </div>
  );
}
