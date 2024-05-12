import { Suspense } from "react";
import BookList from "./_components/BookList";
import BookListFallback from "./_components/BookListFallback";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-[111px]">
      <section>
        <h1 className="text-[42px] font-bold mb-10">Bookshelf</h1>
        <Suspense fallback={<BookListFallback />}>
          <BookList />
        </Suspense>
      </section>
    </main>
  );
}
