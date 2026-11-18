
import { useState } from 'react'
const dishes = [
  {
    id: 1,
    name: 'Classic Burger',
    category: 'Burgers',
    description: 'Juicy beef burger with fresh vegetables and cheese.',
    price: 8.99,
    
image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85',

  },
  {
    id: 2,
    name: 'Italian Pizza',
    category: 'Pizza',
    description: 'Italian pizza with mozzarella cheese and herbs.',
    price: 12.5,
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Fresh Salad',
    category: 'Salads',
    description: 'Fresh vegetables with a delicious dressing.',
    price: 7.25,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Cheese Burger',
    category: 'Burgers',
    description: 'A tasty burger loaded with melted cheese.',
    price: 9.5,
   

image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=85',

  },
  {
    id: 5,
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    description: 'Classic pepperoni pizza with melted cheese.',
    price: 13.99,
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Healthy Bowl',
    category: 'Salads',
    description: 'A colorful bowl packed with fresh ingredients.',
    price: 8.5,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },
]

const categories = ['All', 'Burgers', 'Pizza', 'Salads']

function Menu({ addToCart }) {
    const [addedDish, setAddedDish] = useState('')
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      dish.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="menu-page">
      <section className="menu-heading">
        <span className="tagline">EXPLORE OUR MENU</span>
        <h1>Find Your Favorite Food</h1>
        <p>Fresh flavors and delicious meals, made for you.</p>

        <input
          className="menu-search"
          type="search"
          placeholder="Search for a dish..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search dishes"
        />

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category ? 'active' : ''
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="menu-results">
        <div className="menu-results-heading">
          <h2>Our Dishes</h2>
          <span>{filteredDishes.length} dishes found</span>
        </div>

        {filteredDishes.length === 0 ? (
          <p className="no-dishes">
            No dishes found. Try another search.
          </p>
        ) : (
          <div className="dish-grid">
            {filteredDishes.map((dish) => (
              <article className="dish-card" key={dish.id}>
                <img src={dish.image} alt={dish.name} />

                <div className="dish-details">
                  <span className="dish-category">
                    {dish.category}
                  </span>

                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>

                  <div className="dish-bottom">
                    <strong>${dish.price.toFixed(2)}</strong>

                    
<button
  onClick={() => {
    addToCart(dish)
    setAddedDish(dish.name)
  }}
>
  Add to Cart
</button>

{addedDish === dish.name && (
  <p className="added-message" role="status">
    ✓ {dish.name} added to cart!
  </p>
)}

                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Menu
