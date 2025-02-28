import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo-kasa.svg";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <header className="container-header">
      <img src={logo} alt="Logo Kasa" className="logo" />
      <nav className="container-nav">
        <Link
          to="/"
          className={`link-home ${pathName === "/" ? "page-active" : ""}`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`link-about ${pathName === "/about" ? "page-active" : ""}`}
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
