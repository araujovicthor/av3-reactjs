export function registerProfileRequest(data) {
  return {
    type: '@user/REGISTER_PROFILE_REQUEST',
    payload: { data },
  };
}

export function registerProfileSuccess(profile) {
  return {
    type: '@user/REGISTER_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function registerProfileFailure() {
  return {
    type: '@user/REGISTER_PROFILE_FAILURE',
  };
}
