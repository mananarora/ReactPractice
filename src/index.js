import {createStore} from "redux";

const BUY_CAKE = 'BUY_CAKE';

const initialState = {
    numOfCakes: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        };
        default: return state;
    }
};

const store = createStore(reducer);

function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 1
    }
}

store.subscribe(()=> {
    console.log('State', store.getState());
});

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyCake());