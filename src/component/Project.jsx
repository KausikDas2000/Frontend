import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-500">
            My Recent Work
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Featured <span className="text-gray-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-black mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-8 leading-8">
            These are some of my featured projects built using PHP, MySQL,
            Bootstrap, JavaScript, HTML, and CSS. They demonstrate my ability
            to develop complete web applications with responsive interfaces and
            efficient backend functionality.
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Student Management System */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-500">

            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <FaCode className="text-7xl text-gray-400" />
            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                Student Management System
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                A complete Student Management System developed using PHP and
                MySQL. The application provides secure CRUD operations for
                managing student records, including adding, updating, deleting,
                and searching students. It also features responsive pages,
                form validation, and database connectivity for efficient
                student data management.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  PHP
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  MySQL
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Bootstrap
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  HTML5
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  CSS3
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  JavaScript
                </span>

              </div>

              <div className="flex gap-5 mt-8">

                <a
                  href="#"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  Source Code
                </a>

                <a
                  href="#"
                  className="border-2 border-black px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Project Details
                </a>

              </div>

            </div>

          </div>

          {/* E-Commerce Website */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-500">

            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <FaCode className="text-7xl text-gray-400" />
            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                E-Commerce Website
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                A fully functional E-Commerce Website built using PHP and
                MySQL. The application includes user authentication, product
                catalog management, shopping cart, checkout process, order
                management, and an admin dashboard for managing products,
                customers, and orders. The website is fully responsive and
                provides a smooth shopping experience.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  PHP
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  MySQL
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Bootstrap
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  HTML5
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  CSS3
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  JavaScript
                </span>

              </div>

              <div className="flex gap-5 mt-8">

                <a
                  href="#"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  Source Code
                </a>

                <a
                  href="#"
                  className="border-2 border-black px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Project Details
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;