import { useState } from "react";
import Item from "./Item";

// Sử dụng props
export default function PackingList({
  listItems,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // console.log(listItems);
  const [sortBy, setSortBy] = useState("input");
  // Hàm sắp xếp danh sách theo sortBy
  let sortedItems;
  if (sortBy === "input") sortedItems = listItems;
  // Sắp xếp bản sao đó theo thứ tự chuỗi alphabet (a -> z)
  // localeCompare()	So sánh chuỗi chính xác theo ngôn ngữ
  //   ['vi', 'en']: Ưu tiên tiếng Việt trước, nếu không hỗ trợ thì dùng tiếng Anh.
  // { sensitivity: 'base' }: Bỏ qua phân biệt chữ hoa/thường và dấu
  // accent: ✅ Phân biệt dấu, ❌ bỏ qua chữ hoa/thường, 'a' ≠ 'á', nhưng 'a' == 'A'
  if (sortBy === "description")
    sortedItems = listItems.slice().sort((a, b) =>
      a.description.localeCompare(b.description, ["vi", "en"], {
        sensitivity: "accent",
      })
    );
  // packed = false lên trước
  if (sortBy === "packed")
    sortedItems = listItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* {initialItem.map((item) => ( */}
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            itemPacked={item.packed}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        {/* Thay đổi state ngay lập tức khi chọn */}
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
