import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import BackgroundImage from "../../assets/amritProfile2.jpeg"; // Adjust the path as needed

function InitialInfo() {
  return (
    <>
      <div
        className="relative flex items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-15"></div>

        <div className="relative flex justify-between w-full px-8 text-white z-10">
          {/* Left Section: Profile Info and Social Icons */}
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Amrit Sharan</h1>
            <p className="mt-4 text-lg">
              I love fashion. I love the thrill of wearing a new piece and
              giving it a story. This passion has taken me to many different
              places and has given me opportunities to work with many talented
              people in the industry. Enter my world.
            </p>

            {/* <div className="flex space-x-4 mt-6">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl hover:text-gray-400"
                />
              </a>
            </div> */}
          </div>

          {/* Right Section: Navigation Links */}
          <div className="flex flex-col items-end space-y-6">
            <a
              href="/collab"
              className="text-yellow-400 text-lg hover:text-white relative group"
            >
              Collabs
              <span className="absolute right-0 w-40 h-[2px] bg-yellow-400 -bottom-1 group-hover:bg-yellow-200 transition-all duration-300"></span>
            </a>
            <a
              href="/portfolio"
              className="text-yellow-400 text-lg hover:text-white relative group"
            >
              Portfolio
              <span className="absolute right-0 w-40 h-[2px] bg-yellow-400 -bottom-1 group-hover:bg-yellow-200 transition-all duration-300"></span>
            </a>
            <a
              href="/blog"
              className="text-yellow-400 text-lg hover:text-white relative group"
            >
              Blog
              <span className="absolute right-0 w-40 h-[2px] bg-yellow-400 -bottom-1 group-hover:bg-yellow-200 transition-all duration-300"></span>
            </a>
            <a
              href="/review"
              className="text-yellow-400 text-lg hover:text-white relative group"
            >
              Reviews
              <span className="absolute right-0 w-40 h-[2px] bg-yellow-400 -bottom-1 group-hover:bg-yellow-200 transition-all duration-300"></span>
            </a>
            <a
              href="/merch"
              className="text-yellow-400 text-lg hover:text-white relative group"
            >
              Merch
              <span className="absolute right-0 w-40 h-[2px] bg-yellow-400 -bottom-1 group-hover:bg-yellow-200 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default InitialInfo;
