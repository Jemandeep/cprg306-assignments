export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-2 my-2 rounded shadow-md">
        <div className="font-bold">{name}</div>
        <div>Quantity: {quantity}</div>
        <div>Category: {category}</div>
      </li>
    );
  }