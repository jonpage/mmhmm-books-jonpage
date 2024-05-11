import BookCard from "./BookCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-[111px]">
      <section>
        <h1 className="text-[42px] font-bold mb-10">Bookshelf</h1>
        <div className="flex flex-col justify-between gap-[36px]">
          {[...Array(3)].map((_, i) => (
            <BookCard key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
