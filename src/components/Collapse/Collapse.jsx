import arrowUp from "../../assets/fleche-haut.svg";
import { useState } from "react";
import CollapseContent from "./CollapseContent";
import "./Collapse.scss";

function Collapse({ title, id }) {
  const [isCollapseOpen, setCollapseOpen] = useState(false);
  function handleClick() {
    isCollapseOpen ? setCollapseOpen(false) : setCollapseOpen(true);
  }
  return (
    <>
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
        <CollapseContent
          id={id} /*pour les équipements, ajouter des props ici ?*/
        />
      </div>
    </>
  );
}

export default Collapse;
