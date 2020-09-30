import { combineReducers } from 'redux';
import authentication from './authentication';

const rootReducer = combineReducers({
    authentication,
    //   pokemon,
});

export default rootReducer;
