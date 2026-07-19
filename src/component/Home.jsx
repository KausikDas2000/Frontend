import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../image/logo.JPG";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "React Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI Designer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-black flex items-center justify-center px-5 sm:px-8 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-gray-500 text-sm sm:text-lg tracking-[4px] uppercase">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-3">
            Kausik <span className="text-gray-500">Das</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl mt-5 font-light">
            I'm a{" "}
            <span
              ref={typedRef}
              className="font-semibold border-b-2 border-black"
            ></span>
          </h2>

          <p className="text-gray-600 mt-6 sm:mt-8 max-w-xl mx-auto md:mx-0 leading-7 sm:leading-8 text-sm sm:text-base">
            Passionate Full Stack Developer specializing in React, Node.js,
            Express, MongoDB and modern web technologies. I build responsive,
            scalable and user-friendly web applications with clean UI and
            efficient backend architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center md:justify-start">
            <Link
              to="/contact"
              className="group bg-black text-white px-7 py-3.5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 duration-300 shadow-lg hover:scale-105"
            >
              Hire Me
              <FaArrowRight className="group-hover:translate-x-2 duration-300" />
            </Link>

            <a
              href="/KausikDas.pdf"
              download
              className="border-2 border-black px-7 py-3.5 rounded-full hover:bg-black hover:text-white duration-300 hover:scale-105 text-center"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10 justify-center md:justify-start">
            <a
              href="https://github.com/KausikDas2000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/kausik-das-444a36399"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/kausik_official__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-gray-100 -z-10"></div>

            {/* Animated Ring */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-black opacity-20 animate-pulse"></div>

            {/* Border Ring */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-black"></div>

            {/* Profile Image */}
            <img
              src={logo}
              alt="Kausik Das"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-[430px] md:h-[430px] rounded-full object-cover border-[6px] sm:border-[8px] border-white shadow-[0_25px_70px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;