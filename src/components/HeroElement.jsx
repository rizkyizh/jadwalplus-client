import React from 'react';
import './styles/heroElement.css';

const CombinedComponent = () => {
  return (
    <>
      <section className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-2 p-8">
        <div className="text-2xl">
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
        <img alt="model" className="w-[95%] lg:w-[50%] xl:w-[45%]" src="/image/foto.jpeg" />
      </section>
      <section className="p-8 lg:flex lg:justify-center lg:items-center gap-3 lg:gap-8 lg:w-[80%] lg:mx-auto">
        <div className="flex lg:flex-col items-center gap-6">
          <img
            src="./image/task1.png"
            alt="Ilustrasi JadwalPlus"
          />
          <h4 className="text-2xl font-semibold">JadwalPlus</h4>
        </div>
        <p className="mt-5 text-base">
          JadwalPlus adalah sebuah jadwal dimana pengguna mengelola jadwal
          dengan baik, mengorganisir dan mengatur aktivitas belajar. Dalam
          konteks yang lebih umum, JadwalPlus membantu orang untuk mengelola
          waktu mereka secara efisien dan efektif.
        </p>
      </section>
      <section className="mb-6">
        <div className="aboutText-points lg:w-[80%] mx-auto">
          <h2 className="font-semibold">Keuntungan Menggunakan Aplikasi JadwalPlus</h2>
          <h3 data-section-counter="1" className="text-lg">Efesian Waktu</h3>
          <p1 className="text1">
            Dengan aplikasi JadwalPlus, Anda dapat mengatur, dan memantau
            kegiatan dengan lebih efisien.
          </p1>
          <h3 data-section-counter="2" className="text-lg">Manajemen Stress</h3>
          <p1 className="text1">
            Dengan memiliki JadwalPlus dapat mengurangi stres karena tahu apa
            yang harus dilakukan dan kapan harus melakukannya.
          </p1>
          <h3 data-section-counter="3" className="text-lg">Melacak Kemajuan Belajar</h3>
          <p1 className="text1">
            Dengan aplikasi JadwalPlus, Dapat melacak kemajuan target
            belajar. Ini membantu pengguna untuk tetap fokus dan termotivasi.
          </p1>
        </div>
      </section>
    </>
  );
};

export default CombinedComponent;
