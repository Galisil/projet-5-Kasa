import rentalsList from "../../data/rentalsList.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Host() {
  const { id } = useParams();
  const currentRental = rentalsList.find((rental) => rental.id === id);
}
