import React from 'react'
import { ReactComponent as Cart } from '../imgs/shopping-cart-of-checkered-design.svg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';

const AddToCart = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button className='button btn-to-cart is-link is-rounded' onClick={() => dispatch(addToCart(item))}>
        <Cart height='30' width='30' color='white' className='cart' />
        <p>Add</p>
      </button>
    </>
  )
}

export default AddToCart
