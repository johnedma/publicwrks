import React from 'react';
import shirt from './../imgs/blkshirt.png'

const ProductCard = () => {
    return (
        <div className='containproduct'>
            {/* <div className='containmedium' style={{ backgroundImage: "url(" + shirt + ")" }} > */}
            <div className='containmedium'  >
                {/* <img src={shirt} /> */}
                <span>
                    <img className="art" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/649924/1459018/main-image" />
                </span>
            </div>

            <h3>Viennese Café: On the Terrace (Wiener Café: Auf der Terasse)</h3>
            {/* <div>$45</div> */}

        </div>
    );
};

export default ProductCard;
