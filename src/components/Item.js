// Sử dụng props

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* Xử lý checkbox */}
      <input
        type="checkbox"
        style={{ width: "30px", height: "15px" }}
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description.toUpperCase()}
      </span>
      {/* Dùng arrow function để truyền item vào hàm handleDel và thực hiện hành động click ngay lập tức */}
      <button className="btnX" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
