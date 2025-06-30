import Link from "next/link";

import { PurchaseOrder as Quote } from "../../../../../generated/prisma";

import { Button } from "@/components/ui/button";

interface QuotesProps {
  quotes: Quote[];
}

export default function Quotes({ quotes }: QuotesProps) {
  return (
    <div className="flex flex-col">
      {quotes.map((qt) => (
        <Link key={qt.id} href={`/quotes/${qt.id}`}>
          <Button
            size={"sm"}
            variant={"link"}
            className="text-foreground w-fit px-0 text-left"
          >
            {`QT# ${qt.id}`}
          </Button>
        </Link>
      ))}
    </div>
  );
}
