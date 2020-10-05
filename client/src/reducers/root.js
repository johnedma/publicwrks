import { combineReducers } from 'redux';
import authentication from './authentication';
import arte from './art'
import cart from './cart'
const rootReducer = combineReducers({
    authentication,
    arte,
    cart
});

export default rootReducer;
