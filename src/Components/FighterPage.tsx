import Header from "../Components/Header";
import '../App.css';

function FighterPage({
  name,
  image,
  alt,
  children,
  VideoDescriptions,   // 👈 NEW
}: {
  name: string;
  image: string;
  alt: string;
  children: React.ReactNode;
  VideoDescriptions: React.ReactNode;   // 👈 NEW
}) {
  return (
    <div className="fighter-layout">
      <Header />

    <div className="fighter-section">

     {/* LEFT COLUMN */}
      <div className="fighter-image-container">
        <img
          src={image}
          alt={alt}
          className="fighter-image-bio"
       />

       {VideoDescriptions}

      </div>

      {/* RIGHT COLUMN */}
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