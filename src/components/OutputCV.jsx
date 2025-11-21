import "../styles/OutputCV.css";
import { mailSvg, phoneSvg, mapPinSvg } from "../assets";

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
      <main></main>
    </div>
  );
}
