import { combineReducers } from 'redux';

import register from './register/reducer';
import watch from './watch/reducer';
import location from './location/reducer';

export default combineReducers({
  register,
  location,
  watch,
});
