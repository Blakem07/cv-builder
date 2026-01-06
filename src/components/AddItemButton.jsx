export default function AddItemButton({ onClick, text }) {
  return (
    <button className="add-item-button" onClick={onClick}>
      {text}
    </button>
  );
}
