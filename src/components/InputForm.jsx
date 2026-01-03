import "../styles/InputForm.css";
import PersonalDetails from "./PersonalDetails";
import ExpandableSection from "./ExpandableSection";
import ItemSection from "./ItemSection";
import UniversityItem from "./UniversityItem";
import awardSvg from "../assets/award.svg";

// Used by ItemSection to render UniversityItems from form.education
const renderUniversityItem = (
  item,
  openEducationId,
  handleUniversityChange,
  handleDeleteUniversity
) => {
  return (
    <UniversityItem
      id={item.id}
      openEducationId={openEducationId}
      handleUniversityChange={handleUniversityChange}
      handleDeleteUniversity={handleDeleteUniversity}
      university={item.university}
      degree={item.degree}
      startDate={item.startDate}
      endDate={item.endDate}
      city={item.city}
    />
  );
};

/**
 * Renders the CV input sections currently implemented by this form.
 *
 * Composed of Personal Details and an Education section.
 *
 * @param {Object} form - CV data (includes `education`)
 * @param {Function} onChange - Updates personal details fields
 * @param {number|null} openEducationId - Id of the education item currently expanded (or null)
 * @param {Function} handleAddUniversity - Appends a new education item
 * @param {Function} handleUniversityChange - Updates an education item
 * @param {Function} handleDeleteUniversity - Removes an education item
 *
 * @returns {JSX.Element}
 */
export default function InputForm({
  form,
  onChange,
  openEducationId,
  handleUniversityChange,
  handleDeleteUniversity,
  handleAddUniversity,
}) {
  return (
    <div className="input-form-container">
      <PersonalDetails form={form} onChange={onChange} />
      <ExpandableSection
        title="Education"
        icon={awardSvg}
        content={
          <ItemSection
            items={form.education}
            renderItem={renderUniversityItem}
            handleAddItem={handleAddUniversity}
            openContainerId={openEducationId}
            handleChangeItem={handleUniversityChange}
            handleDeleteItem={handleDeleteUniversity}
          />
        }
      />
    </div>
  );
}
