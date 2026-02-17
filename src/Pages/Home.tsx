import "../index.css";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>SFF: Scuffed FIght Federation</h1>
          <p>Where the people are the real champions...</p>
          <button className="cta">WATCH NOW</button>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="featured">
        <h2>FEATURES</h2>
        <div className="cards">
          <div className="card">CHAMPIONSHIP SHOWDOWN</div>
          <div className="card">NO HOLDS BARRED</div>
          <div className="card">LEGENDS COLLIDE</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
