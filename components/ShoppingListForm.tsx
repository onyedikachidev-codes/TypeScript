import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const quantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  }

  return (
    <form className="flex items-center gap-3" onSubmit={handleSubmit}>
      <input
        className="pt-2.5 px-3 bg-blue-200 rounded-sm"
        type="text"
        placeholder="Product Name"
        ref={productInputRef}
      />
      <input
        className="pt-2.5 px-1.5 bg-blue-200 rounded-sm"
        type="number"
        min={1}
        ref={quantityInputRef}
      />
      <button type="submit" className="p-2 bg-blue-500 text-gray-100">
        Add Items
      </button>
    </form>
  );
}
