
import { NavLink } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <span>🍽️</span> TastyBite
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          About
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Menu
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Contact
        </NavLink>
      </div>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `nav-button ${isActive ? 'active-cart' : ''}`
        }
      >
        🛒 Cart ({cartCount})
      </NavLink>
    </nav>
  )
}

export default Navbar
