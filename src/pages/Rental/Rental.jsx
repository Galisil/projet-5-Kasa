import rentalsList from "../../data/rentalsList.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import TitleRental from "../../components/TitleRental/TitleRental";
import Tags from "../../components/Tags/Tags";
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
      <div className="infos-container">
        <div className="title-and-tags-container">
          <TitleRental />
          <Tags />
        </div>
        <div className="avatar-and-rate-container">
          {/*
        <Host />
        <Rate />
        */}
        </div>
        <div className="collapses-container">
          {/*
        <Collapse (description) />
        <Collapse (equipements) />
        */}
        </div>
      </div>
    </div>
  );
}

export default Rentals;
