import {combineReducers} from "redux";

import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import loadingReducer from './loadingReducer'


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer
});

export default rootReducer;