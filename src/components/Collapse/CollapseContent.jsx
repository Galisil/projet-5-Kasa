//import rentalsList from "../../data/rentalsList.json";
//import Collapse from "./Collapse";
import { useLocation } from "react-router-dom";

function CollapseContent({ id }) {
  const location = useLocation();
  const pathName = location.pathname;

  function textToDisplay(id) {
    if (pathName === "/about") {
      switch (id) {
        case "reliability":
          return (
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          );
        case "respect":
          return (
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          );
        case "service":
          return (
            <p>
              La qualité du service est au coeur de notre engagement chez Kasa.
              Nous veillons à ce que chaque interaction, que ce soit avec nos
              hôtes ou nos locataires, soit empreinte de respect et de
              bienveillance.
            </p>
          );
        case "security":
          return (
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          );
        default:
          return null;
      }
    } else {
      //ici implémenter fonctionnalité pour afficher dynamiquement les équipements pour les collapses des fiches locations, depuis la rentalsList
    }
  }
  return textToDisplay(id);
}

export default CollapseContent;
