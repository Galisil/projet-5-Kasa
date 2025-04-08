import "./Banner.scss";

function Banner({ text1, text2, image, imageAlt, className }) {
  return (
    <div className={`banner ${className || ""}`}>
      <img src={image} alt={imageAlt} className="banner__image" />
      {text1 && text2 && (
        <h1 className="banner__text">
          {text1}
          <br className="banner__break" />
          {text2}
        </h1>
      )}
    </div>
  );
}

export default Banner;
