import UniversityItem from "./UniversityItem";
import "../styles/EducationSection.css";
import AddItemButton from "./AddItemButton";

export default function EducationSection({
  education,
  openEducationId,
  handleUniversityChange,
  handleDeleteUniversity,
  handleAddUniversity,
}) {
  return (
    <div className="education-section">
      {education.map((edu) => (
        <UniversityItem
          openEducationId={openEducationId}
          handleUniversityChange={handleUniversityChange}
          handleDeleteUniversity={handleDeleteUniversity}
          id={edu.id}
          university={edu.university}
          degree={edu.degree}
          startDate={edu.startDate}
          endDate={edu.endDate}
          city={edu.city}
        />
      ))}
      <AddItemButton
        text="Add University"
        onClick={() => {
          handleAddUniversity();
        }}
      />
    </div>
  );
}
