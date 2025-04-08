import arrowUp from "../../assets/fleche-haut.svg";
import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, className, children }) {
  const [isCollapseOpen, setCollapseOpen] = useState(false);

  function handleClick() {
    isCollapseOpen ? setCollapseOpen(!isCollapseOpen) : setCollapseOpen(true);
  }

  return (
    <div className={className}>
      <h3 className="title-collapse">
        {title}
        <img
          className={`title-collapse__arrow ${isCollapseOpen ? "rotated" : ""}`}
          src={arrowUp}
          alt="flèche"
          onClick={handleClick}
        />
      </h3>
      <div
        className={`collapseContent ${
          isCollapseOpen ? "collapseContent__open" : "collapseContent__closed"
        }`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Collapse;
