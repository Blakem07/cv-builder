import "../styles/Item.css";
import FormInput from "./FormInput";

import { useState } from "react";

/**
 * A generic clickable which item that has two states.
 *
 * A `closed` state where the name of the item is visible
 * and an `open` state which expands to a form.
 *
 * @param {Number} id - ID of the variable within form object used to create the item.
 * @param {String} itemName - Name of item appearing on closed clickable button.
 * @param {Array[Dict]} formInputs - Mapped to create inputs using the FormInput component
 *
 * @returns {JSX.Element}
 */
export default function Item({ id, itemName, formInputs, onDelete }) {
  const [isOpen, setState] = useState(false);
  return (
    <div>
      <button className="item-button" onClick={() => setState(!isOpen)}>
        {itemName}
      </button>
      <form
        className={isOpen ? "item-form.open" : "item-form"}
        onSubmit={(e) => e.preventDefault()}
      >
        {formInputs.map((input) => {
          return (
            <FormInput
              key={id}
              type={input.type}
              field={input.field}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          );
        })}
        <button onClick={onDelete}>Delete</button>
      </form>
    </div>
  );
}
