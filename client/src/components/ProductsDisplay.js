import React from 'react';
import ProductCard from './ProductCard';

const ProductsDisplay = ({ title }) => {
    // fetch from here per category
    return (
        <div>
            <h2>Available Art {title}</h2>
            <ProductCard />
        </div>
    );
};

export default ProductsDisplay;
