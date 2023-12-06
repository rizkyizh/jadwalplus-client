import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import './styles/auth.css';

const LoginPage = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="form-head">
          <img src="/image/task1.png" alt="Task Icon" id="taskIcon" />
          <h1>JadwalPlus</h1>
        </div>
        <h1 id="title">Masuk ke JadwalPlus</h1>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <div className="input-field">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Masukkan Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FaLock />
              <input
                type="password"
                placeholder="Kata Sandi"
                id="mytanggal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div id="signInContainer" className="signContainer">
            <button type="submit" id="signinBtn" className="signBtn">Masuk</button>
            <p>
              Belum memiliki akun?
              <Link to="/register" id="signUpLink">Daftar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
