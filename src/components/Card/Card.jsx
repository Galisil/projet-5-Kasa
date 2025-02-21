import rentalsList from "../../data/rentalsList.json";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, src, title }) {
  const idExists = rentalsList.some((obj) => obj.id === id);
  const pathToRedirect = idExists ? `/rental/${id}` : "/*";

  return (
    <Link to={pathToRedirect} className="card-container" id={id}>
      <img className="card-image" src={src} alt={"photo de " + title} />
      <h2 className="rental-title">{title}</h2>
    </Link>
  );
}

export default Card;
