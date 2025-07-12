import { useState } from "react";

//  Sử dụng props
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // event Submit cho Form
  function handleSubmit(e) {
    e.preventDefault(); // ngan chan reload trang
    if (!description) return; // neu khong co description thi return
    const newItem = {
      description,
      quantity,
      packed: false,
      id: "item_" + Date.now(),
    };
    // goi props handleAddItem de them item moi vao mang items
    onAddItem(newItem);
    // initialItem.push(newItem); // them item moi vao mang initialItem
    setDescription(""); // reset input description
    setQuantity(1); // reset input quantity
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* Number ham bien chuoi thanh so */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Tao mang n=20 va duyet mang xuat tren UI */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Gan value va su kien onChange cho input */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
