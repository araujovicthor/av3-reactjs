import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { countrySuccess, countryFailure } from './actions';

export function* countryGet() {
  try {
    const response = yield call(api.get, 'country');
    yield put(countrySuccess(response.data));
  } catch (err) {
    yield put(countryFailure());
  }
}

export default all([takeLatest('@location/COUNTRY_REQUEST', countryGet)]);
