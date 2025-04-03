// Data.js
import React from "react";

const Data = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white animate-fadeInUp">
        Abdulrahman Alhaj
      </h1>
      <h3 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 animate-fadeInUp animation-delay-200">
        Frontend Developer
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed animate-fadeInUp animation-delay-400">
        I craft exceptional digital experiences with modern web technologies.
        Passionate about building intuitive, performant, and accessible
        interfaces that users love.
      </p>
      <div className="animate-fadeInUp animation-delay-600">
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Say hello
          <svg
            className="w-5 h-5 ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Data;
