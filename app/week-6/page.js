"use client";

import React from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-[#2a628f]">
      <h1 className="text-3xl font-bold mb-2 ml-16 p-4 text-white">
        Shopping List
      </h1>
      <h2 className="text-xl font-bold ml-8 text-white">Add a new Item</h2>
      <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}

export default Page;