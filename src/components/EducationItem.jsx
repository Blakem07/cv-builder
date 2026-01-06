import Item from "./Item";

/**
 * Education entry component.
 *
 * Adapts the generic `Item` component for education data.
 * Binds education-specific fields and routes all field updates
 * through a shared change handler using the entry id and field key.
 *
 * Manages no internal state beyond what `Item` controls.
 *
 * @param {number} id - Education entry identifier
 * @param {number|null} openItemId - Identifier of the currently expanded item
 * @param {string} institution - Institution name
 * @param {string} degree - Degree title
 * @param {string} city - City of the institution
 * @param {string} startDate - Start date (YYYY-MM)
 * @param {string} endDate - End date (YYYY-MM)
 * @param {Function} onChange - Delegated change handler
 * @param {Function} onDelete - Delegated delete handler
 *
 * @returns {JSX.Element}
 */
export default function EducationItem({
  id,
  openItemId,
  institution,
  degree,
  city,
  startDate,
  endDate,
  onChange,
  onDelete,
}) {
  const handleFieldChange = (field) => (e) => onChange(e, "education", id, field);

  const formInputs = [
    {
      type: "text",
      field: "institution",
      placeholder: "Institution",
      value: institution,
      onChange: handleFieldChange("institution"),
    },
    {
      type: "text",
      field: "degree",
      placeholder: "Degree",
      value: degree,
      onChange: handleFieldChange("degree"),
    },
    {
      type: "text",
      field: "city",
      placeholder: "City",
      value: city,
      onChange: handleFieldChange("city"),
    },
    {
      type: "month",
      field: "startDate",
      placeholder: "Start Date",
      value: startDate,
      onChange: handleFieldChange("startDate"),
    },
    {
      type: "month",
      field: "endDate",
      placeholder: "End Date",
      value: endDate,
      onChange: handleFieldChange("endDate"),
    },
  ];

  return (
    <Item
      id={id}
      openItemId={openItemId}
      itemName={institution}
      formInputs={formInputs}
      onDelete={(e) => onDelete(e, "education", id)}
    />
  );
}
