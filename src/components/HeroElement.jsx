import React from 'react';
import './styles/heroElement.css';

const CombinedComponent = () => {
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
      </div>
      <img alt="model" className="model" src="/image/foto.jpeg" />

      <div className="about-container">
        <div className="content-hero">
          <img
            src="./image/task1.png"
            alt="Ilustrasi JadwalPlus"
            className="about-image"
          />
          <div>
            <div className="center-box" />
            <h4 className="about-heading">JadwalPlus</h4>
            <p className="about-text">
              JadwalPlus adalah sebuah jadwal dimana pengguna mengelola jadwal
              dengan baik, mengorganisir dan mengatur aktivitas belajar. Dalam
              konteks yang lebih umum, JadwalPlus membantu orang untuk mengelola
              waktu mereka secara efisien dan efektif.
            </p>
            <div className="aboutText-points">
              <h2>Keuntungan Menggunakan Aplikasi JadwalPlus</h2>
              <h3 data-section-counter="1">Efesian Waktu</h3>
              <p1 className="text1">
                Dengan aplikasi JadwalPlus, Anda dapat mengatur, dan memantau
                kegiatan dengan lebih efisien.
              </p1>
              <h3 data-section-counter="2">Manajemen Stress</h3>
              <p1 className="text1">
                Dengan memiliki JadwalPlus dapat mengurangi stres karena tahu apa
                yang harus dilakukan dan kapan harus melakukannya.
              </p1>
              <h3 data-section-counter="3">Melacak Kemajuan Belajar</h3>
              <p1 className="text1">
                Dengan aplikasi JadwalPlus, Dapat melacak kemajuan target
                belajar. Ini membantu pengguna untuk tetap fokus dan termotivasi.
              </p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;
