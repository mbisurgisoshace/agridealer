import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CreateQuote() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-primary w-fit px-0 text-left">
          Create Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[760px]">
        <DialogHeader>
          <DialogTitle>Create a Quote</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
