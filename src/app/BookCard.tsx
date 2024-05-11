import Image from "next/image";
import TrashLogo from "./trash.svg";

export default function BookCard() {
  return (
    <div className="flex items-start gap-4 p-[15px] rounded-lg border-[#f1f1f1] shadow-book">
      {/* Image */}
      <Image
        src={`https://picsum.photos/125/200`}
        width={125}
        height={200}
        alt="Book cover"
      />
      {/* Details */}
      <Details />
      {/* Controls */}
      <button>
        <Image alt="Delete Book" src={TrashLogo} />
      </button>
    </div>
  );
}

function Details() {
  return (
    <div className="flex flex-col items-start gap-[10px] max-w-[393px]">
      <h2 className="font-bold text-xl">Book Title</h2>
      <p className="text-[#5f5f5f] font-medium text-xs leading-normal">
        Author Name
      </p>
      <p className="text-sm max-w-[343px]">
        No matter your goals, Atomic Habits offers a proven framework for
        improving--every day. James Clear, one of the worlds leading experts on
        habit formation, reveals practical strategies that will teach you
        exactly how to form good habits, break bad ones, and master the tiny
        behaviors that lead to remarkable results.
      </p>
    </div>
  );
}
