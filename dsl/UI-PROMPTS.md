# 🧱 UI Generation by ChatGPT

This document shows different prompts done to ChatGPT for creating different UIs' based on some feature description.

---

## 🔹 Code Generation

```text
I need to build a react feature. Its a customer page, where we can see a list of customers, and a button to add a modal for adding new customers. The customers table has 3 columns, which are Customer name, quotes and purchase orders. For each customer we need to show the list of quotes or purchase orders it has, and if they have, these need to be links so we can navigate to each one. But if there is no quote or no purchase order, we should show a button to create a quote or a purchase order instead.
```

### 🔸 `CustomerListPage`

#### 🔸 React Generation

```jsx
// CustomerPage.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Link } from "react-router-dom"; // or your routing lib

type Quote = { id: string; name: string };
type PurchaseOrder = { id: string; name: string };

type Customer = {
  id: string;
  name: string;
  quotes: Quote[];
  purchaseOrders: PurchaseOrder[];
};

const sampleCustomers: Customer[] = [
  {
    id: "1",
    name: "Acme Inc.",
    quotes: [{ id: "q1", name: "Quote 1" }],
    purchaseOrders: [],
  },
  {
    id: "2",
    name: "Globex Corp.",
    quotes: [],
    purchaseOrders: [{ id: "po1", name: "PO 1" }],
  },
];

export default function CustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers);
  const [open, setOpen] = useState(false);

  const addCustomer = (name: string) => {
    const newCustomer: Customer = {
      id: Date.now().toString(),
      name,
      quotes: [],
      purchaseOrders: [],
    };
    setCustomers([...customers, newCustomer]);
    setOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add Customer</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Add New Customer</DialogHeader>
            <AddCustomerForm onAdd={addCustomer} />
          </DialogContent>
        </Dialog>
      </div>
      <CustomerTable customers={customers} />
    </div>
  );
}

function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <table className="w-full table-auto border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">Customer Name</th>
          <th className="p-2 border">Quotes</th>
          <th className="p-2 border">Purchase Orders</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <CustomerRow key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  );
}

function CustomerRow({ customer }: { customer: Customer }) {
  return (
    <tr className="border-t">
      <td className="p-2 border">{customer.name}</td>
      <td className="p-2 border">
        {customer.quotes.length > 0 ? (
          <ul className="space-y-1">
            {customer.quotes.map((quote) => (
              <li key={quote.id}>
                <Link to={`/quotes/${quote.id}`} className="text-blue-600 underline">
                  {quote.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Button size="sm" variant="outline">Create Quote</Button>
        )}
      </td>
      <td className="p-2 border">
        {customer.purchaseOrders.length > 0 ? (
          <ul className="space-y-1">
            {customer.purchaseOrders.map((po) => (
              <li key={po.id}>
                <Link to={`/purchase-orders/${po.id}`} className="text-blue-600 underline">
                  {po.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Button size="sm" variant="outline">Create PO</Button>
        )}
      </td>
    </tr>
  );
}

function AddCustomerForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name.trim()) onAdd(name);
      }}
      className="space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Customer Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}
```

## 🔹 Code Generation

```text
I need to build a react feature. Its a customer page, where we can see a list of customers, and a button to add a modal for adding new customers. The customers table has 3 columns, which are Customer name, quotes and purchase orders. For each customer we need to show the list of quotes or purchase orders it has, and if they have, these need to be links so we can navigate to each one. But if there is no quote or no purchase order, we should show a button to create a quote or a purchase order instead.
```

```text
The filtering selection product, instead of using a select. Can we have a table, where each column is the corresponding attribute, and it has a single row, and on each cell we have the list of filtered attributes values based on the previous column selections
```

### 🔸 `PurchasOrderModal`

#### 🔸 React Generation

```jsx
// CreateOrderModal.tsx
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SeedProductTableSelector from "./SeedProductTableSelector"; // <- This is your cascading selector

type Company = { id: string; name: string; sellsSeeds: boolean };

type SeedProduct = {
  id: string;
  attr1: string;
  attr2: string;
  attr3: string;
  attr4: string;
  attr5: string;
  price: number;
};

type OrderItem = {
  product: SeedProduct;
  quantity: number;
};

export default function CreateOrderModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [products, setProducts] = useState<SeedProduct[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const navigate = useNavigate();

  // Mock fetch functions — replace with real API calls
  const fetchSeedProducts = async (): Promise<SeedProduct[]> => {
    return [
      { id: "1", attr1: "Corn", attr2: "Hybrid", attr3: "Early", attr4: "High Yield", attr5: "Green", price: 120 },
      { id: "2", attr1: "Corn", attr2: "Hybrid", attr3: "Late", attr4: "Resistant", attr5: "Green", price: 110 },
      { id: "3", attr1: "Wheat", attr2: "Organic", attr3: "Mid", attr4: "Resistant", attr5: "Yellow", price: 90 },
      // Add more for testing
    ];
  };

  const fetchRegularProducts = async (): Promise<SeedProduct[]> => {
    return []; // Not implemented yet
  };

  const fetchProducts = async (company: Company) => {
    const data = company.sellsSeeds ? await fetchSeedProducts() : await fetchRegularProducts();
    setProducts(data);
  };

  const handleAddItem = (item: OrderItem) => {
    setOrderItems([...orderItems, item]);
  };

  const handleSubmitOrder = async () => {
    // Simulate backend call
    const newOrderId = "12345"; // Replace with real API call
    onOpenChange(false);
    navigate(`/purchase-orders/${newOrderId}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>Create Purchase Order</DialogHeader>

        <CompanySelector
          onSelect={(c) => {
            setCompany(c);
            fetchProducts(c);
            setOrderItems([]); // clear previous
          }}
        />

        {company?.sellsSeeds && (
          <SeedProductTableSelector products={products} onAdd={handleAddItem} />
        )}

        {/* Future: RegularProductSelector if !company?.sellsSeeds */}

        <OrderReviewTable items={orderItems} />

        <div className="text-right mt-4">
          <Button onClick={handleSubmitOrder} disabled={!company || orderItems.length === 0}>
            Submit Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

```jsx
function CompanySelector({ onSelect }: { onSelect: (c: Company) => void }) {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    // Replace with API call
    setCompanies([
      { id: "1", name: "AgroCorp", sellsSeeds: true },
      { id: "2", name: "RegularCo", sellsSeeds: false },
    ]);
  }, []);

  return (
    <div className="my-4">
      <label className="block mb-1 font-medium">Select Company</label>
      <select
        onChange={(e) => {
          const selected = companies.find(c => c.id === e.target.value);
          if (selected) onSelect(selected);
        }}
        className="border rounded p-2 w-full"
      >
        <option value="">-- Select --</option>
        {companies.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
    </div>
  );
}
```

```jsx
function OrderReviewTable({ items }: { items: OrderItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="font-bold mb-2">Order Summary</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Unit Price</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product, quantity }, index) => (
            <tr key={index}>
              <td className="border p-2">{product.attr1} / {product.attr2} / {product.attr3}</td>
              <td className="border p-2">{quantity}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">${(quantity * product.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

```jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type SeedProduct = {
  id: string;
  attr1: string;
  attr2: string;
  attr3: string;
  attr4: string;
  attr5: string;
  price: number;
};

type Props = {
  products: SeedProduct[];
  onAdd: (product: SeedProduct, quantity: number) => void;
};

const attributeKeys: (keyof SeedProduct)[] = ["attr1", "attr2", "attr3", "attr4", "attr5"];

export default function SeedProductTableSelector({ products, onAdd }: Props) {
  const [selection, setSelection] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);

  // Filter products based on current selection
  const getFilteredProducts = (depth: number) => {
    return products.filter((p) =>
      attributeKeys.slice(0, depth).every((key) => !selection[key] || p[key] === selection[key])
    );
  };

  const optionsForColumn = (key: keyof SeedProduct, depth: number) => {
    const filtered = getFilteredProducts(depth);
    return Array.from(new Set(filtered.map((p) => p[key])));
  };

  const updateSelection = (key: keyof SeedProduct, value: string) => {
    const newSelection: { [key: string]: string } = { ...selection };
    newSelection[key] = value;

    // Clear selections to the right
    const currentIndex = attributeKeys.indexOf(key);
    for (let i = currentIndex + 1; i < attributeKeys.length; i++) {
      delete newSelection[attributeKeys[i]];
    }

    setSelection(newSelection);
  };

  const selectedProduct = products.find((p) =>
    attributeKeys.every((key) => p[key] === selection[key])
  );

  const reset = () => {
    setSelection({});
    setQuantity(1);
  };

  return (
    <div className="space-y-4 mt-4">
      <table className="w-full table-fixed border">
        <thead>
          <tr className="bg-gray-100">
            {attributeKeys.map((key) => (
              <th key={key} className="p-2 border text-center capitalize">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {attributeKeys.map((key, index) => {
              const options = optionsForColumn(key, index);
              return (
                <td key={key} className="border p-2 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    {options.map((val) => (
                      <button
                        key={val}
                        onClick={() => updateSelection(key, val)}
                        className={`px-2 py-1 rounded border text-sm ${
                          selection[key] === val
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>

      {selectedProduct && (
        <div className="flex items-center gap-4">
          <div>
            <span className="font-bold">Price:</span> ${selectedProduct.price}
          </div>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded p-2 w-20"
          />
          <Button
            onClick={() => {
              onAdd(selectedProduct, quantity);
              reset();
            }}
          >
            Add to Order
          </Button>
        </div>
      )}
    </div>
  );
}
```