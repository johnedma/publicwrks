import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getArt } from '../actions/art'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";


class ProductsDisplay extends React.Component {


    render() {
        if (Object.entries(this.props.art).length === 0) return null

        // console.log(`PRODUCTDISPLAY: ${this.props.art}`);

        return (
            <ul className='products-list'>
                {this.props.art
                    .sort(() => Math.random() - 0.5)
                    // .slice(0, 10)
                    .map(art => {
                        return (
                            <li className='products-list-item'>
                                <NavLink to={`/art/${art.id}`}>
                                    <ProductCard art={art} key={art.id} />
                                </NavLink>
                            </li>
                        )
                    })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        art: state.arte
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getArt: () => dispatch(getArt())
        //   createPokemon: (pokemon) => dispatch(createPokemon(pokemon)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDisplay);
