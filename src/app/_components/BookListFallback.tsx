import BookCardSkeleton from "./BookCardSkeleton";

export default function BookListFallback() {
  return (
    <div className="flex flex-col justify-between gap-[36px]">
      {[...Array(3)].map((_, i) => (
        <BookCardSkeleton key={i} />
      ))}
    </div>
  );
}
