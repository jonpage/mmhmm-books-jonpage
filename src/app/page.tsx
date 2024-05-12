import { Suspense } from "react";
import BookList from "./_components/BookList";
import BookListFallback from "./_components/BookListFallback";
import AddBookButton from "./_components/AddBookButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-[111px]">
      <section>
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-[42px] font-bold">Bookshelf</h1>
          <AddBookButton />
        </header>
        <Suspense fallback={<BookListFallback />}>
          <BookList />
        </Suspense>
      </section>
    </main>
  );
}
