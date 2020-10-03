import { combineReducers } from 'redux';
import authentication from './authentication';
import arte from './art'
const rootReducer = combineReducers({
    authentication,
    arte
});

export default rootReducer;
