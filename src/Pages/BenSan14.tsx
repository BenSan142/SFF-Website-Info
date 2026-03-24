// Import the FighterPage component template
// This is a reusable component that handles layout for any fighter page
import FighterPage from "../Components/FighterPage";

// Import the fighter's image to display on the left side
import FighterImg from "../assets/BenSan14.jpg";

// This is the page for the fighter "BenSan14"
function BenSan14Page() {
  return (
    // Using the FighterPage template
    <FighterPage
      // Name of the fighter (displayed in the right column header)
      name="BenSan14" 

      // Image of the fighter (shown in the left column)
      image={FighterImg}

      // Alternative text for the image (important for accessibility)
      alt="BenSan14"    

      // VideoDescriptions is a custom prop for the FighterPage template
      // Here we pass all the videos and their descriptions
      VideoDescriptions={
        <div>
          {/* Title above the videos */}
          <h1 className="video-description-title">BenSan14's Fight Highlights</h1>

          {/* Container holding all videos stacked vertically */}
          <div className="video-section">
            
            {/* Each video + description is wrapped in a "video-container" */}
            <div className="video-container">
              {/* Embedded YouTube video */}
              <iframe
                className="fighter-video"
                src="https://www.youtube.com/embed/VD8C42X_I90"
                title="BenSan14 Fight 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Description for this video */}
              <p className="video-description-video">
                Scuffmania 2025: BenSan14 Vs. Greg Cena Vs. Jerry Powder - SFF Championship Match
              </p>
            </div>

            {/* Second video + description */}
            <div className="video-container">
              <iframe
                className="fighter-video"
                src="https://www.youtube.com/embed/dBWOY8Cbh-I"
                title="BenSan14 Fight 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <p className="video-description-video">
                Royal Fumble 2024: BenSan14's Path to Victory
              </p>
            </div>

          </div> {/* End of video-section */}
        </div>
      } // End of VideoDescriptions prop
    >

      {/* Children content: this goes into the right-side column under the fighter name */}
      <p>
        BenSan14 is a SFF Legend known for his love and dedication to the sport.
      </p>
      <p>
        After winning the Royal Fumble in 2024, BenSan14's only goal has been to win the SFF World Championship and prove that he is the best fighter in the world.
      </p>
      <p>
        At Scuffmania 2025, BenSan14 had a memorable and brutal match against Greg Cena and Jerry Powder, retiring as the last real SFF Champion.
      </p>

    </FighterPage> 
  );
}

export default BenSan14Page;