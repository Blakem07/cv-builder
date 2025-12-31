import "../styles/OutputCV.css";
import { mailSvg, phoneSvg, mapPinSvg } from "../assets";
import CVItem from "./CVItem";

export default function OutputCV({ form }) {
  return (
    <div className="output-cv-container">
      <header>
        <h1 className="cv-name">{form.name}</h1>
        <div className="cv-contact-details">
          <h4 className="email">
            <img src={mailSvg} className="icon"></img>
            {form.email}
          </h4>
          <h4 className="cv-tel-number">
            <img src={phoneSvg} className="icon"></img>
            {form.phone}
          </h4>
          <h4 className="location">
            <img src={mapPinSvg} className="icon"></img>
            {form.address}
          </h4>
        </div>
      </header>
      <main>
        <section className="section education-section">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <div className="section-content">
            {form.education.map((edu) => (
              <CVItem
                key={edu.id}
                institution={`${edu.university}`}
                achievement={edu.degree}
                detail=""
                startDate={edu.startDate}
                endDate={edu.endDate}
                city={edu.city}
              />
            ))}
          </div>
        </section>
        <section className=" section professional-experience-section">
          <div className="section-header">
            <h2>Professional Experience</h2>
          </div>
          <div className="section-content">
            {form.experience.map((exp) => (
              <CVItem
                key={exp.id}
                institution={`${exp.company}`}
                achievement={exp.position}
                detail={`${exp.responsibilities}`}
                startDate={exp.startDate}
                endDate={exp.endDate}
                city={exp.city}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
