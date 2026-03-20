import FighterPage from "../Components/FighterPage";
import FighterImg from "../assets/BenSan14.jpg";

function BenSan14Page() {
  return (
    <FighterPage
      name="BenSan14" 
      image={FighterImg}
      alt="BenSan14"
    >
      <p>
        BenSan14 is a skilled fighter in the SFF.
      </p>
      <p>
        He has a strong background in martial arts and is known for his agility and precision in combat.
      </p>
      <p>
        BenSan14 has participated in several tournaments and has a reputation for being a formidable opponent.
      </p>

      <div className="video-section">

      <div className="video-container">
      <iframe
        className="fighter-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VD8C42X_I90"
        title="BenSan14 Fight"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>

      <div className="video-container">
      <iframe
        className="fighter-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dBWOY8Cbh-I"
        title="BenSan14 Fight"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>
      </div>
    </FighterPage>

  );
}

export default BenSan14Page;
      