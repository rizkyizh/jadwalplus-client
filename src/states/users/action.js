import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/network-data';
import { asyncUnsetAuthUser } from '../authUser/action';

const asyncDeleteUser = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const message = await api.deleteUser();
      alert(message);
      dispatch(asyncUnsetAuthUser());
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
};

const asyncUpdatePassword = ({ oldPassword, newPassword }) => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const message = await api.updateUserPassword({ oldPassword, newPassword });
      alert(message);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
};

export {
  asyncDeleteUser,
  asyncUpdatePassword,
};
