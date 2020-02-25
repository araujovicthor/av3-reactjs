export function listRequest() {
  return {
    type: '@watch/LIST_REQUEST',
  };
}

export function listSuccess(list) {
  return {
    type: '@watch/LIST_SUCCESS',
    payload: { list },
  };
}

export function listFailure() {
  return {
    type: '@watch/LIST_FAILURE',
  };
}

export function getPickerRequest(symbol) {
  return {
    type: '@watch/PICKER_REQUEST',
    payload: { symbol },
  };
}

export function getPickerSuccess(picker) {
  return {
    type: '@watch/PICKER_SUCCESS',
    payload: { picker },
  };
}

export function getPickerFailure() {
  return {
    type: '@watch/PICKER_FAILURE',
  };
}
