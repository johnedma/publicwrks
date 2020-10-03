import { LOAD_ART } from '../actions/art'

const artReducer = (state = {}, action) => {
    // debugger
    switch (action.type) {
        case LOAD_ART: {
            return action.art
        }
        default: return state;
    }
}

export default artReducer;
