import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import useInput from '../hooks/useInput';
import { asyncRegisterUser } from '../states/authUser/action';
import './styles/auth.css';

const RegisterPage = () => {
  const [email, setEmail] = useInput('');
  const [username, setUsername] = useInput('');
  const [password, setPassword] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(asyncRegisterUser({ email, username, password }));
    navigate('/');
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="form-head">
          <img src="/image/task1.png" alt="Task Icon" id="taskIcon" />
          <h1>JadwalPlus</h1>
        </div>
        <h1 id="title">Daftar ke JadwalPlus</h1>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <div className="input-field">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Nama pengguna"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field" id="emailField">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email pengguna"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password pengguna"
                id="mytanggal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div id="signInContainer" className="signContainer">
            <button type="submit" id="signinBtn" className="signBtn">Daftar</button>
            <p>
              Sudah memiliki akun?
              <Link to="/" id="signUpLink">Masuk</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
