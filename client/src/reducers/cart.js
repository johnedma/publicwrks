// import { useSelector } from "react-redux";

// let items = useSelector((state) => state.arte)

const cartDefaultState = {
    // items: {},
    cart: [],
    total: 0
}

const cartReducer = (state = cartDefaultState, action) => {
    debugger
    switch (action.type) {

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
                total: state.total + action.item.price
                // const addedItem = state.items.find((item) => action.id === item.id);
                // const existingItem = state.cart.find((existingItem) => action.id === existingItem.id);

                // if (existingItem) {
                //     addedItem.quantity += 1;
                //     return {
                //         ...state,
                //         total: state.total + addedItem.price
                //     }
                // } else {
                //     addedItem.quantity = 1;
                //     const newTotal = state.total + addedItem.price
                //     return {
                //         ...state,
                //         cart: [...state.cart, addedItem],
                //         total: newTotal
                //     }
            };
        case 'REMOVE_FROM_CART':
            const itemToRemove = state.cart.find((item) => action.id === item.id)
            const removeItem = state.cart.filter((item) => action.id !== item.id);

            const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            return {
                ...state,
                cart: removeItem,
                total: newTotal
            }
        case 'DECREMENT':
            const item = state.cart.find((item) => action.id === item.id);

            if (item.quantity > 1) {
                item.quantity -= 1;
                const newTotal = state.total - item.price
                return {
                    ...state,
                    total: newTotal
                }
            } else {
                return state
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                total: 0
            }
        default:
            return state;
    }
}

export default cartReducer;
