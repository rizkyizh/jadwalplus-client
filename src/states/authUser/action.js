import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/network-data';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unsetAuthUserActionCreator = () => {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
};

const asyncRegisterUser = ({ username, email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await api.register({ username, email, password });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
};

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
};

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator(unsetAuthUserActionCreator()));
    api.putAccessToken('');
    dispatch(hideLoading());
  };
};

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncRegisterUser,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
