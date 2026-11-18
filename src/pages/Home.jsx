
function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="tagline">FRESH FOOD, HAPPY MOOD</span>

          <h1>
            Delicious Food,
            <br />
            <span>Delivered Fresh.</span>
          </h1>

          <p>
            Discover delicious meals made with fresh ingredients.
            Your next favorite meal is just a click away!
          </p>

          <div className="hero-buttons">
            <a href="/menu" className="primary-button">
              Explore Menu →
            </a>

            <a href="/about" className="secondary-button">
              Learn More
            </a>
          </div>

          <div className="hero-info">
            <div>
              <strong>50+</strong>
              <span>Delicious Dishes</span>
            </div>

            <div>
              <strong>4.9 ★</strong>
              <span>Customer Rating</span>
            </div>

            <div>
              <strong>30 min</strong>
              <span>Average Delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
            alt="Freshly prepared pizza"
          />
        </div>
      </section>

      <section className="welcome-section">
        <span className="tagline">WELCOME TO TASTYBITE</span>
        <h2>Good Food, Good Moments</h2>
        <p>
          Fresh ingredients, delicious meals, and flavors
          made to bring people together.
        </p>
      </section>
    </>
  )
}

export default Home
