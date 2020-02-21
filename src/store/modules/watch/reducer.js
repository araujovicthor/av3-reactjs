import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default function idea(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@watch/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@watch/LIST_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@watch/LIST_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
