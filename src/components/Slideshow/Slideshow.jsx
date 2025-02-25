import rentalsList from "../../data/rentalsList.json";
import "./Slideshow.scss";
import arrowBack from "../../assets/fleche-suiv.svg";
import arrowForwards from "../../assets/fleche-prec.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Slideshow() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const currentRental = rentalsList.find((rental) => rental.id === id);
  const picturesRental = currentRental.pictures;
  return (
    <div className="container-slideshow">
      <img
        className="image-slideshow prev"
        src={picturesRental[index]}
        alt="appart"
      />
      <div className="container-buttons">
        <button className="button-slideshow">
          <img
            src={arrowForwards}
            alt="bouton précédent"
            //au clic sur préc, si l'index de la photo actuelle est plus grand que 0,
            // alors on soustrait 1 à l'index. Sinon, l'index devient celui de la dernière photo
            onClick={() =>
              index > 0
                ? setIndex(index - 1)
                : setIndex(picturesRental.length - 1)
            }
          />
        </button>
        <button className="button-slideshow next">
          <img
            src={arrowBack}
            alt="bouton suivant"
            //au clic sur suiv, si l'index de la photo actuelle est inférieure au nombre de photos total,
            //alors on ajoute 1 à l'index. Sinon, l'index devient celui de la première photo
            onClick={() =>
              index < picturesRental.length - 1
                ? setIndex(index + 1)
                : setIndex(0)
            }
          />
        </button>
      </div>
      {/*remplacer ">" par img exportées de figma*/}
    </div>
  );
}

export default Slideshow;
