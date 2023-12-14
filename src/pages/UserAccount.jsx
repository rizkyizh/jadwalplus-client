import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserLock } from 'react-icons/fa';
import { RiEyeLine } from 'react-icons/ri';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import useInput from '../hooks/useInput';
import { asyncUpdatePassword, asyncDeleteUser } from '../states/users/action';
import './styles/userAcc-style.css';
import '../components/styles/schedule-style.css';

const UserAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useInput('');
  const [newPassword, setNewPassword] = useInput('');
  const [isDeleteConfirmationVisible, setDeleteConfirmationVisibility] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const updateHandler = (event) => {
    event.preventDefault();

    dispatch(asyncUpdatePassword({ oldPassword, newPassword }));
    setOldPassword('');
    setNewPassword('');
  };

  const deleteHandler = () => {
    if (isDeleteConfirmationVisible) {
      dispatch(asyncDeleteUser());
      setDeleteConfirmationVisibility(false);
      navigate('/home');
    } else {
      setDeleteConfirmationVisibility(true);
    }
  };

  return (
    <div className="userPage-container w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-10">
      {isDeleteConfirmationVisible && (
        <div>
          <div className="delete-confirmation-overlay" />
          <div className="delete-confirmation w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
            <h4>Menghapus Akun</h4>
            <p>Apakah Kamu Yakin Menghapus Akun?</p>
            <div className="delete-warning">
              <div className="warning-text-container" />
            </div>
            <div className="confirmation-buttons">
              <button type="button" onClick={deleteHandler}>Ya</button>
              <button type="button" onClick={() => setDeleteConfirmationVisibility(false)}>Tidak</button>
            </div>
          </div>
        </div>
      )}
      <FaUserLock id="lock-img" className="text-8xl mx-auto mb-4" />
      <form onSubmit={updateHandler} id="formSubmit">
        <div id="pasw-input">
          <input
            type={showOldPassword ? 'text' : 'password'}
            placeholder="Password lama"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <button
            type="button"
            className=""
            onClick={() => setShowOldPassword(!showOldPassword)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setShowOldPassword(!showOldPassword);
              }
            }}
          >
            {showOldPassword ? <RiEyeLine /> : <BsFillEyeSlashFill />}
          </button>
        </div>
        <div id="pasw-input">
          <input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="Password baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            className=""
            onClick={() => setShowNewPassword(!showNewPassword)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setShowNewPassword(!showNewPassword);
              }
            }}
          >
            {showNewPassword ? <RiEyeLine /> : <BsFillEyeSlashFill />}
          </button>
        </div>
        <button id="userPage-btn" type="submit">Ubah Password</button>
      </form>
      <button id="userPage-btn1" type="button" onClick={deleteHandler}>
        Hapus Akun
      </button>
    </div>
  );
};

export default UserAccount;
