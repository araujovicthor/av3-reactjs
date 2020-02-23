import produce from 'immer';

const INITIAL_STATE = {
  country: [],
  state: [],
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
      default:
    }
  });
}
