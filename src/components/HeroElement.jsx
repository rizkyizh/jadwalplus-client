import React from 'react';
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
        <a href="/#/beranda">
          <button className="hire-btn" type="button">JadwalPlus</button>
        </a>
      </div>
      <img alt="model" className="model" src="/image/foto.jpeg" />
    </div>
  );
};

export default HeroElement;
