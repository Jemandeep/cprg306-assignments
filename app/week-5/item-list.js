"use client";

import React, { useState, useEffect } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const buttonStyle = isActive => ({
    backgroundColor: isActive ? 'lightblue' : 'white',
    border: '2px solid #000',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#000',
    transition: 'background-color 0.3s, color 0.3s',
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '20px' }}>
        <button
          style={buttonStyle(sortBy === 'name')}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          style={buttonStyle(sortBy === 'category')}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
