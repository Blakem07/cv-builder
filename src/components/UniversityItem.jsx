import "../styles/UniversityItem.css";

import { useState } from "react";

export default function UniversityItem({
  id,
  university,
  degree,
  startDate,
  endDate,
  city,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="university-item">
      <button
        className="university-item-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {university}
      </button>
      <form className={isOpen ? "university-form open" : "university-form"}>
        place form here
      </form>
    </div>
  );
}
