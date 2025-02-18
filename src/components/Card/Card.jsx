//import rentalsList from "../../data/rentalsList.json";
import "./Card.scss";
/*let rental;

function jpp() {
  for (let i = 0; i < rentalsList.length; i++) {
    if (rentalsList[i].id === "c67ab8a7") {
      rental = rentalsList[i];
    }
    console.log(rental);
  }
  return rental;
}*/

function Card({ id, src, title }) {
  return (
    <div className="card-container" id={id}>
      <img className="card-image" src={src} alt={"photo de " + title} />
      <h2 className="rental-title">{title}</h2>
    </div>
  );
}

export default Card;
