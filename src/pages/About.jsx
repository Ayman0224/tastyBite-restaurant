
function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="tagline">OUR STORY</span>
        <h1>We Believe Good Food Brings People Together.</h1>
        <p>
          At TastyBite, our mission is to make delicious food
          accessible to everyone through fresh ingredients,
          quality meals, and a simple ordering experience.
        </p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
            alt="Preparing fresh food in a kitchen"
          />
        </div>

        <div className="about-text">
          <span className="tagline">WHY TASTYBITE?</span>
          <h2>Fresh Ingredients. Great Taste.</h2>

          <p>
            We created TastyBite to make ordering your favorite
            meals easy, convenient, and enjoyable.
          </p>

          <p>
            From classic burgers to Italian pizza and fresh
            salads, our menu offers something for everyone.
          </p>

          <ul>
            <li>✓ Quality ingredients</li>
            <li>✓ A simple ordering experience</li>
            <li>✓ A menu for different tastes</li>
            <li>✓ A responsive website for mobile and desktop</li>
          </ul>
        </div>
      </section>

      <section className="about-values">
        <article>
          <span>🥗</span>
          <h3>Freshness</h3>
          <p>We focus on fresh ingredients and delicious meals.</p>
        </article>

        <article>
          <span>❤️</span>
          <h3>Quality</h3>
          <p>We aim to provide a pleasant food ordering experience.</p>
        </article>

        <article>
          <span>⚡</span>
          <h3>Convenience</h3>
          <p>Browse dishes and manage your order with ease.</p>
        </article>
      </section>
    </main>
  )
}

export default About
