import React from 'react';
// import './styles/about.css';
import './styles/Jadwal.css';

const JadwalPage = () => {
  return (
    <div className="about-container">
      <div className="content">
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
            dengan baik,mengorganisir dan mengatur aktivitas belajar. Dalam
            konteks yang lebih umum, JadwalPlus membantu orang untuk mengelola
            waktu mereka secara efisien dan efektif.
          </p>
          <div>
            <h2>Keuntungan Menggunakan Aplikasi JadwalPlus</h2>
            <h3 data-section-counter="1">Efesian Waktu</h3>
            <p1 className="text1">
              Dengan aplikasi JadwalPlus, Anda dapat mengatur, dan memantau
              kegiatan dengan lebih efisien.
            </p1>
            <h3 data-section-counter="2">Manajamenen Stress</h3>
            <p1>
              Dengan memiliki JadwalPlus dapat mengurangi stres karena tahu apa
              yang harus dilakukan dan kapan harus melakukannya.
            </p1>
            <h3 data-section-counter="3">Melacak Kemajuan Belajar</h3>
            <p1>
              Dengan aplikasi JadwalPlus,Dapat melacak kemajuan target
              belajar.Ini membantu pengguna untuk tetap fokus dan termotivasi.
            </p1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalPage;
