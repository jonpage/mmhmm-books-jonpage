import Image from "next/image";

import DeleteBookButton from "./DeleteBookButtton";

export type BookDetails = {
  id?: string;
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
};

export default function BookCard({
  id,
  title,
  author,
  description,
  imageUrl,
}: BookDetails) {
  return (
    <div className="grid grid-cols-[125px_1fr_21px] gap-4 items-start p-[15px] rounded-lg border-[#f1f1f1] min-w-[350px] shadow-book md:min-w-[571px]">
      <Image
        src={imageUrl ?? `https://picsum.photos/125/200`}
        width={125}
        height={200}
        alt="Book cover"
      />
      <Details title={title} author={author} description={description} />
      {id ? <DeleteBookButton id={id} title={title} /> : null}
    </div>
  );
}

function Details({ title, author, description }: BookDetails) {
  return (
    <div className="flex flex-col items-start gap-[10px] max-w-[393px]">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-[#5f5f5f] font-medium text-xs leading-normal">
        {author}
      </p>
      <p className="text-sm max-w-[343px]">{description}</p>
    </div>
  );
}
