import Banner from "../../components/Banner/Banner";
import image from "../../assets/image-montagnes.png";
//import imageFleche from "../../assets/fleche-haut.svg";
import Collapse from "../../components/Collapse/Collapse";
//import CollapseContent from "../../components/Collapse/CollapseContent";
import "./About.scss";

function About() {
  return (
    <div className="main-container main-about">
      <Banner image={image} imageAlt="falaises côtières" />
      <div className="collapse-about-container">
        <Collapse title="Fiabilité" id="reliability" />
        <Collapse title="Respect" id="respect" />
        <Collapse title="Service" id="service" />
        <Collapse title="Sécurité" id="security" />
      </div>
    </div>
  );
}

export default About;
