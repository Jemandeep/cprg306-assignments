import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <strong>{name}</strong> - {quantity} ({category})
    </li>
  );
};

export default Item;
