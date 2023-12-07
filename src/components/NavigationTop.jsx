import React from 'react';
import './styles/header.css';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const NavigationTop = ({ authUser }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <span>JadwalPlus</span>
        </div>
        <ul className="container-check">
          <li>{authUser.username}</li>
          <li className="auth-user">
            <FaUserCircle className="auth-link icon-user" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

NavigationTop.propTypes = {
  authUser: PropTypes.object.isRequired,
};

export default NavigationTop;
