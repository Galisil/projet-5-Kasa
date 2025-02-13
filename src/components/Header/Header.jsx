import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </>
  );
}

export default Header;
