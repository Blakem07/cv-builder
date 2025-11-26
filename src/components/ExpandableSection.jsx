import "../styles/ExpandableSection.css";
import arrowUpSvg from "../assets/arrow-up.svg";

import { useState } from "react";

export default function ExpandableSection({ title, icon, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable-section">
      <button className="expand-button" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <img src={icon} className="award-icon icon"></img>
          {title}
        </div>
        <img src={arrowUpSvg} className={isOpen ? "icon open" : "icon"}></img>
      </button>
      <div className={isOpen ? "content open" : "content"}>{content}</div>
    </div>
  );
}
