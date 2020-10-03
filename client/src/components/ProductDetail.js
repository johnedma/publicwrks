import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddToCart from './AddToCart';

const ProductDetail = ({ match }) => {
    useEffect(() => {
        // console.log(match);
    }, [match.params.id])
    // let { id } = useParams()
    // const art = useSelector((state, id) => state.arte.id === id)
    let products = useSelector((state) => state.arte)
    // debugger
    // const dispatch = useDispatch()
    // id -= 1
    // const product = art[id]
    let product = products.find(({ id }) => id == match.params.id);
    console.log(product)

    // !!!!!!!!!!!!!!!!pass in obj
    let item = {
        quantity: 1,
        // type: 'Shirt',
        price: 45,
        id: product.id,
        // when rendering cart/checkout component
        // call let products = useSelector((state) => state.arte)
        // then useSelector to get cart state in store
        // let items = useSelector((state) => state.cart)
        // cart has cart prop of cart which is an array of items and total which is a number
    }
    if (!product) return null

    return (
        <div>
            <img src={`${product.imageUrl}`} />
            {product.description}
            {product.title}
            {/* {product.descripion} */}
            {product.dated}
            <AddToCart item={item} />
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
