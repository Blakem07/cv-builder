import UniversityItem from "./UniversityItem";
import "../styles/EducationSection.css";

export default function EducationSection({ education }) {
  return (
    <div className="education-section">
      {education.map((edu) => (
        <UniversityItem
          id={edu.id}
          university={edu.university}
          degree={edu.degree}
          startDate={edu.startDate}
          endDate={edu.endDate}
          city={edu.city}
        />
      ))}
    </div>
  );
}
