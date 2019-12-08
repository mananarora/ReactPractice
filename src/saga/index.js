import {IMAGES} from "../constants";
import {takeEvery} from 'redux-saga/effects'

function* workersaga() {
    console.log('hello from worker');
}

function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, workersaga);
}

//If I use yield take(IMAGES.LOAD, workerSaga); then I can see in console count increases of output of workersaga.
//If I use yield take(IMAGES.LOAD); yield call(workersaga); then I see only once workersaga output display in console.
export default rootSaga;