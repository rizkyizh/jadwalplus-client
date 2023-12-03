import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <span>JadwalPlus</span>
        </div>
        <ul>
          <li className="nav-item"><Link to="/" className="active">Beranda</Link></li>
          <li className="nav-item"><Link to="/beranda">JadwalPlus</Link></li>
          <li className="nav-item"><Link to="/about">Tentang Kami</Link></li>
          <li className="auth-box login-box"><Link to="/login" className="auth-aja">Masuk</Link></li>
          <li className="auth-box"><Link to="/register" className="auth-link">Daftar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
