import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CreatePurchaseOrder() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-primary w-fit px-0 text-left">
          New Purchase Order
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[760px]">
        <DialogHeader>
          <DialogTitle>Create a Purchase Order</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
