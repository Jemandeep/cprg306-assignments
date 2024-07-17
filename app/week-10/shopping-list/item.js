import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="container ml-8 mb-4 border-2 border-gray-300 pl-1 p-2 list-none cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <span className="font-bold">{name}</span>
      <p>
        Buy {quantity} {category}
      </p>
    </li>
  );
};

export default Item;