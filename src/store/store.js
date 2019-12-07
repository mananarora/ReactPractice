import {createStore, applyMiddleware, compose} from "redux";
import createReduxSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/reducers';
import rootSaga from "../saga";

const configStore = () => {
    const sagaMiddleware = createReduxSagaMiddleware();
    const store = createStore(rootReducer,
        compose(applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),)
    );

    sagaMiddleware.run(rootSaga);
    store.dispatch( { type :'ActionToBeDispatch'});

    return store;
};
export default configStore;