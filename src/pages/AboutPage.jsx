// src/pages/AboutPage.jsx
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/about.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="content">
        <img
          src="./image/task1.png"
          alt="Ilustrasi JadwalPlus"
          className="about-image"
        />
        <div>
          <h3 className="about-heading">JadwalPlus</h3>
          <p className="about-text">
            JadwalPlus mengajak kepada pengguna untuk mengatur jadwal lebih efisien,
            {' '}
            <br />
            memenejemen waktu lebih mudah lagi. Tujuan utama dari JadwalPlus sendiri
            {' '}
            <br />
            yaitu untuk mentracking aktivitas sehari-hari, terutama dalam era modern
            {' '}
            <br />
            di mana kehidupan kita semakin sibuk dan kompleks.
            {' '}
            <br />
          </p>
        </div>
      </div>
      <div className="team-section">
        <div className="team-heading-container">
          <h3 className="team-heading">Tim Kami</h3>
          <div className="team-line" />
        </div>
        <div className="member-container">
          {/* Kotak 1 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/amin.jpg" alt="Foto Amin" className="member-image" />
              <h4>Munawar</h4>
              <p>(Front end & UI/UX)</p>
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/munawar_amin2/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://github.com/munawaramin2002" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/munawar-amin-734a06298/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>

            </div>
          </div>
          {/* Kotak 2 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/amin.jpg" alt="Foto Amin" className="member-image" />
              <h4>Restu</h4>
              <p>(Front end & UI/UX)</p>
            </div>
            <div className="social-icons">
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>
          {/* Kotak 3 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/amin.jpg" alt="Foto Amin" className="member-image" />
              <h4>Ade Lintang</h4>
              <p>(Front end & back end)</p>
            </div>
            <div className="social-icons">
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>
          {/* Kotak 4 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/amin.jpg" alt="Foto Amin" className="member-image" />
              <h4>Kevin</h4>
              <p>(Front end & UI/UX)</p>
            </div>
            <div className="social-icons">
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>
          {/* Kotak 5 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/amin.jpg" alt="Foto Amin" className="member-image" />
              <h4>Alul</h4>
              <p>(Front end & back end)</p>
            </div>
            <div className="social-icons">
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
