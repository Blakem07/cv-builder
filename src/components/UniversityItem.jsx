import "../styles/UniversityItem.css";
import FormInput from "./FormInput";

import { useState } from "react";

export default function UniversityItem({
  education,
  id,
  university,
  degree,
  startDate,
  endDate,
  city,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Todo : Implement onChange handlers to update education details

  return (
    <div className="university-item">
      <button
        className="university-item-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {university}
      </button>
      <form className={isOpen ? "university-form open" : "university-form"}>
        <FormInput
          value={university}
          onChange={() => {}}
          field="university"
          type="text"
          placeholder="University Name"
        />
        <FormInput
          value={degree}
          onChange={() => {}}
          field="degree"
          type="text"
          placeholder="Degree"
        />
        <FormInput
          value={startDate}
          onChange={() => {}}
          field="startDate"
          type="month"
          placeholder="Start Date"
        />
        <FormInput
          value={endDate}
          onChange={() => {}}
          field="endDate"
          type="month"
          placeholder="End Date"
        />
        <FormInput
          value={city}
          onChange={() => {}}
          field="city"
          type="text"
          placeholder="City"
        />
      </form>
    </div>
  );
}
