import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  // Usestate dung de luu tru mang item
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    // Thêm 1 item mới vào mảng items
    setItems((prevItems) => [...prevItems, item]);
    console.log("Item added:", items);
  }
  // Hàm xóa item dựa vào item.id
  function handleDeleteItem(id) {
    console.log("Delete item with id:", id);
    setItems(items.filter((item) => item.id !== id));
  }
  // Hàm check item được chọn
  function handleToggleItem(id) {
    console.log("Toggle item with id:", id);
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(e) {
    e.preventDefault(); // Ngăn chặn reload trang khi click nút Clear list
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    // Xóa tất cả các item trong danh sách
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      {/* Sử dụng props */}
      <Form onAddItem={handleAddItem} />
      <PackingList
        listItems={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats listItems={items} />
    </div>
  );
}
