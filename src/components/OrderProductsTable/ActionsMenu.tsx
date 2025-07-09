import { useEffect, useState } from "react";
import { IconDotsVertical } from "@tabler/icons-react";

import { ProductCompany } from "../../../generated/prisma";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { OrderProductView } from "./columns";
import { getCompanyById } from "@/services/Companies";
import { getProductByIdAndCompany, getProducts } from "@/services/Products";

import SeedProductsTable from "../SelectProductsTable/SeedProductsTable";
import { Product, Seed } from "../SelectProductsTable/useSelectProductsTable";
import RegularProductsTable from "../SelectProductsTable/RegularProductsTable";
import { updateOrderItem } from "@/services/Orders";

interface ActionsMenuProps {
  orderItem: OrderProductView;
}

export default function ActionsMenu({ orderItem }: ActionsMenuProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>();
  const [company, setCompany] = useState<ProductCompany>();

  async function fetchData() {
    const company = await getCompanyById(orderItem.productCompanyId);
    const product = await getProductByIdAndCompany(
      orderItem.id,
      orderItem.productCompanyId
    );
    const products = await getProducts(company.companyType);

    setProduct(product);
    setCompany(company);
    setProducts(products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onUpdateProduct = async (
    product: Product,
    quantity: number,
    note: string
  ) => {
    const updatedItem = {
      note,
      quantity,
      productId: product.id,
      orderDate: orderItem.orderDate!,
      productCompanyId: product.productCompanyId,
    };

    await updateOrderItem(orderItem.orderItemId!, updatedItem);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="h-8 w-8 p-0">
          <IconDotsVertical size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              Edit item
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[1060px]">
            <DialogHeader>
              <DialogTitle>Update Order Item</DialogTitle>
            </DialogHeader>
            {company && company.companyType === "Regular" && (
              <RegularProductsTable
                products={products}
                onAddProduct={() => {}}
                productNote={orderItem.note}
                onUpdateProduct={onUpdateProduct}
              />
            )}
            {company && company.companyType !== "Regular" && product && (
              <SeedProductsTable
                products={products}
                onAddProduct={() => {}}
                product={product as Seed}
                productNote={orderItem.note}
                onUpdateProduct={onUpdateProduct}
                productQuantity={orderItem.quantity}
                cropType={(product as Seed).cropType}
              />
            )}
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
