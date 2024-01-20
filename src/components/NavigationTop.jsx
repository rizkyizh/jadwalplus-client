import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const NavigationTop = ({ authUser }) => {
  return (
    <header className="sticky-top">
      <nav className="px-4">
        <div className="logo">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <span>JadwalPlus</span>
        </div>
        <ul className="container-check">
          <Link to="/user/setting" className="container-check no-underline">
            <li className="text-user-account">{authUser.username}</li>
            <li className="auth-user">
              <FaUserCircle className="auth-link icon-user" />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

NavigationTop.propTypes = {
  authUser: PropTypes.object.isRequired,
};

export default NavigationTop;
