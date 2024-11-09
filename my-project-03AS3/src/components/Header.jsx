import React from "react";
import amritProfile from '../assets/amritProfile.jpeg';

function Header({ onContactClick }) {
  return (
    <>
      <header className="bg-red-500 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={amritProfile}
            alt="Logo"
            className="w-12 h-12"
          />
        
        </div>
        <nav className="hidden md:flex space-x-4 text-white">
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
          <a href="#course" className="hover:text-gray-200">
            Course
          </a>
          <a href="#testimonials" className="hover:text-gray-200">
            Testimonials
          </a>
          <button onClick={onContactClick}>Contact</button>
        </nav>
        <div className="space-x-2">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full">
            Log In
          </button>
          <button className="border border-white text-white px-4 py-2 rounded-full">
            Click Me
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
