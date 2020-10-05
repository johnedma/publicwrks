import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import shirt from '../imgs/blkshirt.png'
import { placeOrder } from '../actions/order'
// import './CartPage.scss';
import uuid from 'uuid/v4';
// import phoneImg from './../../product-2.png';
// import { getCartState, getCartTotal } from '../actions/cart';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../actions/cart';
import Confirmation from './Confirmation';
// import CheckoutModal from '../CheckoutModal/CheckoutModal';

const CartPage = () => {
  const items = useSelector(state => state.cart.cart);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  const [modal, setModal] = useState("modal");

  const openModal = () => setModal("modal is-active");
  const closeModal = () => setModal(false);

  let order = {
    confId: uuid().substring(0, 7),
    total,
    items
  }
  console.log(order)







  //   const handleSubmit = async (e)  => {
  //     e.preventDefault()

  //     // const payload = this.state;
  //     // payload.moves = [payload.move1, payload.move2];

  //  const res = placeOrder(order)

  //       // this.props.handleCreated(await response.json());
  //     }
  //   }









  return (
    <div className='cart-page' className='columns'>
      <div className="cart-page--grid" className='column'>

        <div className="cart-page--items">
          {items.length === 0 ? <h1>Your cart is currently empty</h1> : null}
          <div className="item-list" >
            {
              items.length > 0 ?

                items.map((item) => {
                  return (
                    <div className="item columns" key={item.id}>
                      <div className='product-card column'>
                        {/*  */}
                        <div className='product-card-shirt'>
                          <img
                            src={shirt}
                            alt="T-Shirt"
                          />
                          <div className='product-card-shirt-art'>
                            <img
                              src={item.image}
                              alt={`${item.title} by ${item.artist}`}
                            />
                          </div>
                        </div>
                        {/* <p>{`${item.title}`}</p> */}
                      </div>
                      {/*  */}
                      <div className="item--details column">
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
      </div>
      <div className='column'>
        <div >
          <div className="field" >
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          {/* <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                      I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" />
                        Yes
    </label>
              <label className="radio">
                <input type="radio" name="question" />
                          No
    </label>
            </div>
          </div> */}

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
          <div className="cart-page--sidebar">
            <h2>My Cart</h2>

            <p className="total">Total: {total}$</p>
            <Link to='/' className='go-back'>Go Back</Link>
            <button className='clear-cart' disabled={items.length === 0} onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
            <button className='buy-now' onClick={openModal} disabled={items.length === 0} >Buy Now!</button>


            {/* <button className='buy-now' disabled={items.length === 0} onClick={() => setModal()} >Buy Now!</button> */}
          </div>
        </div>
        {/* <CheckoutModal modal={modal} closeModal={closeModal} /> */}
        {<Confirmation modal={modal} order={order} />}
      </div>
    </div>
  )
}

export default CartPage

// <button className='go-back' onClick={() => { history.push('/') }}>Go Back</button>
