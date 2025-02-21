import { Link } from "react-router-dom";
import logo from "../../assets/logo-kasa.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="container-header">
      <img src={logo} alt="Logo Kasa" className="logo" />
      <nav className="container-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
