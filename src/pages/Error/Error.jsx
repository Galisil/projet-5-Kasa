import { Link } from "react-router-dom";
import "./Error.scss";
import "../../styles/global.scss";

function Error404() {
  return (
    <div className="main-container main-error">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <h2 className="error-responsive">
        Oups! La page que <br /> vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error-link-home">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
