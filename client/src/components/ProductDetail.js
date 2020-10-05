import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddToCart from './AddToCart';
import ProductCard from './ProductCard';

const ProductDetail = ({ match }) => {
    useEffect(() => {
        // console.log(match);
    }, [match.params.id])
    // let { id } = useParams()
    // const art = useSelector((state, id) => state.arte.id === id)

    let products = useSelector((state) => state.arte)
    if (Object.entries(products).length === 0) return null
    let product = products.find(({ id }) => id == match.params.id);
    // !!!!!!!!!!!!!!filter by artist id for recs div to render


    // let recs = products.find(({ id }) => id == match.params.id);
    // .sort(() => Math.random() - 0.5)
    // console.log(recs)

    // const removeItem = products.filter((product) => action.item.id !== item.id);

    // debugger
    // const dispatch = useDispatch()
    // id -= 1
    // const product = art[id]

    // !!!!!!!!!!!!!!!!pass in obj
    let item = {
        quantity: 1,
        // type: 'Shirt',
        price: 45,
        id: product.id,
        image: product.imageUrl,
        title: product.title,
        artist: product.artist,
        artistId: product.artistId,
        dated: product.dated,
        description: product.description
        // when rendering cart/checkout component
        // call let products = useSelector((state) => state.arte)
        // then useSelector to get cart state in store
        // let items = useSelector((state) => state.cart)
        // cart has cart prop of cart which is an array of items and total which is a number
    }
    if (!product) return null

    return (
        <div className="columns">
            <div className="column">

                {/* <img src={`${product.imageUrl}`} /> */}
                <ProductCard art={product} />
            </div>
            <div className="column">
                <h1> {product.description}</h1>
                <div className="subtitle"> {product.title} </div>
                <div class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Per Unit</p>
                            <p className="title">$45  </p>


                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p className="heading">Origin </p>
                            <p className="title">{product.dated}</p>

                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>


                            <AddToCart item={item} />
                        </div>
                    </div>
                </div>
            </div>
            {/* product custo div*/}
            {/* product descrip and price div inline with custo div + add to card  */}
            {/* <button onClick={() => dispatch(addToCart(order))}>+</button>
            <button onClick={() => dispatch(removeFromCart(order))}>-</button> */}
        </div>
    );
};
// add to cart component and dispatch to the store for that user
// in checkout useselector to grap store
// make cart a floating favicon
export default ProductDetail;

// cart init as empty array
