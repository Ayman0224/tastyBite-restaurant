
function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <section className="contact-heading">
        <span className="tagline">YOUR ORDER</span>
        <h1>Shopping Cart</h1>
        <p>Review your delicious choices before checking out.</p>
      </section>

      {cart.length === 0 ? (
        <section className="empty-cart">
          <div>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Explore our menu and add something delicious!</p>
          <a href="/menu" className="primary-button">
            Explore Menu →
          </a>
        </section>
      ) : (
        <section className="cart-section">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>

                  <div className="cart-actions">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>

                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button
              className="primary-button"
              onClick={() =>
                alert(
                  'Thank you for choosing TastyBite!'
                )
              }
            >
              Place Order →
            </button>
          </div>
        </section>
      )}
    </main>
  )
}

export default Cart
