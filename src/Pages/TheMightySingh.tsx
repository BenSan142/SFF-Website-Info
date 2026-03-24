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
                Scuffmania 2025: Benson Vs. The Mighty Singh - Intercontinetal Championship Match
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
               Night Of Champions 2023: The Mighty Singh Vs. BenSan14 - Intercontinental Championship Match
              </p>
            </div>

          </div> {/* End of video-section */}
        </div>
      } // End of VideoDescriptions prop
    >

      {/* Children content: this goes into the right-side column under the fighter name */}
      <p>
        The Indian Sensation is here! The Mighty Singh is a fierce competitor in the SFF, known for his no give up attitude and powerful strikes.
      </p>
      <p>
        His finisher, the "Sikh Kick", has put many opponents to sleep and has become a fan favorite. The Mighty Singh is a true warrior in the SFF and has made his name know in the SFF Universe.
      </p>
      <p>
        At Scuffmania 2025, The Mighty Singh had a incredible match against Benson for the Intercontinental Championship, defeating the coruppt champion and winning the title for his family.
      </p>

    </FighterPage> 
  );
}

export default TheMightySinghPage;