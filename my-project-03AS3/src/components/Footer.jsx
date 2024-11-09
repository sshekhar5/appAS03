import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-red-500 p-6 text-white text-center space-y-4">
      <h2 className="text-lg font-bold">AMRIT JANU</h2>
      <p>©2023 All rights Reserved.</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://via.placeholder.com/20" alt="YouTube" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://via.placeholder.com/20" alt="Facebook" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://via.placeholder.com/20" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
