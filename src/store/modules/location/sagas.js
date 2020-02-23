import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  countrySuccess,
  countryFailure,
  stateSuccess,
  stateFailure,
  citySuccess,
  cityFailure,
} from './actions';

export function* countryGet() {
  try {
    const response = yield call(api.get, 'country');
    yield put(countrySuccess(response.data));
  } catch (err) {
    yield put(countryFailure());
  }
}

export function* stateGet({ payload }) {
  try {
    const { country } = payload;

    const response = yield call(api.get, `state?country=${country}`);
    yield put(stateSuccess(response.data));
  } catch (err) {
    yield put(stateFailure());
  }
}

export function* cityGet({ payload }) {
  try {
    const { state } = payload;

    const response = yield call(api.get, `city?state=${state}`);
    yield put(citySuccess(response.data));
  } catch (err) {
    yield put(cityFailure());
  }
}

export default all([
  takeLatest('@location/COUNTRY_REQUEST', countryGet),
  takeLatest('@location/STATE_REQUEST', stateGet),
  takeLatest('@location/CITY_REQUEST', cityGet),
]);
