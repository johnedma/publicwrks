import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    let { id } = useParams()
    // const art = useSelector((state, id) => state.arte.id === id)
    const art = useSelector((state) => state.arte)
    const dispatch = useDispatch()
    id -= 1
    const product = art[id]
    let order = {
        quantity: 1,
        type: 'Shirt',
        price: 45
    }

    // console.log(id)
    // debugger

    return (
        <div>
            <img src={`${product.imageUrl}`} />
            {/* product custo div*/}
            {/* product descrip and price div inline with custo div + add to card  */}
            <button onClick={() => dispatch(addToCart(order))}>+</button>
            <button onClick={() => dispatch(removeFromCart(order))}>-</button>
        </div>
    );
};
// add to cart component and dispatch to the store for that user
// in checkout useselector to grap store
// make cart a floating favicon
export default ProductDetail;

// cart init as empty array
