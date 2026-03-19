import Header from "../Components/Header";
import '../App.css';


function FighterPage({ name, image, alt, children } : { name: string; image: string; alt: string; children: React.ReactNode }) {
  return (
    <div className="fighter-layout">
      <Header />

      <h1 className="FighterText">{name}</h1>


      <img src={image} alt={alt} className="fighter-image-2" />

      <div className="fighter-content">
        {children}
      </div>
    </div>
  );
}

export default FighterPage;