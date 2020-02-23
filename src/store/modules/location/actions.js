export function countryRequest() {
  return {
    type: '@location/COUNTRY_REQUEST',
  };
}

export function countrySuccess(country) {
  return {
    type: '@location/COUNTRY_SUCCESS',
    payload: { country },
  };
}

export function countryFailure() {
  return {
    type: '@location/COUNTRY_FAILURE',
  };
}

export function stateRequest(country) {
  return {
    type: '@location/STATE_REQUEST',
    payload: { country },
  };
}

export function stateSuccess(state) {
  return {
    type: '@location/STATE_SUCCESS',
    payload: { state },
  };
}

export function stateFailure() {
  return {
    type: '@location/STATE_FAILURE',
  };
}
