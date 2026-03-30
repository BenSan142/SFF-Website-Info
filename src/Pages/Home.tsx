import "../index.css";
import { Link } from 'react-router-dom';
import myImage from '../assets/SFF.svg'; // Import your image
import Header from "../Components/Header";
import DailyVid from "../Components/DailyVid";
import VideoBg from "../assets/fire.mp4"; // Import the video background
import RandomFighters from "../Components/RandomFighters";

function Home() {
  return (
    
    <div className="home">
      <Header />
      {/* HERO */}
      <div>
        <img src={myImage} alt="SFF Logo" className="logo" />
      </div>
      <section className="hero">
        <div className="overlay"></div>
        <video autoPlay muted loop className="hero-video">
          <source src={VideoBg} type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="SFF-logo">SFF: Scuffed Fight Federation</h1>
          <h2>Where the people are the real champions...</h2>
          <Link to="https://www.youtube.com/@ScuffedFightFederation" target="_blank" rel="noopener noreferrer">
            <button className="fire-btn">
                WATCH NOW
            </button>
          </Link>
        </div>
        <img src={myImage} alt="SFF Logo" className="logo" onClick={() => window.open("https://www.youtube.com/@ScuffedFightFederation", "_blank")} />
      </section>

      {/* FEATURED SECTION */}
      <section className="featured">
        <h2>FEATURES</h2>
        <div className="cards">

          <RandomFighters />

          <div className="featured-content">

            <DailyVid />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
