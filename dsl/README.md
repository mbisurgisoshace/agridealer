# 🧱 DSL Blocks Specification

This document outlines the specification and semantics for the custom UI component DSL used to describe platform-agnostic UI blocks. Each block describes a reusable UI pattern that can be parsed and rendered as React, Flutter, React Native, or other implementations.

---

## 🔹 Global Tags & Structure

### `<Block>`

Defines a component.

**Children:**

- `<BlockName>` (required)
- `<BlockProps>` (optional)
- `<BlockChildren>` (optional)
- `<BlockRender>` (optional)
- `<BlockBehavior>` (optional)
- `<BlockLogic>` (optional)
- `<BlockStyling>` (optional)

---

## 🔹 Core Tags Reference

### `<BlockName>`

Defines the name of the block/component. This is used as an identifier for usage and rendering logic.

### `<BlockProps>`

Container tag for multiple `<BlockProp>` definitions. Describes the input props for the block.

### `<BlockProp>`

Defines an individual prop for a block.

**Children:**

- `<PropName>` — Name of the prop (string, required)
- `<PropType>` — Data type (e.g. string, number, boolean, array, dsl)
- `<PropRequired>` — Whether the prop is required (boolean)
- `<PropDefault>` — Optional default value
- `<PropDescription>` — Optional description (string)

### `<BlockChildren>`

Defines the internal children of a block. Can include `<Slot>`, direct `<Block>`s, or conditional/rendering logic like `<If>`, `<For>`, or `<Inject>`.

### `<BlockRender>`

Contains a declarative structure that defines how the block renders its internal layout — often includes nested blocks, slots, and dynamic logic.

### `<BlockBehavior>`

Defines interactive behavior and events such as clicks, submissions, etc.

**Supported children:**

- `<OnEvent name="eventName">` with nested `<Action>`s

### `<BlockLogic>`

Optional placeholder for custom business logic, computed fields, or binding expressions. Implementation-specific.

### `<BlockStyling>`

Defines styling hooks or system-specific style options (e.g., className for React, decoration for Flutter).

### `<Slot name="..." />`

Placeholder for dynamic children passed into a component.

### `<For each="...">...</For>`

Loop construct to iterate over an array.

### `<If condition="...">...</If>`

Conditionally renders children if the condition evaluates truthy.

### `<Inject value="..." />`

Injects a DSL-defined value, usually used for rendering a dynamic block or fragment passed as data.

### `<ApiCall />`

---

## 🧲 `Sidebar` Block

### Purpose

Renders a list of navigational sidebar items based on a dynamic list of items passed by a parent block.

### Structure

```xml
<Block>
  <BlockName>Sidebar</BlockName>

  <BlockProps>
    <BlockProp>
      <PropName>items</PropName>
      <PropType>array</PropType>
      <ItemSchema>
        <Prop>
          <PropName>href</PropName>
          <PropType>string</PropType>
          <PropRequired>true</PropRequired>
        </Prop>
        <Prop>
          <PropName>value</PropName>
          <PropType>string</PropType>
        </Prop>
        <Prop>
          <PropName>render</PropName>
          <PropType>dsl</PropType>
          <PropDescription>Custom DSL block to render the item content</PropDescription>
        </Prop>
      </ItemSchema>
    </BlockProp>
  </BlockProps>

  <BlockRender>
    <For each="item in items">
      <Block>
        <BlockProps>
          <BlockProp>
            <PropName>href</PropName>
            <PropValue>{item.href}</PropValue>
          </BlockProp>
        </BlockProps>
        <BlockChildren>
          <If condition="item.render">
            <Inject value="{item.render}" />
          </If>
          <If condition="!item.render">
            <Block>
              <BlockName>Text</BlockName>
              <BlockProps>
                <BlockProp>
                  <PropName>content</PropName>
                  <PropValue>{item.value}</PropValue>
                </BlockProp>
              </BlockProps>
            </Block>
          </If>
        </BlockChildren>
      </Block>
    </For>
  </BlockRender>
</Block>
```

## 🧲 `SidebarItem` Block

### Purpose

Wraps content in a stylized clickable sidebar item. Automatically renders a Link component internally.

### Structure

```xml
<Block>
  <BlockName>SidebarItem</BlockName>

  <BlockProps>
    <BlockProp>
      <PropName>href</PropName>
      <PropType>string</PropType>
      <PropRequired>true</PropRequired>
    </BlockProp>
    <BlockProp>
      <PropName>active</PropName>
      <PropType>boolean</PropType>
      <PropDefault>false</PropDefault>
    </BlockProp>
  </BlockProps>

  <BlockChildren>
    <Slot name="default" />
  </BlockChildren>

  <BlockRender>
    <Block>
      <BlockName>Link</BlockName>
      <BlockProps>
        <BlockProp>
          <PropName>href</PropName>
          <PropValue>{href}</PropValue>
        </BlockProp>
      </BlockProps>
      <BlockChildren>
        <Slot name="default" />
      </BlockChildren>
    </Block>
  </BlockRender>
</Block>
```

## 🧲 `Link` Block

### Purpose

Platform-agnostic hyperlink component that handles navigation logic.

### Structure

```xml
<Block>
  <BlockName>Link</BlockName>

  <BlockProps>
    <BlockProp>
      <PropName>href</PropName>
      <PropType>string</PropType>
      <PropRequired>true</PropRequired>
      <PropDescription>URL to navigate to</PropDescription>
    </BlockProp>
  </BlockProps>

  <BlockChildren>
    <Slot name="default" />
  </BlockChildren>

  <BlockBehavior>
    <OnEvent name="click">
      <Action type="navigate" target="{href}" />
    </OnEvent>
  </BlockBehavior>

  <BlockLogic />
  <BlockStyling />
</Block>
```

## 🧲 `Table` Block

### Purpose

Represents a container for tabular data. Can optionally support props like striped or bordered, and accepts header, row, and cell components as children.

### Structure

```xml
<Block>
  <BlockName>Table</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>striped</PropName>
      <PropType>boolean</PropType>
      <PropDefault>true</PropDefault>
    </BlockProp>
  </BlockProps>
  <BlockChildren>
    <Slot name="default" />
  </BlockChildren>
</Block>
```

## 🧲 `TableHeader` Block

### Purpose

Defines the header section of a table, typically composed of multiple column headers. Used within the Table block.

### Structure

```xml
<Block>
  <BlockName>TableHeader</BlockName>
  <BlockChildren>
    <Slot name="default" />
  </BlockChildren>
</Block>
```

## 🧲 `TableRow` Block

### Purpose

Defines a row within a table. Commonly used in conjunction with a For loop to render dynamic rows based on data.

### Structure

```xml
<Block>
  <BlockName>TableRow</BlockName>
  <BlockChildren>
    <Slot name="default" />
  </BlockChildren>
</Block>
```

## 🧲 `TableCell` Block

### Purpose

Defines a single cell inside a row. Supports alignment and custom content such as text, buttons, or nested components.

### Structure

```xml
<Block>
  <BlockName>TableCell</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>align</PropName>
      <PropType>string</PropType>
      <PropDefault>left</PropDefault>
    </BlockProp>
  </BlockProps>
  <BlockChildren>
    <Slot name="default" />
  </BlockChildren>
</Block>
```

## 🧩 DSL Example: Customer List Screen

This section models the UI of the Customer List screen using DSL blocks in modular format.

---

### 🔸 `CustomerListPage` Block

```xml
<Block>
  <BlockName>CustomerListPage</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>customers</PropName>
      <PropType>array</PropType>
      <ItemSchema>
        <Prop>
          <PropName>name</PropName>
          <PropType>string</PropType>
        </Prop>
        <Prop>
          <PropName>quotes</PropName>
          <PropType>array</PropType>
        </Prop>
        <Prop>
          <PropName>orders</PropName>
          <PropType>array</PropType>
        </Prop>
      </ItemSchema>
    </BlockProp>
  </BlockProps>

  <BlockChildren>
    <Block>
      <BlockName>Header</BlockName>
      <BlockChildren>
        <Block>
          <BlockName>Text</BlockName>
          <BlockProps>
            <BlockProp>
              <PropName>content</PropName>
              <PropValue>Customers</PropValue>
            </BlockProp>
          </BlockProps>
        </Block>
        <Block>
          <BlockName>Button</BlockName>
          <BlockProps>
            <BlockProp>
              <PropName>label</PropName>
              <PropValue>Add New</PropValue>
            </BlockProp>
            <BlockProp>
              <PropName>onClick</PropName>
              <PropValue>openAddCustomerModal</PropValue>
            </BlockProp>
          </BlockProps>
        </Block>
      </BlockChildren>
    </Block>

    <Block>
      <BlockName>CustomerTable</BlockName>
      <BlockProps>
        <BlockProp>
          <PropName>customers</PropName>
          <PropValue>{customers}</PropValue>
        </BlockProp>
      </BlockProps>
    </Block>
  </BlockChildren>
</Block>
```

### 🔸 `CustomerTable` Block

```xml
<Block>
  <BlockName>CustomerTable</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>customers</PropName>
      <PropType>array</PropType>
    </BlockProp>
  </BlockProps>

   <BlockRender>
    <Block>
      <BlockName>Table</BlockName>
      <BlockChildren>
        <Block>
          <BlockName>TableHeader</BlockName>
          <BlockChildren>
            <Block>
              <BlockName>TableCell</BlockName>
              <BlockChildren>
                <Block>
                  <BlockName>Text</BlockName>
                  <BlockProps>
                    <BlockProp>
                      <PropName>content</PropName>
                      <PropValue>Name</PropValue>
                    </BlockProp>
                  </BlockProps>
                </Block>
              </BlockChildren>
            </Block>
            <Block>
              <BlockName>TableCell</BlockName>
              <BlockChildren>
                <Block>
                  <BlockName>Text</BlockName>
                  <BlockProps>
                    <BlockProp>
                      <PropName>content</PropName>
                      <PropValue>Quotes</PropValue>
                    </BlockProp>
                  </BlockProps>
                </Block>
              </BlockChildren>
            </Block>
            <Block>
              <BlockName>TableCell</BlockName>
              <BlockChildren>
                <Block>
                  <BlockName>Text</BlockName>
                  <BlockProps>
                    <BlockProp>
                      <PropName>content</PropName>
                      <PropValue>Purchase Orders</PropValue>
                    </BlockProp>
                  </BlockProps>
                </Block>
              </BlockChildren>
            </Block>
          </BlockChildren>
        </Block>
        <For each="customer in customers">
          <Block>
            <BlockName>CustomerRow</BlockName>
            <BlockProps>
              <BlockProp>
                <PropName>customer</PropName>
                <PropValue>{customer}</PropValue>
              </BlockProp>
            </BlockProps>
          </Block>
        </For>
      </BlockChildren>
    </Block>
  </BlockRender>
</Block>
```

### 🔸 `CustomerRow` Block

```xml
<Block>
  <BlockName>CustomerRow</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>customer</PropName>
      <PropType>object</PropType>
    </BlockProp>
  </BlockProps>

  <BlockRender>
    <Block>
      <BlockName>TableRow</BlockName>
      <BlockChildren>
        <Block>
          <BlockName>TableCell</BlockName>
          <BlockChildren>
            <Block>
              <BlockName>Text</BlockName>
              <BlockProps>
                <BlockProp>
                  <PropName>content</PropName>
                  <PropValue>{customer.name}</PropValue>
                </BlockProp>
              </BlockProps>
            </Block>
          </BlockChildren>
        </Block>

        <Block>
          <BlockName>TableCell</BlockName>
          <BlockChildren>
            <If condition="customer.quotes.length === 0">
              <Block>
                <BlockName>Button</BlockName>
                <BlockProps>
                  <BlockProp>
                    <PropName>label</PropName>
                    <PropValue>Create Quote</PropValue>
                  </BlockProp>
                  <BlockProp>
                    <PropName>onClick</PropName>
                    <PropValue>{() => createQuote(customer)}</PropValue>
                  </BlockProp>
                </BlockProps>
              </Block>
            </If>
            <If condition="customer.quotes.length > 0">
              <For each="quote in customer.quotes">
                <Block>
                  <BlockName>Link</BlockName>
                  <BlockProps>
                    <BlockProp>
                      <PropName>href</PropName>
                      <PropValue>{`/quotes/${quote.id}`}</PropValue>
                    </BlockProp>
                  </BlockProps>
                  <BlockChildren>
                    <Block>
                      <BlockName>Text</BlockName>
                      <BlockProps>
                        <BlockProp>
                          <PropName>content</PropName>
                          <PropValue>{quote.name}</PropValue>
                        </BlockProp>
                      </BlockProps>
                    </Block>
                  </BlockChildren>
                </Block>
              </For>
            </If>
          </BlockChildren>
        </Block>

        <Block>
          <BlockName>TableCell</BlockName>
          <BlockChildren>
            <If condition="customer.orders.length === 0">
              <Block>
                <BlockName>Button</BlockName>
                <BlockProps>
                  <BlockProp>
                    <PropName>label</PropName>
                    <PropValue>Create Purchase Order</PropValue>
                  </BlockProp>
                  <BlockProp>
                    <PropName>onClick</PropName>
                    <PropValue>{() => createOrder(customer)}</PropValue>
                  </BlockProp>
                </BlockProps>
              </Block>
            </If>
            <If condition="customer.orders.length > 0">
              <For each="order in customer.orders">
                <Block>
                  <BlockName>Link</BlockName>
                  <BlockProps>
                    <BlockProp>
                      <PropName>href</PropName>
                      <PropValue>{`/orders/${order.id}`}</PropValue>
                    </BlockProp>
                  </BlockProps>
                  <BlockChildren>
                    <Block>
                      <BlockName>Text</BlockName>
                      <BlockProps>
                        <BlockProp>
                          <PropName>content</PropName>
                          <PropValue>{order.name}</PropValue>
                        </BlockProp>
                      </BlockProps>
                    </Block>
                  </BlockChildren>
                </Block>
              </For>
            </If>
          </BlockChildren>
        </Block>

      </BlockChildren>
    </Block>
  </BlockRender>
</Block>
```

### 🔸 `CustomerLinkList` Block
```xml
<Block>
  <BlockName>CustomerLinkList</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>items</PropName>
      <PropType>array</PropType>
    </BlockProp>
    <BlockProp>
      <PropName>type</PropName>
      <PropType>string</PropType>
    </BlockProp>
  </BlockProps>

  <BlockRender>
    <If condition="items.length > 0">
      <For each="item in items">
        <Block>
          <BlockName>Link</BlockName>
          <BlockProps>
            <BlockProp>
              <PropName>href</PropName>
              <PropValue>{`/${type}s/${item}`}</PropValue>
            </BlockProp>
            <BlockProp>
              <PropName>label</PropName>
              <PropValue>{item}</PropValue>
            </BlockProp>
          </BlockProps>
        </Block>
      </For>
    </If>

    <If condition="items.length === 0">
      <Block>
        <BlockName>Button</BlockName>
        <BlockProps>
          <BlockProp>
            <PropName>label</PropName>
            <PropValue>{`Create ${type === 'quote' ? 'Quote' : 'Purchase Order'}`}</PropValue>
          </BlockProp>
          <BlockProp>
            <PropName>variant</PropName>
            <PropValue>link</PropValue>
          </BlockProp>
        </BlockProps>
      </Block>
    </If>
  </BlockRender>
</Block>
```

### 🔸 `AddCustomerModal` Block
```xml
<Block>
  <BlockName>AddCustomerModal</BlockName>
  <BlockProps>
    <BlockProp>
      <PropName>isOpen</PropName>
      <PropType>boolean</PropType>
      <PropRequired>true</PropRequired>
    </BlockProp>
    <BlockProp>
      <PropName>onClose</PropName>
      <PropType>function</PropType>
    </BlockProp>
  </BlockProps>

  <BlockLogic>
    <Define name="handleSubmit">
      <Action type="api.call">
        <Endpoint>/api/customers</Endpoint>
        <Method>POST</Method>
        <Payload>{ formData }</Payload>
        <OnSuccess>
          <Action type="emit" name="customerAdded" />
          <Action type="call" fn="onClose" />
        </OnSuccess>
        <OnError>
          <Action type="toast.error" message="Failed to add customer" />
        </OnError>
      </Action>
    </Define>
  </BlockLogic>

  <BlockRender>
    <If condition="isOpen">
      <Block>
        <BlockName>Modal</BlockName>
        <BlockChildren>
          <Block>
            <BlockName>Form</BlockName>
            <BlockProps>
              <BlockProp>
                <PropName>onSubmit</PropName>
                <PropValue>{handleSubmit}</PropValue>
              </BlockProp>
            </BlockProps>
            <BlockChildren>
              <Block>
                <BlockName>FormField</BlockName>
                <BlockProps>
                  <BlockProp>
                    <PropName>name</PropName>
                    <PropValue>name</PropValue>
                  </BlockProp>
                  <BlockProp>
                    <PropName>label</PropName>
                    <PropValue>Customer Name</PropValue>
                  </BlockProp>
                  <BlockProp>
                    <PropName>type</PropName>
                    <PropValue>text</PropValue>
                  </BlockProp>
                </BlockProps>
              </Block>
              <Block>
                <BlockName>Button</BlockName>
                <BlockProps>
                  <BlockProp>
                    <PropName>type</PropName>
                    <PropValue>submit</PropValue>
                  </BlockProp>
                  <BlockProp>
                    <PropName>label</PropName>
                    <PropValue>Save</PropValue>
                  </BlockProp>
                </BlockProps>
              </Block>
              <Block>
                <BlockName>Button</BlockName>
                <BlockProps>
                  <BlockProp>
                    <PropName>label</PropName>
                    <PropValue>Cancel</PropValue>
                  </BlockProp>
                  <BlockProp>
                    <PropName>onClick</PropName>
                    <PropValue>{onClose}</PropValue>
                  </BlockProp>
                </BlockProps>
              </Block>
            </BlockChildren>
          </Block>
        </BlockChildren>
      </Block>
    </If>
  </BlockRender>
</Block>
```