import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncUpdatePassword, asyncDeleteUser } from '../states/users/action';

const UserAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useInput('');
  const [newPassword, setNewPassword] = useInput('');

  const updateHandler = (event) => {
    event.preventDefault();

    dispatch(asyncUpdatePassword({ oldPassword, newPassword }));
    setOldPassword('');
    setNewPassword('');
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteUser());
    navigate('/home');
  };

  return (
    <div>
      <form onSubmit={updateHandler}>
        <input
          type="password"
          placeholder="password lama"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="password baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Ubah password</button>
      </form>
      <button type="button" onClick={deleteHandler}>
        hapus akun
      </button>
    </div>
  );
};

export default UserAccount;
