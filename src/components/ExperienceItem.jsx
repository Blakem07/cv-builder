import Item from "./Item";

/**
 * Experience entry component.
 *
 * Wraps the generic `Item` component and supplies
 * experience-specific fields and values.
 *
 * @param {number} id - Identifier of the experience entry
 * @param {number} openItemId - Identifier of the currently expanded entry
 * @param {string} company - Company name
 * @param {string} position - Role title
 * @param {string} responsibilities - Responsibilities description
 * @param {string} startDate - Start date (YYYY-MM)
 * @param {string} endDate - End date (YYYY-MM)
 * @param {function} onChange - Field change handler
 * @param {function} onDelete - Entry deletion handler
 *
 * @returns {JSX.Element}
 */
export default function ExperienceItem({
  id,
  openItemId,
  company,
  position,
  responsibilities,
  startDate,
  endDate,
  onChange,
  onDelete,
}) {
  const formInputs = [
    {
      type: "text",
      field: "company",
      placeholder: "Company",
      value: company,
      onChange: onChange,
    },
    {
      type: "text",
      field: "position",
      placeholder: "Position",
      value: position,
      onChange: onChange,
    },
    {
      type: "text",
      field: "responsibilities",
      placeholder: "Responsibilities",
      value: responsibilities,
      onChange: onChange,
    },
    {
      type: "month",
      field: "startDate",
      placeholder: "Start Date",
      value: startDate,
      onChange: onChange,
    },
    {
      type: "month",
      field: "endDate",
      placeholder: "End Date",
      value: endDate,
      onChange: onChange,
    },
  ];

  return (
    <Item
      id={id}
      openItemId={openItemId}
      itemName={company}
      formInputs={formInputs}
      onDelete={onDelete}
    />
  );
}
