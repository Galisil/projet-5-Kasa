import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="container-header">
      <div className="logo-header">image ici</div>
      <ul className="container-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </ul>
    </div>
  );
}

export default Header;
