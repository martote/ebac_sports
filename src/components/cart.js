import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  removeItemFromCart,
  clearCart
} from '../redux/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const dispatch = useDispatch()

  const addToCartHandler = (item) => {
    dispatch(addItemToCart(item))
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id))
  }

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}
            <button onClick={() => removeFromCartHandler(item.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <p>Total: R$ {totalAmount}</p>
      <button onClick={clearCartHandler}>Limpar Carrinho</button>
    </div>
  )
}

export default Cart
