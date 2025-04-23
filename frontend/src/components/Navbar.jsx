import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">Urbanhire</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cars">Cars</NavLink>
              <NavLink to="/add-car">Add Car</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink to="/cars" onClick={toggleMenu}>Cars</MobileNavLink>
          <MobileNavLink to="/add-car" onClick={toggleMenu}>Add Car</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Reusable component for desktop nav links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:bg-blue-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
  >
    {children}
  </Link>
);

// Reusable component for mobile nav links
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:bg-blue-700 hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);