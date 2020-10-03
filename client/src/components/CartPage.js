import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import './CartPage.scss';
// import phoneImg from './../../product-2.png';
// import { getCartState, getCartTotal } from '../actions/cart';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../actions/cart';
// import CheckoutModal from '../CheckoutModal/CheckoutModal';

const CartPage = () => {
  const items = useSelector(state => state.cart.cart);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  // const [ modal, setModal ] = useState(false);

  // const openModal = () => setModal(true);
  // const closeModal = () => setModal(false);

  return (
    <div className='cart-page'>
      <div className="cart-page--grid">

        <div className="cart-page--items">
          {items.length === 0 ? <h1>Your cart is currently empty</h1> : null}
          <div className="item-list" >
            {
              items.length > 0 ?

                items.map((item) => {
                  return (
                    <div className="item" key={item.id}>
                      <div className="item--box">
                        <img src={item.image} alt="item" />
                      </div>

                      <div className="item--details">
                        <p className="title">{item.title} by {item.artist}</p>
                        <div className='block'>
                          <p className="price">{item.price}$   ({item.price * item.quantity}$)</p>
                          <div className="flex-row">
                            <p className="quantity">Quantity: {item.quantity}</p>
                            <div className='add' onClick={() => dispatch(addToCart(item))}>+ADD+</div>
                            <div className='sub' onClick={() => dispatch(decrementFromCart(item))}>-SUB-</div>
                          </div>
                        </div>
                        <button className='remove' onClick={() => dispatch(removeFromCart(item))} >Remove</button>
                      </div>
                    </div>
                  )
                })
                :
                null
            }
          </div>
        </div>

        <div className="cart-page--sidebar">
          <h2>My Cart</h2>
          <p className="total">Total: {total}$</p>
          <Link to='/' className='go-back'>Go Back</Link>
          <button className='clear-cart' disabled={items.length === 0} onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
          {/* <button className='buy-now' onClick={openModal} disabled={items.length === 0} >Buy Now!</button> */}
          <button className='buy-now' disabled={items.length === 0} >Buy Now!</button>
        </div>
      </div>
      {/* <CheckoutModal modal={modal} closeModal={closeModal} /> */}
    </div>
  )
}

export default CartPage

// <button className='go-back' onClick={() => {history.push('/')}}>Go Back</button>
