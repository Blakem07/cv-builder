import "../styles/Item.css";

import { useState } from "react";

/**
 * A generic input item which expands to a form.
 *
 * @returns {JSX.Element}
 */
export default function Item({}) {
  const [isOpen, setState] = useState(false);
  return (
    <div>
      <button className="item-button" onClick={() => setState(!isOpen)}>
        Item Refactor
      </button>
      <form className={isOpen ? "item-form.open" : "item-form"}></form>
    </div>
  );
}
