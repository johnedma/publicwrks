import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, Route } from 'react-router-dom';
import blkshirt from '../imgs/blkshirt.png'
import whtshirt from '../imgs/whtshirt.jpg'
import uuid from 'uuid/v4';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../actions/cart';
import Confirmation from './Confirmation';
import Home from './Home';

const CartPage = () => {
  const items = useSelector(state => state.cart.cart);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState("875 Nimes Rd, Los Angeles, CA 90077");
  const [email, setEmail] = useState("appassassin2020@gmail.com");
  const [card, setCard] = useState("4242 4242 4242 4242");

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState("modal");
  const [order, setOrder] = useState({});
  const updateName = (e) => setName(e.target.value);
  // const openModal = () => setModal("modal is-active");
  const closeModal = () => {
    setName('')
    setOrder({});
    dispatch(clearCart())


  }

  let customer = {
    name,
    address,
    email
  }


  const placeOrder = () => {
    let order = {
      confId: uuid().substring(0, 7),
      total,
      items,
      customer
    }
    setLoading(true)

    fetch(`/api/orders`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          console.log("successful order cartpage line 67")
          // dispatchEvent(clearcart)
          return
        }
        throw res;
      })
      .then(setOrder(order))
    setLoading(false)

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
                              <p className="heading">QTY (${item.price * item.quantity})</p>
                              <p className="title">{item.quantity}</p>

                            </div>
                          </div>

                        </div>


                      </div>

                    </div>
                    <div class="level">
                      <div class="level-item has-text-centered">
                        <div>
                          <div className='title summary' onClick={() => dispatch(addToCart(item))}>+ADD+</div>


                        </div>
                      </div>
                      <div class="level-item has-text-centered">
                        <div>
                          <div className='title summary' onClick={() => dispatch(decrementFromCart(item))}>-SUB-</div>

                        </div>
                      </div>
                      <div class="level-item has-text-centered">
                        <div>
                          <div className='title summary' onClick={() => dispatch(removeFromCart(item))} >Remove</div>

                        </div>
                      </div>
                    </div>

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
              <input className="input is-success" type="text" placeholder="Please Enter Your Name And Submit" value={name} onChange={updateName} />
            </div>
          </div>

          <div className="field">
            <label className="label">Address</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Text input" value={address} />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="email" placeholder="Email input" value={email} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fas fa-check"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Payment</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Card input" value={card} />
              <span className="icon is-small is-left">

                <i className="fas fa-credit-card"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fas fa-check"></i>
              </span>
            </div>
          </div>


          <div className="field is-grouped">

            <div className="control">
              <button className='button is-link' onClick={placeOrder} disabled={items.length === 0} >Buy Now</button>

            </div>
            <div className="control">
              <button className='button is-link is-light' disabled={items.length === 0} onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>

            </div>
          </div>

          <div class="level">
            <div class="level-item has-text-centered">
              <div>

                <p className="title is-1">Total</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p className="title is-1">${total}</p>


              </div>
            </div>

          </div>


        </div>

        {order.confId &&
          <Confirmation closeModal={closeModal} order={order} />
        }
      </div>
    </div>
  )
}

export default CartPage
