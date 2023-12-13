import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserLock } from 'react-icons/fa';
import useInput from '../hooks/useInput';
import { asyncUpdatePassword, asyncDeleteUser } from '../states/users/action';
import './styles/userAcc-style.css';

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
    <div className="userPage-container">
      <FaUserLock id="lock-img" className="fa-icon-size" size="8em" />
      <form onSubmit={updateHandler} id="formSubmit">
        <input
          id="pasw-input"
          type="password"
          placeholder="Password lama"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          id="pasw-input"
          type="password"
          placeholder="Password baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button id="userPage-btn" type="submit">Ubah Password</button>
      </form>
      <button id="userPage-btn1" type="button" onClick={deleteHandler}>
        Hapus Akun
      </button>
    </div>
  );
};

export default UserAccount;
