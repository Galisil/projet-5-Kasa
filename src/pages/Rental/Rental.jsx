import rentalsList from "../../data/rentalsList.json";
import { useParams, Navigate } from "react-router-dom";

function Rentals() {
  const { id } = useParams();
  const rentalExists = rentalsList.some((rental) => rental.id === id);
  if (!rentalExists) {
    return <Navigate to="/*" replace />;
  }
  const rental = rentalsList.find((rental) => rental.id === id);

  return (
    <div className="container-main main-rental">
      <h2>Location : {rental.title}</h2>
      <img src={rental.cover} alt="coucou c l'image" />
    </div>
  );
}

export default Rentals;
