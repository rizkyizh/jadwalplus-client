import React from 'react';
import './styles/header.css';
import { FaUserCircle } from 'react-icons/fa';

const NavigationTop = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <span>JadwalPlus</span>
        </div>
        <ul>
          <li className="auth-user">
            <FaUserCircle className="auth-link icon-user" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationTop;
