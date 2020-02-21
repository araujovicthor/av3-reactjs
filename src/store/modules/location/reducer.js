import produce from 'immer';

const INITIAL_STATE = {
  country: [],
};

export default function location(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@location/COUNTRY_SUCCESS': {
        draft.country = action.payload.country;
        break;
      }
      default:
    }
  });
}
