import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/about.css';

const AboutPage = () => {
  return (
    <div className="about-container mx-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
      <div className="content">
        <img
          src="./image/task1.png"
          alt="Ilustrasi JadwalPlus"
          className="about-image1"
        />
        <div>
          <h4 className="about-heading">JadwalPlus</h4>
          <p className="about-text1">
            JadwalPlus mengajak kepada pengguna untuk mengatur jadwal lebih efisien,
            memenejemen waktu lebih mudah lagi. Tujuan utama dari JadwalPlus sendiri
            yaitu untuk mentracking aktivitas sehari-hari, terutama dalam era modern
            di mana kehidupan kita semakin sibuk dan kompleks.
          </p>
        </div>
      </div>
      <div className="team-section">
        <div className="team-heading-container">
          <h4 className="team-heading">Tim Kami</h4>
          <div className="team-line" />
        </div>
        <div className="member-container">
          {/* Kotak 1 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/amin3.png" alt="Foto amin" className="member-image photo" />
              <h4>Munawar</h4>
              <p>(Front end & UI/UX)</p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/munawar_kevin2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram-account"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/munawarkevin2002"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-account"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/munawar-kevin-734a06298/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin-account"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Kotak 2 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/restums.jpg" alt="Foto restu" className="member-image photo" />
              <h4>Restu</h4>
              <p>(Front end & UI/UX)</p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/restu_m.s/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram-account"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/RestuMS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-account"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/restu-muhammad-saputro-402888299/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin-account"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Kotak 3 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/ade.jpg" alt="Foto Ade" className="member-image photo" />
              <h4>Ade</h4>
              <p>(Front end & back end)</p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/im.adelintang/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram-account"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/adelintang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-account"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ade-lintang-permono-2b4a0b29a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin-account"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Kotak 4 */}
          <div className="member-box">
            <div className="member-content">
              <img id="kevin-photo" src="./image/kevin.jpeg" alt="Foto Kevin" className="member-image photo" />
              <h4>Kevin</h4>
              <p>(Front end & UI/UX)</p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/munawar_kevin2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram-account"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/blueskye16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-account"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fabianus-kevin-406285231/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin-account"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Kotak 5 */}
          <div className="member-box">
            <div className="member-content">
              <img src="./image/alul.jpeg" alt="Foto kevin" className="member-image photo" />
              <h4>Alul</h4>
              <p>(Front end & back end)</p>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/munawar_kevin2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram-account"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/blueskye16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-account"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fabianus-kevin-406285231/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin-account"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
