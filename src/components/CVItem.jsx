import "../styles/CVItem.css";

export default function CVItem({
  institution,
  achievement,
  detail,
  startDate,
  endDate,
  city,
}) {
  return (
    <div className="cv-item">
      <div className="left">
        <p className="cv-item-dates">
          {startDate} - {endDate}
        </p>
        <p className="cv-item-location">{city}</p>
      </div>
      <div className="right">
        <h4 className="cv-item-tinstitution">{institution}</h4>
        <p className="cv-item-achievement">{achievement}</p>
      </div>
    </div>
  );
}
