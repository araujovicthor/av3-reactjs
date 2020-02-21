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
