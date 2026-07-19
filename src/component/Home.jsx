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
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-black flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <p className="text-gray-500 text-lg tracking-widest uppercase">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-[calc(var(--spacing)*30)] leading-tight">
            Kausik <span className="text-gray-500">Das</span>
          </h1>

          <h2 className="text-3xl mt-6 font-light">
            I'm a{" "}
            <span
              ref={typedRef}
              className="text-black border-b-2 border-black font-semibold"
            ></span>
          </h2>

          <p className="text-gray-600 mt-8 max-w-lg leading-8">
            Passionate Full Stack Developer specializing in React, Node.js,
            Express, MongoDB and modern web technologies. I build responsive,
            scalable and user-friendly web applications with clean UI and
            efficient backend architecture.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <Link
              to="/contact"
              className="group bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 duration-300 shadow-lg hover:scale-105"
            >
              Hire Me
              <FaArrowRight className="group-hover:translate-x-2 duration-300" />
            </Link>

            <a
              href="/KausikDas.pdf"
              download
              className="border-2 border-black px-8 py-4 rounded-full hover:bg-black hover:text-white duration-300 hover:scale-105 inline-block"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-12">
            <a
              href="https://github.com/KausikDas2000"
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/kausik-das-444a36399"
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/kausik_official__/"
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute -inset-10 rounded-full bg-gray-100 -z-10"></div>

            {/* Animated Ring */}
            <div className="absolute -inset-6 rounded-full border border-black opacity-20 animate-pulse"></div>

            {/* Border Ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-black"></div>

            {/* Profile Image */}
            <img
              src={logo}
              alt="Kausik"
              className="w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-[8px] border-white shadow-[0_25px_70px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;