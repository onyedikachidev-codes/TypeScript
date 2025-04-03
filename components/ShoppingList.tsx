import React from "react";

import Item from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): React.JSX.Element {
  return (
    <div className="flex flex-col w-full text-center">
      <h1 className="text-5xl font-serif mt-3.5">Shopping List</h1>
      <ul className="text-2xl mt-20">
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
