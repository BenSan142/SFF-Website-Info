import Header from "../Components/Header";
import '../App.css';

function FighterPage({
  name,
  image,
  alt,
  children
}: {
  name: string;
  image: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fighter-layout">
      <Header />

      <div className="fighter-section">

        <img
          src={image}
          alt={alt}
          className="fighter-image-2"
        />

        <div className="fighter-info">

          <h1>{name}</h1>

          <div className="fighter-text">
            {children}
          </div>

        </div>

      </div>
    </div>
  );
}

export default FighterPage;