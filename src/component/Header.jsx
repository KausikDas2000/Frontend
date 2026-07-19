import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-all ${
      isActive
        ? "text-black after:w-full"
        : "text-gray-700 hover:text-black after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-black tracking-tight cursor-pointer"
        >
          Port<span className="text-gray-500">Folio</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

        

          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hire Me Button */}
      

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-2xl"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
          menu ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-medium">
          <li>
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenu(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenu(false)}
            >
              About
            </NavLink>
          </li>

         

          <li>
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setMenu(false)}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenu(false)}
            >
              Contact
            </NavLink>
          </li>

          <Link
            to="/contact"
            onClick={() => setMenu(false)}
            className="bg-black text-white px-7 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Hire Me
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;