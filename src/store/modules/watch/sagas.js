import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import alpha from '../../../services/alpha';

import {
  listSuccess,
  listFailure,
  getPickerSuccess,
  getPickerFailure,
} from './actions';

export function* getList() {
  try {
    const response = yield call(api.get, 'stock');

    yield put(listSuccess(response.data));
  } catch (err) {
    yield put(listFailure());
  }
}

export function* getPicker({ payload }) {
  try {
    const { symbol } = payload;

    const response = yield call(
      alpha.get,
      `query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE}`
    );

    const { 'Time Series (Daily)': timeSeries } = response.data;
    const data = [];

    Object.keys(timeSeries).forEach(key => {
      const { '4. close': close, '5. volume': volume } = timeSeries[key];
      data.push({
        date: key,
        close,
        volume,
      });
    });

    yield put(getPickerSuccess(data));
  } catch (err) {
    yield put(getPickerFailure());
  }
}

export default all([
  takeLatest('@watch/LIST_REQUEST', getList),
  takeLatest('@watch/PICKER_REQUEST', getPicker),
]);
