import React, { Fragment } from 'react'
// import './AddToCart.scss'
import { ReactComponent as Cart } from '../imgs/shopping-cart-of-checkered-design.svg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';

const AddToCart = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <button className='add-to-cart mb-small' onClick={() => dispatch(addToCart(item))}>
        <Cart height='15' width='15' color='white' className='cart' />
        Add
      </button>
    </Fragment>
  )
}

export default AddToCart
