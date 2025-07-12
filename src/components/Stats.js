// Sử dụng props
export default function Stats({ listItems }) {
  // Nếu không có item nào trong danh sách, hiển thị thông báo
  if (!listItems.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🎸</em>{" "}
      </footer>
    );
  const numItem = listItems.length; // Số lượng item trong danh sách
  const numPacked = listItems.filter((item) => item.packed === true).length; // Số lượng item đã đóng 🎸
  const percentPacked = Math.round((numPacked / numItem) * 100); // Tính phần trăm đã đóng gói
  console.log(numItem, numPacked);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go! 🛫"
          : `🧳 You have ${numItem} items on your list, and you already packed
        ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
