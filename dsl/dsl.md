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
