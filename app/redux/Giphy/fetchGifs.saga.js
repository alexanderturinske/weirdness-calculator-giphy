import { fork, join, put, takeEvery } from 'redux-saga/effects';
import request from '../../utils/request';
import { addGifs } from './actions';
import { giphyInputUrl } from './constants';
import { maxWeirdness } from '../../constants';
import * as types from './types';

function* fetchGifsSaga(action) {
  try {
    const weirdGifsForks = [];
    for (let i = 0; i <= maxWeirdness; i++) {
      weirdGifsForks.push(yield fork(request, giphyInputUrl(action.value, i)));
    }
    const weirdGifs = yield join(weirdGifsForks);
    // Convert array to object to store in the redux store in case any operations
    // nned to be made on the list
    const gifs = weirdGifs.reduce((acc, curr, i) => {
      acc[i] = curr;
      return acc;
    }, {});
    yield put(addGifs(gifs));
  } catch (e) {
    throw new Error(e);
  }
}

function* fetchGifs() {
  yield takeEvery(types.GET_GIFS, fetchGifsSaga);
}

export default fetchGifs;
