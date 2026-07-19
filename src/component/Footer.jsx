import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-black text-black">
              Kausik Das
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Passionate Full Stack Developer creating modern,
              responsive and high-performance web applications using
              React, Node.js, Express and MongoDB.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-8 bg-black text-white p-4 rounded-full hover:scale-110 transition duration-300"
            >
              <FaArrowUp />
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link to="/" className="hover:text-black transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-black transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-black transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-600">
              📧 kd96668@gmail.com
            </p>

            <p className="text-gray-600 mt-2">
              📍 Kolkata, India
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/KausikDas2000"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kausik-das-444a36399"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/kausik_official__/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/kausik.das.8bp/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kausik Das. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;