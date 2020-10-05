import React from 'react';
import { useParams } from 'react-router-dom';
import shirt from './../imgs/blkshirt.png'
import ProductDetail from './ProductDetail';
// useParams

const ProductCard = ({ art }) => {
    return (
        <div className='product-card'>
            <div className='product-card-shirt'>
                <img
                    src={shirt}
                    alt="T-Shirt"
                />
                <div className='product-card-shirt-art'>
                    <img
                        src={art.imageUrl}
                        alt={`${art.title} by ${art.artist}`}
                    />
                </div>
            </div>
            <h2>{`${art.title}`}</h2>
        </div>
    );
};

export default ProductCard;

// PRIORITY IS HOME PAGE PRODUCTDISPLAY THAT HAS A ARTIST AND TYPE PROP PASSED IN
// PRODUCT CARD THAT ACCEPTS ART AND TYPE PROP FROM DISPLAY ARE WRAPPED IN NAV
// WHEN CLICKED PRODUCT CARD NAVS to  <ProductDetail= `art/${art.id}/${product.type}`
// productdetail needs a getType and call getArt if art prop is null
// get type has a id name price
// ProductDetail should render product and addtocart and quantity
// finally is cart that checksout and pushes order and returns a confirmation number

// show all from an artists as to = `/artist/${art.artistId} with a fetch for all that artist stuff
