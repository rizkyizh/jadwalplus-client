import React from 'react';
import { FaHome, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../pages/styles/auth.css';

const NavigationBottom = () => {
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
        <div className="navigation-icon" id="About">
          <button type="button" className="wrap-icon reset-button">
            <FaSignOutAlt className="icon-navigation-action" />
            <span className="icon-label">About</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBottom;
