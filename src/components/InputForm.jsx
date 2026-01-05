import "../styles/InputForm.css";
import PersonalDetails from "./PersonalDetails";
import ExpandableSection from "./ExpandableSection";
import ItemSection from "./ItemSection";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import awardSvg from "../assets/award.svg";

// Used by ItemSection to render EducationItems from form.education
const renderEducationItem = (item, openItemId, onChange, onDelete) => {
  return (
    <EducationItem
      id={item.id}
      openItemId={openItemId}
      onChange={onChange}
      onDelete={onDelete}
      institution={item.institution}
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

export default function InputForm({
  form,
  onChange,

  openEducationId,
  handleEntryChange,
  handleEntryDelete,
  handleAddUniversity,

  openExperienceId,
  handleAddExperience,
  handleExperienceChange,
  handleDeleteExperience,
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
            renderItem={renderEducationItem}
            openItemId={openEducationId}
            onAdd={handleAddUniversity}
            onChange={handleEntryChange}
            onDelete={handleEntryDelete}
          />
        }
      />

      <ExpandableSection
        title="Experience"
        icon={awardSvg}
        content={
          <ItemSection
            items={form.experience}
            renderItem={renderExperienceItem}
            openItemId={openExperienceId}
            onAdd={handleAddExperience}
            onChange={handleExperienceChange}
            onDelete={handleDeleteExperience}
          />
        }
      />
    </div>
  );
}
