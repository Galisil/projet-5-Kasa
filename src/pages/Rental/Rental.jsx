import rentalsList from "../../data/rentalsList.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams, Navigate } from "react-router-dom";

function Rentals() {
  const { id } = useParams();
  const rentalExists = rentalsList.some((rental) => rental.id === id);
  if (!rentalExists) {
    return <Navigate to="/*" replace />;
  }
  const rental = rentalsList.find((rental) => rental.id === id);

  return (
    <div className="main-container main-rental">
      <Slideshow rental={rental} />
      <h2>Location : {rental.title}</h2>
    </div>
  );
}

export default Rentals;
