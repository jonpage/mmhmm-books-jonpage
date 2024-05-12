import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import TrashLogo from "./trash.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { deleteBook } from "./actions";

export default function DeleteBookButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const deleteBookWithId = deleteBook.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger>
        <Image src={TrashLogo} alt="Delete book" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete &ldquo;
            {title}
            &rdquo;.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <form action={deleteBookWithId}>
            <DialogClose asChild>
              <Button type="submit" variant="destructive">
                Delete
              </Button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
