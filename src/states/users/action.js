import api from '../../utils/network-data';
import { asyncUnsetAuthUser } from '../authUser/action';

const asyncDeleteUser = () => {
  return async (dispatch) => {
    try {
      const message = await api.deleteUser();
      alert(message);
      dispatch(asyncUnsetAuthUser());
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncUpdatePassword = ({ oldPassword, newPassword }) => {
  return async () => {
    try {
      const message = await api.updateUserPassword({ oldPassword, newPassword });
      alert(message);
    } catch (error) {
      alert(error.message);
    }
  };
};

export {
  asyncDeleteUser,
  asyncUpdatePassword,
};
