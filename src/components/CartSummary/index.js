// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => {
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const count = cartList.length
        const totalOrderValue = cartList.reduce(
          (total, eachItem) => total + eachItem.price * eachItem.quantity,
          0,
        )
        return (
          <div className="cartsummary-container">
            <h1 className="order-total">
              Order Total:{' '}
              <span className="order-total-value">{totalOrderValue}/-</span>
            </h1>
            <p className="count-descp">{count} items in cart</p>
            <button className="check-out-button">CheckOut</button>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
