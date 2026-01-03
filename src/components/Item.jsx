import "../styles/Item.css";
import FormInput from "./FormInput";

import { useState } from "react";

/**
 * A generic clickable which item that has two states.
 *
 * A `closed` state where the name of the item is visible 
 * and an `open` state which expands to a form.
 *
 * @param {Array[Dict]} formInputs - Mapped to create inputs using the FormInput component
 *
 * @returns {JSX.Element}
 */
export default function Item({ formInputs }) {
  const [isOpen, setState] = useState(false);
    return (
    <div>
      <button className="item-button" onClick={() => setState(!isOpen)}>
        Item Refactor
      </button>
      <form
        className={isOpen ? "item-form.open" : "item-form"}
        onSubmit={(e) => e.preventDefault()}
      >
        {formInputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              type={input.type}
              field={input.field}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          );
        })}
      </form>
    </div>
  );
}
