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
