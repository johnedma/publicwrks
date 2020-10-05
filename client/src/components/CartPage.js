import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import blkshirt from '../imgs/blkshirt.png'
import whtshirt from '../imgs/whtshirt.jpg'
import { placeOrder } from '../actions/order'
import uuid from 'uuid/v4';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../actions/cart';
import Confirmation from './Confirmation';

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












  return (
    <div className='cart-page' className='columns'>
      <div className="cart-page--grid" className='column'>

        <div className="cart-page--items">
          {items.length === 0 ? <h1>Your cart is currently empty</h1> : null}
          <div className="item-list" >
            {
              items.length > 0 ?

                items.map((item) => {
                  return (<>
                    <div className="item columns" key={item.id}>
                      <div className=' column'>
                        {/*  */}
                        <div className='product-card-shirt'>
                          <img
                            src={whtshirt}
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
                        <div class="level">
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="heading">Per Unit</p>
                              <p className="title">${item.price}   </p>


                            </div>
                          </div>
                          <div class="level-item has-text-centered">
                            <div>
                              <p className="heading">Quantity </p>
                              <p className="title">{item.quantity}(${item.price * item.quantity})</p>

                            </div>
                          </div>

                        </div>


                      </div>

                    </div>
                    <div class="level">
                      <div class="level-item has-text-centered">
                        <div>
                          <div className='title' onClick={() => dispatch(addToCart(item))}>+ADD+</div>


                        </div>
                      </div>
                      <div class="level-item has-text-centered">
                        <div>
                          <div className='title' onClick={() => dispatch(decrementFromCart(item))}>-SUB-</div>
                          {/* <p className="quantity">Quantity: {item.quantity}</p> */}
                          {/* <p class="heading">Following</p>
<p class="title">123</p> */}
                        </div>
                      </div>
                      <div class="level-item has-text-centered">
                        <div>
                          <button className='title' onClick={() => dispatch(removeFromCart(item))} >Remove</button>
                          {/* <p class="heading">Followers</p>
                          <p class="title">456K</p> */}
                        </div>
                      </div>
                    </div>
                    {/*  */}

                  </>
                  )
                })
                :
                null
            }
          </div>
        </div>
      </div>
      <div className='column'>
        <h2>My Cart</h2>
        <div className="cart-form" >
          <div className="field" >
            <label className="label">Name</label>
            <div className="control">
              <input className="input is-success" type="text" placeholder="Text input" value="This Guy" />
            </div>
          </div>

          <div className="field">
            <label className="label">Address</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Text input" value="875 Nimes Rd, Los Angeles, CA 90077" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            {/* <p className="help is-success">This username is available</p> */}
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="email" placeholder="Email input" value="appassassin2020@gmail.com" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fas fa-check"></i>
              </span>
            </div>
            {/* <p className="help is-danger">This email is invalid</p> */}
          </div>
          <div className="field">
            <label className="label">Payment</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Card input" value="4242 4242 4242 4242" />
              <span className="icon is-small is-left">

                <i className="fas fa-credit-card"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fas fa-check"></i>
              </span>
            </div>
            {/* <p className="help is-danger">This email is invalid</p> */}
          </div>


          <div className="field is-grouped">

            <div className="control">
              <button className='button is-link' onClick={openModal} disabled={items.length === 0} >Buy Now!</button>

              {/* <button className="button is-link">Submit</button> */}
            </div>
            <div className="control">
              <button className='button is-link is-light' disabled={items.length === 0} onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>

              {/* <button className="button is-link is-light">Cancel</button> */}
            </div>
          </div>

          <div class="level">
            <div class="level-item has-text-centered">
              <div>
                {/* <p class="heading">Per Unit</p>
                              <p className="title">${item.price}   </p>

                              <p class="title">${total}</p> */}
                <p className="title is-1">Total</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p className="title is-1">${total}</p>
                {/* <p className="heading">Quantity </p>
                              <p className="title">{item.quantity}(${item.price * item.quantity})</p> */}

              </div>
            </div>

          </div>
          {/* <div className="cart-page--sidebar">

            <p class="title is-1">${total}</p>
            <p class="subtitle is-3">Total</p> */}
          {/* <p className="total">Total: {total}$</p> */}
          {/* <Link to='/' className='go-back'>Go Back</Link> */}
          {/* <button className='clear-cart' disabled={items.length === 0} onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
            <button className='buy-now' onClick={openModal} disabled={items.length === 0} >Buy Now!</button> */}


          {/* <button className='buy-now' disabled={items.length === 0} onClick={() => setModal()} >Buy Now!</button> */}
          {/* </div> */}
        </div>
        {/* <CheckoutModal modal={modal} closeModal={closeModal} /> */}
        {<Confirmation modal={modal} order={order} />}
      </div>
    </div>
  )
}

export default CartPage

// <button className='go-back' onClick={() => { history.push('/') }}>Go Back</button>
