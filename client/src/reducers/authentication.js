// via poke hooks2a
import {
    SET_USER,
    REMOVE_USER,
} from '../actions/authentication';

const authReducer = (state = {}, action) => {
    //!!!!! debugger !!!!! allows us to see these values after fn is invoked
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                token: action.user.token,
            };
        }

        case REMOVE_USER: {
            const nextState = { ...state };
            delete nextState.token;
            return nextState;
        }

        default: return state;
    }
}

export default authReducer;
