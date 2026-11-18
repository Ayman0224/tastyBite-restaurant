
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(dish) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === dish.id
      )

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentCart, { ...dish, quantity: 1 }]
    })
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="*"
          element={
            <main className="welcome-section">
              <h2>Page not found</h2>
              <p>The page you're looking for doesn't exist.</p>
            </main>
          }
        />
      </Routes>

      <footer className="footer">
        <h3>🍽️ TastyBite</h3>
        <p>Fresh food, happy mood.</p>
        <p>© 2026 TastyBite. Frontend project demo.</p>
      </footer>
    </>
  )
}

export default App
