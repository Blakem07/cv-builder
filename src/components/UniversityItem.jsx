import "../styles/UniversityItem.css";
import FormInput from "./FormInput";

import { useState } from "react";

export default function UniversityItem({
  openEducationId,
  handleUniversityChange,
  handleDeleteUniversity,
  id,
  university,
  degree,
  startDate,
  endDate,
  city,
}) {
  const [isOpen, setIsOpen] = useState(openEducationId === id);

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
          onChange={(e) => {
            handleUniversityChange(e, id, "university");
          }}
          field="university"
          type="text"
          placeholder="University Name"
        />
        <FormInput
          value={degree}
          onChange={(e) => {
            handleUniversityChange(e, id, "degree");
          }}
          field="degree"
          type="text"
          placeholder="Degree"
        />
        <FormInput
          value={startDate}
          onChange={(e) => {
            handleUniversityChange(e, id, "startDate");
          }}
          field="startDate"
          type="month"
          placeholder="Start Date"
        />
        <FormInput
          value={endDate}
          onChange={(e) => {
            handleUniversityChange(e, id, "endDate");
          }}
          field="endDate"
          type="month"
          placeholder="End Date"
        />
        <FormInput
          value={city}
          onChange={(e) => {
            handleUniversityChange(e, id, "city");
          }}
          field="city"
          type="text"
          placeholder="City"
        />
        <button
          onClick={(e) => {
            handleDeleteUniversity(e, id);
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
