import React from "react";
import { FaLaptopCode, FaCode, FaGraduationCap, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-500">
            Get To Know Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            About <span className="text-gray-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-black mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>

            <h3 className="text-4xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              I'm <strong>Kausik Das</strong>, a passionate Full Stack Developer
              who enjoys creating modern, responsive, and user-friendly web
              applications. I specialize in developing scalable frontend
              interfaces with React and robust backend services using Node.js,
              Express, and MongoDB.
            </p>

            <p className="text-gray-600 leading-8 text-lg mt-6">
              I believe in writing clean, maintainable code and continuously
              improving my skills by learning new technologies and building
              real-world projects. My focus is always on performance,
              accessibility, and delivering the best user experience.
            </p>

            <p className="text-gray-600 leading-8 text-lg mt-6">
              Whether it's designing elegant interfaces, integrating REST APIs,
              or building complete MERN stack applications, I enjoy every step
              of the development process.
            </p>

          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
              <FaLaptopCode className="text-4xl mb-5" />
              <h3 className="text-2xl font-bold">
                Experience
              </h3>
              <p className="text-gray-600 mt-4">
                Building responsive web applications using React, Node.js,
                Express and MongoDB.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
              <FaCode className="text-4xl mb-5" />
              <h3 className="text-2xl font-bold">
                Skills
              </h3>

              <ul className="text-gray-600 mt-4 space-y-2">
                <li>• React.js</li>
                <li>• JavaScript (ES6+)</li>
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
              <FaGraduationCap className="text-4xl mb-5" />
              <h3 className="text-2xl font-bold">
                Education
              </h3>

              <p className="text-gray-600 mt-4">
                Continuously learning modern web technologies through
                self-learning, online courses, documentation, and practical
                projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
              <FaAward className="text-4xl mb-5" />
              <h3 className="text-2xl font-bold">
                Goal
              </h3>

              <p className="text-gray-600 mt-4">
                To become a professional Full Stack Developer by building
                scalable applications and contributing to impactful software
                projects.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

          <div className="text-center">
            <h2 className="text-5xl font-black">20+</h2>
            <p className="text-gray-500 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-black">10+</h2>
            <p className="text-gray-500 mt-2">
              Technologies
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-black">100%</h2>
            <p className="text-gray-500 mt-2">
              Dedication
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-black">∞</h2>
            <p className="text-gray-500 mt-2">
              Learning Mindset
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;