import rentalsList from "../../data/rentalsList.json";
import { useParams } from "react-router-dom";
//import { useState } from "react";
import "./Tags.scss";

function Tags() {
  const { id } = useParams();
  const currentRental = rentalsList.find((rental) => rental.id === id);
  const tags = currentRental.tags;
  return (
    <ul className="list-tags">
      {tags.map((tag, index) => (
        <li key={index} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
