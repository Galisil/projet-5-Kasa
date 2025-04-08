import rentalsList from "../../data/rentalsList.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import TitleRental from "../../components/TitleRental/TitleRental";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";
import "./Rental.scss";
import { useParams, Navigate } from "react-router-dom";

function Rental() {
  const { id } = useParams();
  const rental = rentalsList.find((rental) => rental.id === id);
  if (rental === undefined) {
    return <Navigate to="/*" replace />;
  }

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
          <Collapse className="collapse-rental" title="Description">
            <p>{rental.description}</p>
          </Collapse>
          <Collapse className="collapse-rental" title="Equipements">
            <ul>
              {rental.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Rental;
