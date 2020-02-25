import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  picker: [],
};

export default function idea(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@watch/LIST_SUCCESS': {
        draft.list = action.payload.list;
        break;
      }
      case '@watch/PICKER_SUCCESS': {
        draft.picker = action.payload.picker;
        break;
      }
      default:
    }
  });
}
