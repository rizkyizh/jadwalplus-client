import React from "react";

const stats = [
  {
    id: 1,
    name: "Efesian Waktu",
    value:
      "Dengan aplikasi JadwalPlus, Anda dapat mengatur, dan memantau kegiatan dengan lebih efisien",
  },
  {
    id: 2,
    name: "Manajemen Stress",
    value:
      "Dengan memiliki JadwalPlus dapat mengurangi stres karena tahu apa yang harus dilakukan dan kapan harus melakukannya",
  },
  {
    id: 3,
    name: "annually",
    value:
      "Dengan aplikasi JadwalPlus, Dapat melacak kemajuan target belajar. Ini membantu pengguna untuk tetap fokus dan termotivasi",
  },
];

const CombinedComponent = () => {
  return (
    <>
      {/* hero-start */}
      <section className="hero mt-6 flex flex-col lg:flex-row items-center justify-center gap-2 p-8">
        <div className="text-2xl font-extrabold sm:text-3xl">
          <p>
            Taklukkan Waktu, Atur Hidup
            <br />
            dengan Lebih Mudah
          </p>
          <p>
            Mulailah Mengatur Jadwalmu
            <br />
            dengan JadwalPlus
          </p>
        </div>
        <img
          alt="model"
          className="w-[95%] lg:w-[50%] xl:w-[45%]"
          src="/image/foto.jpeg"
        />
      </section>
      {/* hero-end */}
      {/* intro-start */}
      <section className="p-8 gap-6 mx-auto lg:w-3/4 lg:flex lg:justify-center lg:items-center">
        <div className="flex lg:flex-col items-center justify-center mr-3">
          <img
            src="./image/task1.png"
            alt="Ilustrasi JadwalPlus"
            className="mr-3 w-[100px] md:w-[150px]"
          />
          <h4 className="text-2xl font-semibold">JadwalPlus</h4>
        </div>
        <p className="mt-5 text-lg">
          <span className="font-bold">JadwalPlus</span> adalah sebuah jadwal
          dimana pengguna mengelola jadwal dengan baik, mengorganisir dan
          mengatur aktivitas belajar. Dalam konteks yang lebih umum, JadwalPlus
          membantu orang untuk mengelola waktu mereka secara efisien dan
          efektif.
        </p>
      </section>
      {/* intro-end */}
      {/* benefit-start */}
      <section className="mb-6">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.value}
                  </dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    {stat.name}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      {/* benefit-end */}
    </>
  );
};

export default CombinedComponent;
