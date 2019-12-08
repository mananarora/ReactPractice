import {IMAGES} from "../constants";

const initialState = {
    isLoading: false,
    error: ''
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return {
                ...state, isLoading: true
            };
        case IMAGES.LOAD_SUCCESS:
            return {
                ...state, isLoading: false
            };
        case IMAGES.LOAD_FAILURE:
            return {
                ...state, isLoading: false, error: 'Error'
            };


        default: return state
    }
};
export default loadingReducer;