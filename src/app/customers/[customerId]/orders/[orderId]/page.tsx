import { getOrderById } from "@/services/Orders";
import { getAllProducts } from "@/services/Products";
import OrderProductsTable from "@/components/OrderProductsTable";
import { OrderProductView } from "@/components/OrderProductsTable/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function OrderPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const allProducts = await getAllProducts();
  const order = await getOrderById(parseInt(orderId));

  const generatedData: OrderProductView[] = (
    order?.PurchaseOrderItem || []
  ).map((item) => {
    const product = allProducts.find(
      (p) =>
        p.id === item.productId && p.productCompanyId === item.productCompanyId
    );
    return {
      ...product!,
      orderItemId: item.id,
      note: item.note || "",
      quantity: item.quantity,
      orderDate: item.orderDate,
      description: product?.description || "-",
    };
  });

  const bayerData = generatedData.filter(
    (item) => item.productCompanyName === "Bayer"
  );
  const otherData = generatedData.filter(
    (item) => item.productCompanyName !== "Bayer"
  );

  return (
    <div>
      <h3 className="flex items-center gap-2 text-muted-foreground mb-2">
        {`${order?.Customer.name}'s ${
          order?.isQuote ? "Quote" : "Purchase Order"
        } `}{" "}
        <span className="text-xl font-semibold text-foreground">{`${
          order?.isQuote ? "QT" : "PO"
        }#${order?.id}`}</span>
      </h3>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Bayer Products</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderProductsTable data={bayerData} isEditable />
          </CardContent>
        </Card>

        <Card>
          {/* <CardHeader>
            <CardTitle>Non Bayer Products</CardTitle>
          </CardHeader> */}
          <CardContent>
            <OrderProductsTable data={otherData} isEditable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
