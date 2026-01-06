/**
 * Renders a generic list section for form-based collections.
 *
 * Delegates all item rendering and interaction logic to the parent
 * via the `renderItem` function.
 *
 * Used for sections such as education or professional experience.
 *
 * @param {Array} items - Collection of items to render (e.g. form.education)
 * @param {Function} renderItem - Parent-provided render function for each item
 * @param {string} itemClassName - CSS class applied to the container
 * @param {Function} handleAddItem - Handler to append a new item
 * @param {number} openContainerId - Identifier used by items to determine open state
 * @param {Function} handleChangeItem - Handler for updating an item
 * @param {Function} handleDeleteItem - Handler for removing an item
 *
 * @returns {JSX.Element}
 */
export default function ItemSection({
  items = [],
  renderItem,
  itemClassName,
  handleAddItem,
  openContainerId,
  handleChangeItem,
  handleDeleteItem,
}) {
  return (
    <div className={itemClassName}>
      {items.map((item) => {
        return (
          <div key={item.id}>
            {renderItem(item, openContainerId, handleChangeItem, handleDeleteItem)}
          </div>
        );
      })}
      <button onClick={handleAddItem}>Add University</button>
    </div>
  );
}
