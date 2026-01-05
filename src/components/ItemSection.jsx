/**
 * Generic list section renderer for array-based form collections.
 *
 * Renders a list of items and delegates item rendering and mutations
 * to the parent via callbacks.
 *
 * @param {Object} props
 * @param {number|null} props.openItemId - Id of the currently expanded item
 * @param {Array<Object>} props.items - Collection of entry objects
 * @param {Function} props.renderItem - (item, openItemId, onChange, onDelete) => JSX
 * @param {string} props.itemClassName - CSS class for the container
 * @param {Function} props.onAdd - Appends a new item
 * @param {Function} props.onChange - Updates a field on an item
 * @param {Function} props.onDelete - Deletes an item
 *
 * @returns {JSX.Element}
 */
export default function ItemSection({
  openItemId,
  items = [],
  renderItem,
  itemClassName,
  onAdd,
  onChange,
  onDelete,
}) {
  return (
    <div className={itemClassName}>
      {items.map((item) => (
        <div key={item.id}>{renderItem(item, openItemId, onChange, onDelete)}</div>
      ))}
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
