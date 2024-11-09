import React, { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="bg-red-500 p-6 text-white text-center space-y-4"
    >
      <h2 className="text-lg font-bold">AMRIT SHARAN</h2>
      <p>©2025 All rights Reserved.</p>
      <div className="flex justify-center space-x-4">
      <a
        href="https://www.youtube.com/@AMRITSHARAN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} style={{ fontSize: 30, margin: 10 }} />
      </a>

      <a
        href="https://facebook.com/amritsharan.as"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 30, margin: 10 }} />
      </a>

      <a
        href="https://www.instagram.com/amritsharann"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30, margin: 10 }} />
      </a>
      </div>
    </footer>
  );
});

export default Footer;
