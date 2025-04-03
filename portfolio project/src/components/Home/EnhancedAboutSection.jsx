import React, { useState, useEffect } from "react";
import { Calendar, Briefcase, Book, Code } from "lucide-react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("education");
  const [isVisible, setIsVisible] = useState(true);

  // Animation effect when switching tabs
  const switchTab = (tab) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    }, 300);
  };

  const educationData = [
    {
      id: "education1",
      institution: "Kendriya Vidyalaya Kendrapara",
      degree: "10th Standard",
      period: "2017-2018",
      score: "62.3%",
      icon: <Book size={24} className="text-indigo-400" />,
    },
    {
      id: "education2",
      institution: "Tetrahedron Higher Secondary School",
      degree: "12th Standard",
      period: "2018-2020",
      score: "63%",
      icon: <Book size={24} className="text-blue-400" />,
    },
    {
      id: "education3",
      institution: "Centurion University of Technology and Management",
      degree: "B.Tech",
      period: "2020-2024",
      score: "8.5 CGPA",
      icon: <Calendar size={24} className="text-purple-400" />,
    },
  ];

  const experienceData = [
    {
      id: "experience1",
      company: "SearchingYard Software",
      position: "Software Developer Trainee",
      period: "January 2024 - June 2024",
      icon: <Briefcase size={24} className="text-green-400" />,
    },
    {
      id: "experience2",
      company: "SearchingYard Software",
      position: "Software Developer",
      period: "June 2024 - Present",
      details: "Majorly working in Backend (Node.js)",
      icon: <Code size={24} className="text-yellow-400" />,
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Professional Timeline
      </h1>

      {/* Tab Navigation */}
      <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => switchTab("education")}
          className={`flex items-center justify-center flex-1 py-3 px-4 rounded-md transition-all duration-300 ${
            activeTab === "education"
              ? "bg-gray-700 text-indigo-400 shadow-md"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          <Book className="mr-2" size={20} />
          <span className="font-medium">Education</span>
        </button>
        <button
          onClick={() => switchTab("experience")}
          className={`flex items-center justify-center flex-1 py-3 px-4 rounded-md transition-all duration-300 ${
            activeTab === "experience"
              ? "bg-gray-700 text-green-400 shadow-md"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          <Briefcase className="mr-2" size={20} />
          <span className="font-medium">Experience</span>
        </button>
      </div>

      {/* Content Section with Animation */}
      <div
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Education Section */}
        {activeTab === "education" && (
          <div className="space-y-6">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="flex bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 bg-gray-800 flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700">
                    {item.icon}
                  </div>
                </div>
                <div className="p-4 flex-1 border-l-4 border-indigo-500">
                  <h3 className="text-xl font-medium">{item.institution}</h3>
                  <p className="text-gray-400">
                    {item.degree} | {item.period}
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 h-full rounded-full"
                        style={{
                          width: item.score.includes("%") ? item.score : "85%",
                        }}
                      ></div>
                    </div>
                    <span className="ml-2 text-gray-300 font-medium">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="flex bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 bg-gray-800 flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700">
                    {item.icon}
                  </div>
                </div>
                <div className="p-4 flex-1 border-l-4 border-green-500">
                  <h3 className="text-xl font-medium">{item.position}</h3>
                  <p className="text-gray-300 font-medium">{item.company}</p>
                  <p className="text-gray-400">{item.period}</p>
                  {item.details && (
                    <p className="mt-2 text-gray-300 bg-gray-700 px-3 py-1 rounded inline-block">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
