// pages/FighterPageDynamic.tsx
import { useParams } from "react-router-dom";
import { FighterLinkList } from "../Components/FighterLinkList";
import FighterPage from "../Components/FighterPage";

function FighterPageDynamic() {
  const { id } = useParams(); // grabs the id from the URL e.g. /fighter/Hendrix
  const fighter = FighterLinkList.find(f => f.id === id); // finds the matching fighter

  if (!fighter) return <p>Fighter not found</p>;

  return (
    <FighterPage
      name={fighter.name}
      image={fighter.image}
      alt={fighter.alt}
      VideoDescriptions={
        <div>
          <h1 className="video-description-title">{fighter.name}'s Fight Highlights</h1>
          <div className="video-section">
            {fighter.videos.map((video, index) => (
              <div key={index} className="video-container">
                <iframe
                  className="fighter-video"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                />
                <p className="video-description-video">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      }
    >
      {fighter.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </FighterPage>
  );
}

export default FighterPageDynamic;