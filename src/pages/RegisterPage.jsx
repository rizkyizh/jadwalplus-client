import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { RiEyeLine } from 'react-icons/ri';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncRegisterUser } from '../states/authUser/action';
// import './styles/auth.css';

const RegisterPage = () => {
  const [email, setEmail] = useInput('');
  const [username, setUsername] = useInput('');
  const [password, setPassword] = useInput('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(asyncRegisterUser({ email, username, password }));
    navigate('/login');
  };

  return (
    <div className="w-[100%] bg-image-auth">
      <div className="flex flex-col justify-around bg-white w-[100%] sm:w-[448px] sm:mx-auto p-6 min-h-screen">
        <div className="flex items-center gap-10">
          <img src="/image/task1.png" alt="Task Icon" id="taskIcon" />
          <h1 className="text-xl font-semibold">JadwalPlus</h1>
        </div>
        <h1 id="title" className="my-6 text-center text-2xl">Daftar ke JadwalPlus</h1>
        <form onSubmit={submitHandler}>
          <div className="input-field w-[100%]">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="username pengguna"
              className="py-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field w-[100%]" id="emailField">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="email pengguna"
              className="py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field input-field w-[100%] relative">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="kata sandi"
              id="mytanggal"
              className="py-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setShowPassword(!showPassword);
                }
              }}
            >
              {showPassword ? <RiEyeLine /> : <BsFillEyeSlashFill />}
            </button>
          </div>
          <div id="signInContainer" className="signContainer mt-10">
            <button type="submit" id="signinBtn" className="bg-[#2845AB] w-[100%] py-2.5 rounded-full text-white hover:bg-blue-500">Daftar</button>
            <section className="text-center mt-3">
              <span>Sudah memiliki akun?</span>
              <Link to="/login" id="signUpLink">Masuk</Link>
              <span> /</span>
              <Link to="/">Home</Link>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
