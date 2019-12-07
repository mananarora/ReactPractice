import {IMAGES} from "../constants";

const errorReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAILURE:
            return true;
        case IMAGES.LOAD_SUCCESS:
        case IMAGES.LOAD:
            return  null;

        default: return state
    }
};
export default errorReducer;