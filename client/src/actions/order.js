// import uuid from 'uuid/v4';

// export const makeOrder = ({ shippingInfo = {}, cardInfo = {}, items = {} } = {}) => ({
//   type: 'MAKE_ORDER',
//   order: {
//     id: uuid(),
//     shippingInfo,
//     cardInfo,
//     items
//   }
// })

export const MAKE_ORDER = 'MAKE_ORDER'


const makeOrder = order => ({
    type: MAKE_ORDER,
    order,
});

export const placeOrder = order => {
    // return async dispatch => {
    // const res = await fetch(`/api/orders`, {
    fetch(`/api/orders`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => {
            if (res.ok) {
                console.log(res)
                // dispatchEvent(clearcart)
                return order.confId;
            }
            throw res;
        })
}
