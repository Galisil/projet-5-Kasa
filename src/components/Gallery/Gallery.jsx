import Card from "../Card/Card";
import rentalsList from "../../data/rentalsList.json";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
      {rentalsList.map((rental) => {
        return (
          <Card
            key={rental.id}
            id={rental.id}
            src={rental.cover}
            alt={rental.title}
            title={rental.title}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
