import produce from 'immer';

const INITIAL_STATE = {
  country: [],
  state: [],
  city: [],
};

export default function location(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@location/COUNTRY_SUCCESS': {
        draft.country = action.payload.country;
        break;
      }
      case '@location/STATE_SUCCESS': {
        draft.state = action.payload.state;
        break;
      }
      case '@location/CITY_SUCCESS': {
        draft.city = action.payload.city;
        break;
      }
      default:
    }
  });
}
