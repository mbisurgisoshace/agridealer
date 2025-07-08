import { getOrderById } from "@/services/Orders";
import { getAllProducts } from "@/services/Products";
import OrderProductsTable from "@/components/OrderProductsTable";
import { OrderProductView } from "@/components/OrderProductsTable/columns";

export default async function OrderPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const allProducts = await getAllProducts();
  const order = await getOrderById(parseInt(orderId));

  const generateData = (): OrderProductView[] => {
    const items = order?.PurchaseOrderItem || [];
    return items.map((item) => {
      const product = allProducts.find(
        (p) =>
          p.id === item.productId &&
          p.productCompanyId === item.productCompanyId
      );
      return {
        ...product!,
        orderItemId: item.id,
        quantity: item.quantity,
        orderDate: item.orderDate,
        description: product?.description || "-",
      };
    });
  };

  return (
    <div>
      <h3 className="flex items-center gap-2 text-muted-foreground">
        {`${order?.Customer.name}'s ${
          order?.isQuote ? "Quote" : "Purchase Order"
        } `}{" "}
        <span className="text-xl font-semibold text-foreground">{`${
          order?.isQuote ? "QT" : "PO"
        }#${order?.id}`}</span>
      </h3>
      <OrderProductsTable data={generateData()} isEditable />
    </div>
  );
}
