// Import the FighterPage component template
// This is a reusable component that handles layout for any fighter page
import FighterPage from "../Components/FighterPage";

// Import the fighter's image to display on the left side
import FighterImg from "../assets/Hendrix.png";

// This is the page for the fighter "Hendrix"
function HendrixPage() {
  return (
    // Using the FighterPage template
    <FighterPage
      // Name of the fighter (displayed in the right column header)
      name="Hendrix" 

      // Image of the fighter (shown in the left column)
      image={FighterImg}

      // Alternative text for the image (important for accessibility)
      alt="Hendrix"    

      // VideoDescriptions is a custom prop for the FighterPage template
      // Here we pass all the videos and their descriptions
      VideoDescriptions={
        <div>
          {/* Title above the videos */}
          <h1 className="video-description-title">Hendrix's Fight Highlights</h1>

          {/* Container holding all videos stacked vertically */}
          <div className="video-section">
            
            {/* Each video + description is wrapped in a "video-container" */}
            <div className="video-container">
              {/* Embedded YouTube video */}
              <iframe
                className="fighter-video"
                src="https://www.youtube.com/embed/2F4-QSVTrDE"
                title="Hendrix Fight 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Description for this video */}
              <p className="video-description-video">
                Scuffmania 2025: Hendrix Vs. The Announcer - World Heavyweight Championship Match
              </p>
            </div>

            {/* Second video + description */}
            <div className="video-container">
              <iframe
                className="fighter-video"
                src="https://www.youtube.com/embed/y96Nb3Y_hZs"
                title="Hendrix Fight 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <p className="video-description-video">
                Hendrix Vs. Anonymous - SFF Championship Match
              </p>
            </div>

          </div> {/* End of video-section */}
        </div>
      } // End of VideoDescriptions prop
    >

      {/* Children content: this goes into the right-side column under the fighter name */}
      <p>
        Hendrix is one the most poloarizing figures in SFF, known for his unpredictable fighting style and his screams after every victory. He is a fan favorite and has a large following in the SFF community.
      </p>
      <p>
        After joining BenSan14 and The Mighty Singh, Hendrix formed the team known as "The Ones", which helped him gain more trust and respect in the SFF Roster. However, Hendrix also had many enemies in SFF...
      </p>
      <p>
        At Scuffmania 2025, Hendrix had a shocking match against The Announcer for the World Heavyweight Championship, "The Ones" Vs. "The Announcers"! Hendrix ended up losing the match, but his message of teamwork and loyalty to his friends resonated with the Announcers, ending SFF with a fairy tale ending for the fans and a new era of unity in Scuffed Fight Federation.
      </p>
    </FighterPage> 
  );
}

export default HendrixPage;