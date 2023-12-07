import React from 'react';
import {
  FaHome, FaPlusCircle, FaArchive, FaSignOutAlt,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../pages/styles/auth.css';

const NavigationBottom = ({ logout }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/home');
  };

  return (
    <div className="navigation navigation-bottom">
      <div className="navigation-icons container-icon">
        <div className="navigation-icon" id="add-icon">
          <Link to="/" className="reset-link wrap-icon">
            <FaHome className="icon-navigation-action" />
            <span className="icon-label">Home</span>
          </Link>
        </div>
        <div className="navigation-icon" id="add-book-icon">
          <Link to="/schedule/add" className="wrap-icon reset-link">
            <FaPlusCircle className="icon-navigation-action" />
            <span className="icon-label">Add</span>
          </Link>
        </div>
        <div className="navigation-icon" id="add-book-icon">
          <Link to="/schedules/arsip" className="wrap-icon reset-link">
            <FaArchive className="icon-navigation-action" />
            {' '}
            <span className="icon-label">Arsip</span>
          </Link>
        </div>
        <div className="navigation-icon" id="About">
          <button type="button" className="wrap-icon reset-button" onClick={logoutHandler}>
            <FaSignOutAlt className="icon-navigation-action" />
            <span className="icon-label">keluar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

NavigationBottom.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavigationBottom;
