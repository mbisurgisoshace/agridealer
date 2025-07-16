# 🧱 DSL Parsing by ChatGPT

This document shows different prompts done to ChatGPT for parsing the provided DSL, and see the parsed response done on different frameworks. 

---

## 🔹 Code Parsing


```text
Hey, I am working on an Agnostic DSL languaje to build apps with it, and that it then can be parse into actual code (either react, react native, flutter, swift, etc). If I send you the DSL that I have so far, can I ask you to try to use it and parse it into react code, to see if you are able to create those components based on the DSL?
```

```text
From the entire DSL I will sent, there is a definition of a Customer List Screen. That is the page I want you to try to parse. But take into account the whole DSL to build it, cause some blocks are built with other DSL blocks
```

### 🔸 `CustomerListPage`

#### 🔸 React Parsing 

```jsx
// CustomerListPage.tsx
import { useState } from "react";
import { CustomerTable } from "./CustomerTable";
import { Button } from "./ui/Button";
import { AddCustomerModal } from "./AddCustomerModal";

export function CustomerListPage({ customers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Customers</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </header>

      <CustomerTable customers={customers} />

      <AddCustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          // handle submit
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
```

#### 🔸 React Native Parsing 

```jsx
// CustomerListPage.tsx
import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import CustomerRow from "./CustomerRow";
import AddCustomerModal from "./AddCustomerModal";

export default function CustomerListPage({ customers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Customers</Text>
        <Button title="Add New" onPress={() => setIsModalOpen(true)} />
      </View>

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CustomerRow customer={item} />}
      />

      <AddCustomerModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          // handle submit
          setIsModalOpen(false);
        }}
      />
    </View>
  );
}
```

#### 🔸 Angular Parsing

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
})
export class CustomerListPageComponent {
  @Input() customers: any[] = [];
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  handleSubmit(customer: any) {
    // handle form submit
    this.isModalOpen = false;
  }
}
```

```html
<div class="page-container">
  <div class="header">
    <h1>Customers</h1>
    <button (click)="openModal()">Add New</button>
  </div>

  <app-customer-table [customers]="customers"></app-customer-table>

  <app-add-customer-modal
    [visible]="isModalOpen"
    (close)="isModalOpen = false"
    (submit)="handleSubmit($event)"
  ></app-add-customer-modal>
</div>
```

### 🔸 `CustomerTable`

#### 🔸 React Parsing 

```jsx
// CustomerTable.tsx
import { CustomerRow } from "./CustomerRow";

export function CustomerTable({ customers }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quotes</th>
          <th>Purchase Orders</th>
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
```

#### 🔸 React Native Parsing 

```jsx
// CustomerRow.tsx
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function CustomerRow({ customer }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ fontWeight: "600" }}>{customer.name}</Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View style={{ flex: 1 }}>
          {customer.quotes.length === 0 ? (
            <Button title="Create Quote" onPress={() => createQuote(customer)} />
          ) : (
            customer.quotes.map((q) => (
              <TouchableOpacity key={q.id} onPress={() => navigateTo(`/quotes/${q.id}`)}>
                <Text>{q.name}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
        <View style={{ flex: 1 }}>
          {customer.orders.length === 0 ? (
            <Button title="Create Purchase Order" onPress={() => createOrder(customer)} />
          ) : (
            customer.orders.map((o) => (
              <TouchableOpacity key={o.id} onPress={() => navigateTo(`/orders/${o.id}`)}>
                <Text>{o.name}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
    </View>
  );
}
```

#### 🔸 Angular Parsing

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
})
export class CustomerTableComponent {
  @Input() customers: any[] = [];
}
```

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Quotes</th>
      <th>Purchase Orders</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let customer of customers">
      <app-customer-row [customer]="customer"></app-customer-row>
    </tr>
  </tbody>
</table>
```

### 🔸 `CustomerRow`

#### 🔸 React Parsing 

```jsx
// CustomerRow.tsx
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

export function CustomerRow({ customer }) {
  return (
    <tr>
      <td>{customer.name}</td>
      <td>
        {customer.quotes.length === 0 ? (
          <Button onClick={() => createQuote(customer)}>Create Quote</Button>
        ) : (
          customer.quotes.map((q) => (
            <Link key={q.id} to={`/quotes/${q.id}`} className="block">
              {q.name}
            </Link>
          ))
        )}
      </td>
      <td>
        {customer.orders.length === 0 ? (
          <Button onClick={() => createOrder(customer)}>Create Purchase Order</Button>
        ) : (
          customer.orders.map((o) => (
            <Link key={o.id} to={`/orders/${o.id}`} className="block">
              {o.name}
            </Link>
          ))
        )}
      </td>
    </tr>
  );
}
```

#### 🔸 React Native Parsing 

```jsx
// CustomerRow.tsx
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function CustomerRow({ customer }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ fontWeight: "600" }}>{customer.name}</Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View style={{ flex: 1 }}>
          {customer.quotes.length === 0 ? (
            <Button title="Create Quote" onPress={() => createQuote(customer)} />
          ) : (
            customer.quotes.map((q) => (
              <TouchableOpacity key={q.id} onPress={() => navigateTo(`/quotes/${q.id}`)}>
                <Text>{q.name}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
        <View style={{ flex: 1 }}>
          {customer.orders.length === 0 ? (
            <Button title="Create Purchase Order" onPress={() => createOrder(customer)} />
          ) : (
            customer.orders.map((o) => (
              <TouchableOpacity key={o.id} onPress={() => navigateTo(`/orders/${o.id}`)}>
                <Text>{o.name}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
    </View>
  );
}
```

#### 🔸 Angular Parsing

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-customer-row]',
  templateUrl: './customer-row.component.html',
})
export class CustomerRowComponent {
  @Input() customer: any;

  createQuote(customer: any) {
    // call quote service
  }

  createOrder(customer: any) {
    // call order service
  }
}
```

```html
<td>{{ customer.name }}</td>

<td>
  <ng-container *ngIf="!customer.quotes?.length">
    <button (click)="createQuote(customer)">Create Quote</button>
  </ng-container>
  <ng-container *ngIf="customer.quotes?.length">
    <a *ngFor="let q of customer.quotes" [routerLink]="['/quotes', q.id]">{{ q.name }}</a>
  </ng-container>
</td>

<td>
  <ng-container *ngIf="!customer.orders?.length">
    <button (click)="createOrder(customer)">Create Purchase Order</button>
  </ng-container>
  <ng-container *ngIf="customer.orders?.length">
    <a *ngFor="let o of customer.orders" [routerLink]="['/orders', o.id]">{{ o.name }}</a>
  </ng-container>
</td>

```
