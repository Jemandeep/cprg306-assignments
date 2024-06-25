// page.js
"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (name) => {
    // Clean up the item name
    const cleanedName = name.split(',')[0].trim().replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
