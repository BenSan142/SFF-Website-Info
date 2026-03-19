import { Link } from "react-router-dom";

function FighterLink({ image, id, altText }: { image: string; id: string; altText: string }) {
  return (
    <Link to={`/fighter/${id}`}>
      <img src={image} alt={altText} className="fighter-image" />
    </Link>
  );
}

export default FighterLink;