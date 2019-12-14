import { fork, join, put, takeEvery } from 'redux-saga/effects';
import request from '../../utils/request';
import { addGifs } from './actions';
import { giphyInputUrl, numberOfGifs } from './constants';
import * as types from './types';

function* fetchGifsSaga(action) {
  try {
    const weirdGifsForks = [];
    for (let i = 0; i <= numberOfGifs; i++) {
      weirdGifsForks.push(yield fork(request, giphyInputUrl(action.value, 0)));
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
    // TODO: throw error or try to fetch again
  }
}

function* fetchGifs() {
  yield takeEvery(types.GET_GIFS, fetchGifsSaga);
}

export default fetchGifs;