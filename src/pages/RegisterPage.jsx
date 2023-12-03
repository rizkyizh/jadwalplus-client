import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import useInput from '../hooks/useInput';
import './styles/auth.css';

const RegisterPage = () => {
  const [email, setEmail] = useInput('');
  const [username, setUsername] = useInput('');
  const [password, setPassword] = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ email, username, password });
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
              <FaUser />
              <input
                type="text"
                placeholder="Nama pengguna"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field" id="emailField">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email pengguna"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FaLock />
              <input
                type="password"
                placeholder="tanggal"
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
              <Link to="/login" id="signUpLink">Masuk</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
