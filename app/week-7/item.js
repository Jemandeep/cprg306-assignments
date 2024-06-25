import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li onClick={() => onSelect(name)} style={{ cursor: 'pointer', marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <strong>{name}</strong> - Buy {quantity} in {category}
    </li>
  );
};

export default Item;