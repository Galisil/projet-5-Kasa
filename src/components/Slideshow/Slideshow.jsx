import rentalsList from "../../data/rentalsList.json";
import "./Slideshow.scss";
//import arrowBack from "../../assets/fleche-prec.svg";
//import arrowForwards from "../../assets/fleche-suiv.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Slideshow() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [currentPicture, setCurrentPicture] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const currentRental = rentalsList.find((rental) => rental.id === id);
  const picturesRental = currentRental.pictures;
  const totalPictures = picturesRental.length;

  //au clic sur préc, si l'index de la photo actuelle est plus grand que 0,
  // alors on soustrait 1 à l'index. Sinon, l'index devient celui de la dernière photo
  function handlePrevious() {
    setIsVisible(false);
    setTimeout(() => {
      if (index > 0) {
        setIndex(index - 1);
        setCurrentPicture(currentPicture - 1);
      } else {
        setIndex(totalPictures - 1);
        setCurrentPicture(totalPictures);
      }
      setIsVisible(true);
    }, 200);
  }
  //au clic sur suiv, si l'index de la photo actuelle est inférieure au nombre de photos total,
  //alors on ajoute 1 à l'index. Sinon, l'index devient celui de la première photo
  function handleNext() {
    setIsVisible(false);
    setTimeout(() => {
      if (index < totalPictures - 1) {
        setIndex(index + 1);
        setCurrentPicture(currentPicture + 1);
      } else {
        setIndex(0);
        setCurrentPicture(1);
      }
      setIsVisible(true);
    }, 200);
  }

  return (
    <div className="container-slideshow">
      <img
        className={`image-slideshow ${isVisible ? "visible" : ""}`}
        src={picturesRental[index]}
        alt="appart"
        onLoad={() => setIsVisible(true)}
      />
      <div className={`container-buttons ${totalPictures <= 1 && "noCounter"}`}>
        <button className="button-slideshow prev" onClick={handlePrevious}>
          {/* <img
            src={arrowBack}
            alt="bouton précédent"
            onClick={handlePrevious}
          /> */}
          <p>{"<"}</p>
        </button>
        <button className="button-slideshow next" onClick={handleNext}>
          {/* <img 
          src={arrowForwards} 
          alt="bouton suivant" 
          onClick={handleNext} 
          /> */}
          <p>{">"}</p>
        </button>
      </div>
      <span className={`counter-pictures ${totalPictures <= 1 && "noCounter"}`}>
        {currentPicture}/{totalPictures}
      </span>
    </div>
  );
}

export default Slideshow;
