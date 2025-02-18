import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/image-falaises.png";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="home-container main-home">
      <Banner
        text="Chez vous, partout et ailleurs"
        image={image}
        imageAlt="falaises côtières"
      />
      <Gallery />
    </div>
  );
}

export default Home;
