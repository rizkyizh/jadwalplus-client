import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const people = [
  {
    name: "Munawar Amin",
    role: "Frontend & UI/UX",
    sosmed: {
      instagram: "https://www.instagram.com/munawar_amin2/",
      github: "https://github.com/munawaramin2002",
      linkedin: "https://www.linkedin.com/in/munawar-amin/",
    },
    imageUrl: "./image/amin3.png",
  },
  {
    name: "Restu",
    role: "Frontend & UI/UX",
    sosmed: {
      instagram: "https://www.instagram.com/restu_m.s/",
      github: "https://github.com/RestuMS",
      linkedin: "https://www.linkedin.com/in/restu-muhammad-saputro-402888299/",
    },
    imageUrl: "./image/restums.jpg",
  },
  {
    name: "Ade Lintang",
    role: "Frontend & Backend",
    sosmed: {
      instagram: "https://www.instagram.com/im.adelintang/",
      github: "https://github.com/adelintang",
      linkedin: "https://www.linkedin.com/in/ade-lintang-permono-2b4a0b29a/",
    },
    imageUrl: "./image/ade.jpg",
  },
  {
    name: "Kevin",
    role: "Frontend",
    sosmed: {
      instagram: "https://www.instagram.com/fkvin_/",
      github: "https://github.com/blueskye16",
      linkedin: "https://www.linkedin.com/in/fabianus-kevin-406285231/",
    },
    imageUrl: "./image/kevin.jpeg",
  },
  {
    name: "Hikmalul",
    role: "Backend & DevOps",
    sosmed: {
      instagram: "https://www.instagram.com/hikmal_a.s/",
      github: "https://github.com/MituBaby",
      linkedin: "https://www.linkedin.com/in/hikmalul-a-la-978a07299/",
    },
    imageUrl: "./image/alul.jpeg",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tim Kami
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "Jangan biarkan waktu mengatur kita, tetapi kitalah yang mengatur
            waktu yang ada"
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-24 w-24 rounded-full bg-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <div className="social-icons flex my-2">
                    <a
                      href={person.sosmed.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram-account"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={person.sosmed.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="github-account"
                      className="mx-2 block"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={person.sosmed.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="linkedin-account"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
