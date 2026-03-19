import FighterPage from "../Components/FighterPage";
import FighterImg from "../assets/BenSan14.jpg";

function BenSan14Page() {
  return (
    <FighterPage
      name="BenSan14" 
      image={FighterImg}
      alt="BenSan14"
    >
      <p className="FighterText">
        BenSan14 is a skilled fighter in the SFF.
      </p>
    </FighterPage>
  );
}

export default BenSan14Page;
      