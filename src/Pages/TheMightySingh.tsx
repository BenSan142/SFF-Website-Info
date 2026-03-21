// Import the FighterPage component template
// This is a reusable component that handles layout for any fighter page
import FighterPage from "../Components/FighterPage";

// Import the fighter's image to display on the left side
import FighterImg from "../assets/TheMightySingh.jpeg";

// This is the page for the fighter "TheMightySingh"
function TheMightySinghPage() {
  return (
    // Using the FighterPage template
    <FighterPage
      // Name of the fighter (displayed in the right column header)
      name="The Mighty Singh" 

      // Image of the fighter (shown in the left column)
      image={FighterImg}

      // Alternative text for the image (important for accessibility)
      alt="The Mighty Singh"    

      // VideoDescriptions is a custom prop for the FighterPage template
      // Here we pass all the videos and their descriptions
      VideoDescriptions={
        <div>
          {/* Title above the videos */}
          <h1 className="video-description-title">The Mighty Singh's Fight Highlights</h1>

          {/* Container holding all videos stacked vertically */}
          <div className="video-section">
            
            {/* Each video + description is wrapped in a "video-container" */}
            <div className="video-container">
              {/* Embedded YouTube video */}
              <iframe
                className="fighter-video"
                src="https://www.youtube.com/embed/dfENSGl5bIs"
                title="BenSan14 Fight 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Description for this video */}
              <p className="video-description-video">
                Scuffmania Match: The Mighty Singh Vs. Greg Cena Vs. Jerry Powder
              </p>
            </div>

            {/* Second video + description */}
            <div className="video-container">
              <iframe
                className="fighter-video"
                src="https://www.youtube.com/embed/O0R55j8AIDg"
                title="The Mighty Singh Fight 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <p className="video-description-video">
               Another Scuffmania Match: BenSan14 Vs. XYZ
              </p>
            </div>

          </div> {/* End of video-section */}
        </div>
      } // End of VideoDescriptions prop
    >

      {/* Children content: this goes into the right-side column under the fighter name */}
      <p>
        The Mighty Singh is a skilled fighter in the SFF.
      </p>
      <p>
        He has a strong background in martial arts and is known for his agility and precision in combat.
      </p>
      <p>
        The Mighty Singh has participated in several tournaments and has a reputation for being a formidable opponent.
      </p>

    </FighterPage> 
  );
}

export default TheMightySinghPage;