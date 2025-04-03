import React, { useEffect, useState } from "react";
import work1 from "../../assets/w1.jpeg";
import work2 from "../../assets/w2.jpeg";
import work3 from "../../assets/w3.jpeg";
import work4 from "../../assets/w4.jpeg";
import work5 from "../../assets/w5.jpeg";

import work6 from "../../assets/w6.jpeg";

import work7 from "../../assets/w7.jpeg";

import work8 from "../../assets/w8.jpeg";
import Timeline from "./EnhancedAboutSection";

const AboutSection = () => {
  // Sample images - replace with your actual image URLs
  const images = [work1, work2, work3, work4, work5, work6, work7, work8];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 justify-between items-center">
          {/* Left Side - Image Slideshow */}
          {/* Left Side - Image Slideshow */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Timeline />
          </div>

          {/* Right Side - Professional Details */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Software Developer & Passionate Traveler
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-lg">
                I'm a software developer with over 1.5 years of experience,
                currently specialized in backend development. My technical
                expertise is complemented by my passion for exploration and
                adventure.
              </p>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Experience Highlights
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Backend development with modern technologies</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Database optimization and API development</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Collaborative development in agile environments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Beyond Coding
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  When I'm not coding, you'll find me on the road. I'm an avid
                  rider and traveler, exploring new places and experiencing
                  different cultures. These journeys inspire my creative
                  approach to problem-solving in my development work.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-blue-600/20">
                  Download Resume
                </button>
                <button className="bg-transparent border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  My Skills
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float-delay {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 7s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 9s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
