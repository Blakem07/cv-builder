import "../styles/InputForm.css";
import PersonalDetails from "./PersonalDetails";
import ExpandableSection from "./ExpandableSection";
import EducationSection from "./EducationSection";
import awardSvg from "../assets/award.svg";

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
          <EducationSection
            education={form.education}
            openEducationId={openEducationId}
            handleUniversityChange={handleUniversityChange}
            handleDeleteUniversity={handleDeleteUniversity}
            handleAddUniversity={handleAddUniversity}
          />
        }
      />
    </div>
  );
}
