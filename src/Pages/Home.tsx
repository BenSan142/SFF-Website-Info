import "../index.css";
import { Link } from 'react-router-dom';
import myImage from '../assets/SFF.svg'; // Import your image
import Header from "../Components/Header";
import FighterLink from "../Components/FighterLink";
import { FighterLinkList } from "../Components/FighterLinkList";
import DailyVid from "../Components/DailyVid";


function Home() {
  return (
    
    <div className="home">
      <Header />
      {/* HERO */}
      <div>
        <img src={myImage} alt="SFF Logo" className="logo" />
      </div>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>SFF: Scuffed Fight Federation</h1>
          <p>Where the people are the real champions...</p>
          <Link to="https://www.youtube.com/@ScuffedFightFederation" target="_blank" rel="noopener noreferrer">
            <button className="cta">
                WATCH NOW
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="featured">
        <h2>FEATURES</h2>
        <div className="cards">

          <div className="imageGallery">
            {/* Image gallery content */}
            {FighterLinkList.map((fighter, index) => (
            <FighterLink
            key={index}
            id={fighter.id}
            image={fighter.image}
            altText={fighter.alt}
            />
            ))}
          </div>

          <div className="featured-content">

            <DailyVid />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
