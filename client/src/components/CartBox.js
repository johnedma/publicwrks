import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../imgs/shopping-cart-of-checkered-design.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const CartBox = () => {
  const dispatch = useDispatch();
  let cartInfo = useSelector(state => state.cart.cart);
  let total = useSelector(state => state.cart.total);
  // debugger
  let itemQuantity = cartInfo
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0);
  console.log(itemQuantity)
  return (
    <>

      <Link to='/cart' className='cart-box' >
        {/* <Cart height='30' width='30' /> */}
        <p className="title">{itemQuantity} items in cart ${total}</p>
      </Link>
    </>
  )
}

export default CartBox
