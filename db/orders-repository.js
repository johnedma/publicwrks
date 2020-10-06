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

// order is an obj with an array of items and a order #
// form can just appear to take name email creditcard etc but no fucntionality
// just a placeholder with a onclick button that takes the order and makes post request
// modal renders with order conf from uiid
// dashboard renders list of orders by a find all
//

const { Order } = require('./models');

async function create(details) {
    const order = await Order.create(details);
    // player.setPassword(details.password);
    console.log(`New Order ID: ${order.id}`)
    return order;
}



module.exports = {
    create,

};
