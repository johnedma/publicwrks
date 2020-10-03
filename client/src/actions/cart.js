// import uuid from 'uuid/v4';

// export const addNewPhone = ({ brand = '', name = '', price = '', description = '', stats, size = '', resolution = '', GPU = '', CPU = '', camera = '', battery = '' } = {}) => ({
//   type: 'ADD_NEW_PHONE',
//   phone: {
//     id: uuid(),
//     brand,
//     name,
//     price,
//     description,
//     stats: {
//       size,
//       resolution,
//       GPU,
//       CPU,
//       camera,
//       battery
//     }
//   }
// })

export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    item
});
// export const addToCart = (id) => ({
//     type: 'ADD_TO_CART',
//     id
// });

export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    item
});
// export const removeFromCart = (id) => ({
//     type: 'REMOVE_FROM_CART',
//     id
// });

export const decrementFromCart = (item) => ({
    type: 'DECREMENT',
    item
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
});
