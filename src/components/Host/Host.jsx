import rentalsList from "../../data/rentalsList.json";
import { useParams } from "react-router-dom";
import "./Host.scss";
//import { useState } from "react";

function Host() {
  const { id } = useParams();
  const currentRental = rentalsList.find((rental) => rental.id === id);
  const host = currentRental.host;
  const [firstName, lastName] = host.name.split(" ");
  const hostPicture = host.picture;
  return (
    <div className="host">
      <div className="host-name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img className="host-picture" src={hostPicture} alt="host" />
    </div>
  );
}

export default Host;
