import "./Banner.scss";

function Banner({ text, image, imageAlt, className }) {
  return (
    <div className={`banner ${className || ""}`}>
      <img src={image} alt={imageAlt} className="banner__image" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
