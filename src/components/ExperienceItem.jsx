import Item from "./Item";

/**
 * A clickable item allowing users to input details about an experience.
 *
 * This is a composed wrapper of the `Item` component.
 *
 * @param {Number} id - ID of the specific experience within form object.
 * @param {String} company
 * @param {String} position
 * @param {String} responsibilities
 * @param {String} startDate
 * @param {String} endDate
 * @param {Function} onChange - Updates the form, passed down by `App`.
 * @param {Function} onDelete - Deletes the form entry, passed down by `App`.
 *
 * @return {JSX.Element}
 */
export default function ExperienceItem({
  id,
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

  return <Item id={id} itemName={company} formInputs={formInputs} onDelete={onDelete} />;
}
