import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArt } from '../actions/art';
import ProductCard from './ProductCard';
import ProductsDisplay from './ProductsDisplay';


// fetch here on page load for initial state and pass props
class Home extends React.Component {
    componentDidMount() {
        // const dispatch = useDispatch();
        // dispatch(getArt(artistId))
        this.props.getArt()
        // debugger
    }
    // component renders
    // use effect then call load data map state?
    // const dispatch = useDispatch();
    // // const {artistId} = useParams();
    // const arte = useSelector(state => state.arte.arte)

    // useEffect(() => {
    //     dispatch(getArt())
    //     // debugger
    // }, [dispatch])
    // console.log("*******")
    // // console.log(props)
    // console.log("*******")
    // console.log(arte)
    // console.log("*******")
    // // console.log(arte[0])
    // console.log("*******")
    // if (!arte) { return null }
    render() {
        return (
            <>

                <ProductsDisplay />
                {/* <ProductsDisplay artistId={2} />
            <ProductsDisplay artistId={3} /> */}
                {/* <ProductsDisplay type={type.mug} artist={artists.artistId[1]} />
            <ProductsDisplay type={type.phonecase} artist={artists.artistId[2]} />
            <ProductsDisplay type={type.pillow} artist={artists.artistId[3]} /> */}
            </>
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
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
