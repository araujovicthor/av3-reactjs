import { all } from 'redux-saga/effects';

import watch from './watch/sagas';
import register from './register/sagas';
import location from './location/sagas';

export default function* rootSaga() {
  return yield all([watch, register, location]);
}
