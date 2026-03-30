import { FighterLinkList } from "./FighterLinkList";
import FighterLink from "./FighterLink";

const randomFighters = [...FighterLinkList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

function RandomFighters() {
    return (

        <div className="imageGallery-full">
            <div className="imageGallery">
                {/* Image gallery content */}
                {randomFighters.map((fighter, index) => (
                <FighterLink
                id={fighter.id} // Use fighter.id as the key instead of index (might change later if we add more fighters, but for now it works)
                key={index}
                image={fighter.image}
                altText={fighter.alt}
                />
                ))}
            </div>

        </div>
    );
}

export default RandomFighters;
