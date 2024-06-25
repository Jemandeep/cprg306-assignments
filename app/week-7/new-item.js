import React, { useState } from "react";

function NewItem({ onAddItem }) {
  // State to hold form input values
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <div className="flex justify-left mt-2 ml-8 mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Item name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between gap-4 mb-4">
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            max="99"
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            placeholder="Quantity"
            className="shadow appearance-none border rounded flex-1 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline "
          />
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline flex-1"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#003559] hover:bg-[#061a40] text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          +
        </button>
      </form>
    </div>
  );
}
export default NewItem;