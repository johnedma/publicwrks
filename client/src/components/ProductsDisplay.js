import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getArt } from '../actions/art'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";


class ProductsDisplay extends React.Component {
    componentDidMount() {
        // const dispatch = useDispatch();
        // dispatch(getArt(artistId))
        // this.props.getArt(this.props.artistId)
        // debugger
    }
    // fetch from here per category
    // const {artistId} = useParams();
    // const arte = useSelector(state => state.arte)

    // useEffect(() => {
    //     dispatch(getArt(artistId))
    // }, [dispatch])
    // // console.log(arte)
    // debugger

    render() {
        if (Object.entries(this.props.art).length === 0) return null
        console.log(`PRODUCTDISPLAY: ${this.props.art}`);
        return (
            <div>
                {this.props.art
                    // .slice(0, 10)
                    .sort(() => Math.random() - 0.5)
                    .map(art => {
                        return (
                            <NavLink to={`/art/${art.id}`}>

                                <ProductCard art={art} key={art.id} />
                            </NavLink>
                        )
                    })}
                {/* {this.props.art.slice(30, 40)
                    .sort(() => Math.random() - 0.5)
                    .map(art => {
                        return (
                            <NavLink to={`/art/${art.id}`}>

                                <ProductCard art={art} />
                            </NavLink>
                        )
                    })} */}
            </div>
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
