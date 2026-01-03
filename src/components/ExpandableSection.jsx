import "../styles/ExpandableSection.css";
import arrowUpSvg from "../assets/arrow-up.svg";
import { useState } from "react";

/**
 * Renders a toggleable container with a header and collapsible content.
 *
 * Manages its own open/closed state and renders arbitrary child content.
 *
 * @param {string} title - Section header label
 * @param {string} icon - Icon displayed alongside the title
 * @param {JSX.Element} content - Content rendered when the section is expanded
 */
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
