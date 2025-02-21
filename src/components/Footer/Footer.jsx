import "./Footer.scss";
import logo from "../../assets/logo-kasa.svg";

function Footer() {
  return (
    <footer className="container-footer">
      <img src={logo} alt="Logo Kasa" className="logo" />
      <p className="copyright-footer">© 2025 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
