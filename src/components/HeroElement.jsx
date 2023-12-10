import React from 'react';
import { Link } from 'react-router-dom';
import './styles/heroElement.css';

const HeroElement = () => {
  return (
    <div>
      <div className="text-container">
        <p>
          Taklukkan Waktu, Atur Hidup
          <br />
          dengan Lebih Muda
        </p>
        <p>
          Mulailah Mengatur Jadwalmu
          <br />
          dengan JadwalPlus
        </p>
        <Link to="/jadwalpage">
          <button className="hire-btn" type="button">JadwalPlus</button>
        </Link>
      </div>
      <img alt="model" className="model" src="/image/foto.jpeg" />
    </div>
  );
};

export default HeroElement;
