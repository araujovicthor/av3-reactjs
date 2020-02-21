import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { listSuccess, listFailure } from './actions';

export function* getList() {
  try {
    const response = yield call(api.get, 'ideas');

    yield put(listSuccess(response.data));
  } catch (err) {
    yield put(listFailure());
  }
}

export default all([takeLatest('@watch/LIST_REQUEST', getList)]);
