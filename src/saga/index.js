import {takeEvery, put} from 'redux-saga/effects'

function* workersaga() {
    console.log('hello from worker');
    yield put({type: 'action from worker saga'});
}
// Observation- 1- in takeEvery if I write only action without any type than also it dispatches action and if we write both then calls
//                  action then call workersaga, basically needs two parameters
//              2- but in put if I pass only action without type then it doesn't call action, basically needs type parameter compulsory.

function* rootSaga() {
    yield takeEvery('ActionToBeDispatch', workersaga) //takeEvery will take the action and let workerSaga to do its work.
}

export default rootSaga;

// watchersaga -> action -> workersaga


// yield take('LOGIN')                          take is different from takeEvery as take only one action and then proceed to next call.
// yield call('validation or any work')         as in case we want to have only one login call then we use take and then it comes to call.
// yield take('LOGOUT')                         its like if LOGIN hasn't happened then what's use of LOGOUT which should not be call.
// yield call('bye bye')                        We can understand from the flow of the call. Login then some validation then logout.