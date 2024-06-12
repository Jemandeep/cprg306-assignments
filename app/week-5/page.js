"use client";

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '36px', fontWeight: 'bold' }}>Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
