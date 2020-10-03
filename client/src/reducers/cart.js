const cartReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            const addedPhone = state.phones.find((phone) => action.id === phone.id);
            const existingPhone = state.cart.find((existingPhone) => action.id === existingPhone.id);

            if (existingPhone) {
                addedPhone.quantity += 1;
                return {
                    ...state,
                    total: state.total + addedPhone.price
                }
            } else {
                addedPhone.quantity = 1;
                const newTotal = state.total + addedPhone.price
                return {
                    ...state,
                    cart: [...state.cart, addedPhone],
                    total: newTotal
                }
            };
        case 'REMOVE_FROM_CART':
            const phoneToRemove = state.cart.find((phone) => action.id === phone.id)
            const removePhone = state.cart.filter((phone) => action.id !== phone.id);

            const newTotal = state.total - (phoneToRemove.price * phoneToRemove.quantity)
            return {
                ...state,
                cart: removePhone,
                total: newTotal
            }
        case 'DECREMENT':
            const phone = state.cart.find((phone) => action.id === phone.id);

            if (phone.quantity > 1) {
                phone.quantity -= 1;
                const newTotal = state.total - phone.price
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

export default phonesReducer;
