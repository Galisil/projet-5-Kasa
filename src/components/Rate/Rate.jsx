import rentalsList from "../../data/rentalsList.json";
import filledStar from "../../assets/orange-star.svg";
import emptyStar from "../../assets/grey-star.svg";
import { useParams } from "react-router-dom";
import "./Rate.scss";

function Rate() {
  const { id } = useParams();
  const currentRental = rentalsList.find((rental) => rental.id === id);
  const scoreHost = parseInt(currentRental.rating);
  //const emptyStars = 5 - scoreHost;

  return (
    <div className="rating-container">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          className="rate-star"
          src={index < scoreHost ? filledStar : emptyStar}
          alt="rating star"
        />
      ))}
    </div>
  );
}

export default Rate;
