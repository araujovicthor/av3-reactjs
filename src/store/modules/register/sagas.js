import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { registerProfileSuccess, registerProfileFailure } from './actions';

export function* registerProfile({ payload }) {
  try {
    const {
      name,
      birthday,
      worth,
      address,
      country,
      state,
      city,
      ...rest
    } = payload.data;

    const profile = {
      name,
      birthday,
      worth,
      address,
      country,
      state,
      city,
      ...(rest.joint === 1 ? rest : {}),
    };

    const response = yield call(api.post, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(registerProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(registerProfileFailure());
  }
}

export default all([
  takeLatest('@user/REGISTER_PROFILE_REQUEST', registerProfile),
]);
