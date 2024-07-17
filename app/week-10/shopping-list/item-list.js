"use client";

import React, { useState } from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <span className="text-xl mr-2 ml-8">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-8 py-2 rounded  ${
            sortBy === "name" ? "bg-[#3e92cc]" : "bg-[#16324f]"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`ml-2 px-5 py-2 rounded ${
            sortBy === "category" ? "bg-[#3e92cc]" : "bg-[#16324f]"
          }`}
        >
          Category
        </button>
      </div>

      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}

export default ItemList;