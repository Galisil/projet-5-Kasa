import rentalsList from "../../data/rentalsList.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import TitleRental from "../../components/TitleRental/TitleRental";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";
import "./Rental.scss";
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
        <div className="container-host-infos">
          <div className="title-and-tags-container">
            <TitleRental />
            <Tags />
          </div>
          <div className="host-and-rate-container">
            <Host />
            <Rate />
          </div>
        </div>
        <div className="collapses-container">
          <Collapse
            className="collapse-rental"
            title="Description"
            id="description"
          />
          <Collapse
            className="collapse-rental"
            title="Equipements"
            id="equipments"
          />
        </div>
      </div>
    </div>
  );
}

export default Rentals;
