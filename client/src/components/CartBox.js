import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../imgs/shopping-cart-of-checkered-design.svg'
import { useSelector } from 'react-redux';
// import './CartBox.scss';
// import { getCartTotal, getCartState } from '../../selectors/phones';
import { useDispatch } from 'react-redux';
// import { clearFilters } from '../../actions/filters';

// export const getAllPhones = state => state.phonesReducer.phones;

// export const getCartState = state => state.phonesReducer.cart;

// export const getCartTotal = state => state.phonesReducer.total;

const CartBox = () => {
  const dispatch = useDispatch();
  let cartInfo = useSelector(state => state.cart.cart);
  let total = useSelector(state => state.cart.total);
  debugger
  // let itemQuantity = cartInfo
  //   .map((item) => item.quantity)
  //   .reduce((item, total) => item + total, 0);

  return (
    <Fragment>
      {/* <Link to='/cart' className='cart-box' onClick={() => dispatch(clearFilters())}> */}
      <Link to='/cart' className='cart-box' >
        <Cart height='30' width='30' color='cornflowerblue' />
        <p>{cartInfo.length} items in cart {total}$</p>
      </Link>
    </Fragment>
  )
}

export default CartBox
