import rentalsList from "../../data/rentalsList.json";
import { useParams } from "react-router-dom";
import "./TitleRental.scss";

function TitleRental() {
  const { id } = useParams();
  const currentRental = rentalsList.find((rental) => rental.id === id);
  const title = currentRental.title;
  const city = currentRental.location;

  return (
    <>
      <h1 className="title-rental">{title}</h1>
      <span className="location-rental">{city}</span>
    </>
  );
}

export default TitleRental;
