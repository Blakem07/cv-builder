/**
 * Generic list section renderer for array-based form collections.
 *
 * Renders a collection of items and delegates all item rendering
 * and interaction behavior to the parent via render callbacks.
 *
 * @param {Array<Object>} items - Collection of entry objects to render
 * @param {Function} renderItem - Render function for a single item
 * @param {string} itemClassName - CSS class applied to the section container
 * @param {Function} handleAddItem - Callback to append a new item
 * @param {number|null} openItemId - Identifier indicating the expanded item
 * @param {Function} handleChangeItem - Delegated item update handler
 * @param {Function} handleDeleteItem - Delegated item delete handler
 *
 * @returns {JSX.Element}
 */
export default function ItemSection({
  openItemId,
  items = [],
  renderItem,
  itemClassName,
  handleAddItem,
  handleChangeItem,
  handleDeleteItem,
}) {
  return (
    <div className={itemClassName}>
      {items.map((item) => {
        return (
          <div key={item.id}>
            {renderItem(item, openItemId, handleChangeItem, handleDeleteItem)}
          </div>
        );
      })}
      <button onClick={handleAddItem}>Add University</button>
    </div>
  );
}
