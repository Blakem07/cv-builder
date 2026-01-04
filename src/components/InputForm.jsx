import "../styles/InputForm.css";
import PersonalDetails from "./PersonalDetails";
import ExpandableSection from "./ExpandableSection";
import ItemSection from "./ItemSection";
import UniversityItem from "./UniversityItem";
import ExperienceItem from "./ExperienceItem";
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

const renderExperienceItem = (item, openItemId, onChange, onDelete) => {
  return (
    <ExperienceItem
      id={item.id}
      openItemId={openItemId}
      company={item.company}
      position={item.position}
      responsibilities={item.responsibilities}
      startDate={item.startDate}
      endDate={item.endDate}
      onChange={onChange}
      onDelete={onDelete}
    />
  );
};

/**
 * Renders the CV input form sections.
 *
 * Includes:
 * - Personal details
 * - Education section (expandable)
 * - Experience section (expandable)
 *
 * @param {Object} form - CV data object (includes `education` and `experience`)
 * @param {Function} onChange - Updates personal details fields
 *
 * @param {number|null} openEducationId - Expanded education entry id (or null)
 * @param {Function} handleAddUniversity - Appends a new education entry
 * @param {Function} handleUniversityChange - Updates an education entry field
 * @param {Function} handleDeleteUniversity - Removes an education entry
 *
 * @param {number|null} openExperienceId - Expanded experience entry id (or null)
 * @param {Function} handleAddExperience - Appends a new experience entry
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
  openExperienceId,
  handleAddExperience,
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
            openItemId={openEducationId}
            handleChangeItem={handleUniversityChange}
            handleDeleteItem={handleDeleteUniversity}
          />
        }
      />
      <ExpandableSection
        title="Experience"
        icon={awardSvg}
        content={
          <ItemSection
            openItemId={openExperienceId}
            items={form.experience}
            renderItem={renderExperienceItem}
            handleAddItem={handleAddExperience}
          />
        }
      />
    </div>
  );
}
