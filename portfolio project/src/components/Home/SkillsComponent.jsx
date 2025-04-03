import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const SkillsComponent = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoverSkill, setHoverSkill] = useState(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Skill data with icons and detailed information
  const skillsData = {
    frontend: [
      {
        name: "HTML",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#E34F26",
        level: 95,
        detail: "Semantic markup, accessibility, SEO optimization",
      },
      {
        name: "CSS",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#1572B6",
        level: 92,
        detail: "Flexbox, Grid, Animations, SCSS/SASS",
      },
      {
        name: "JavaScript",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#F7DF1E",
        level: 90,
        detail: "ES6+, Promises, Async/Await, DOM manipulation",
      },
      {
        name: "React",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#61DAFB",
        level: 94,
        detail: "Hooks, Context API, Custom Hooks, React Router",
      },
      {
        name: "Tailwind",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#38B2AC",
        level: 90,
        detail: "Responsive design, Dark mode, Custom configurations",
      },
      {
        name: "Redux",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#764ABC",
        level: 85,
        detail: "Redux Toolkit, Redux Thunk, State management",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#68A063",
        level: 88,
        detail: "Express, RESTful APIs, Middleware, Authentication",
      },
      {
        name: "MongoDB",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#4DB33D",
        level: 83,
        detail: "Mongoose, Aggregation, Indexing, Atlas",
      },
      {
        name: "PostgreSQL",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#336791",
        level: 78,
        detail: "Joins, Transactions, Stored Procedures, Indexes",
      },
      {
        name: "SQL",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#E59537",
        level: 80,
        detail: "Complex Queries, Database Design, Normalization",
      },
      {
        name: "Express",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#000000",
        level: 85,
        detail: "Routing, Middleware, Error Handling, MVC Pattern",
      },
      {
        name: "APIs",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#FF6C37",
        level: 90,
        detail: "RESTful, GraphQL, Swagger, Authentication",
      },
    ],
    devops: [
      {
        name: "AWS",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#FF9900",
        level: 75,
        detail: "EC2, S3, Lambda, CloudFront, RDS",
      },
      {
        name: "Git",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#F05032",
        level: 90,
        detail: "Branching, Merging, Rebasing, PR workflows",
      },
      {
        name: "CI/CD",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#2088FF",
        level: 80,
        detail: "GitHub Actions, Jenkins, Automated Testing",
      },
      {
        name: "Docker",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#2496ED",
        level: 78,
        detail: "Containerization, Docker Compose, Multi-stage builds",
      },
      {
        name: "Webpack",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#8DD6F9",
        level: 75,
        detail: "Module bundling, Code splitting, Loaders, Plugins",
      },
      {
        name: "Vercel",
        icon: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06z",
        color: "#000000",
        level: 88,
        detail: "Serverless deployment, Edge functions, Analytics",
      },
    ],
  };

  // Category styling information
  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      color: "from-blue-400 to-cyan-500",
      icon: "frontend",
      description: "Creating amazing user interfaces and experiences",
    },
    {
      id: "backend",
      name: "Backend",
      color: "from-purple-400 to-pink-500",
      icon: "backend",
      description: "Building robust server-side applications and APIs",
    },
    {
      id: "devops",
      name: "DevOps & Tools",
      color: "from-green-400 to-emerald-500",
      icon: "devops",
      description: "Deploying and managing applications in the cloud",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Header with cyberpunk style */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mb-2">
              TECH SKILLS
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Interactive showcase of my technical expertise
          </motion.p>
        </motion.div>

        {/* Category selection - Neon tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-24"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden group ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-gray-900 text-gray-400 hover:text-white"
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
              {activeCategory === category.id && (
                <>
                  <motion.span
                    className="absolute inset-0 opacity-20 blur-xl bg-gradient-to-r"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`absolute -bottom-1 h-1 left-0 right-0 bg-gradient-to-r ${category.color}`}
                    layoutId="activeIndicator"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D rotating skill cards */}
        <div className="relative perspective-1000" ref={containerRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, rotateX: 10 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -10 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Category information */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3
                  className={`text-2xl mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                    categories.find((c) => c.id === activeCategory)?.color
                  }`}
                >
                  {categories.find((c) => c.id === activeCategory)?.name} Skills
                </h3>
                <p className="text-gray-400 mt-2">
                  {categories.find((c) => c.id === activeCategory)?.description}
                </p>
              </motion.div>

              {/* Skill orbs */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {skillsData[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center relative"
                    onMouseEnter={() => setHoverSkill(skill.name)}
                    onMouseLeave={() => setHoverSkill(null)}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Main orb */}
                      <div
                        className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center relative overflow-hidden
                        shadow-lg transition-all duration-300 group-hover:shadow-2xl
                        ${hoverSkill === skill.name ? "ring-2 ring-white" : ""}
                        bg-gradient-to-br from-gray-900 to-gray-800`}
                      >
                        {/* Fill animation based on skill level */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t"
                          style={{
                            backgroundColor: skill.color,
                            opacity: 0.8,
                          }}
                          initial={{ height: 0 }}
                          animate={{ height: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />

                        {/* Skill name */}
                        <span className="relative z-10 font-bold text-white text-sm md:text-base">
                          {skill.name}
                        </span>

                        {/* Background glow effect */}
                        <motion.div
                          className="absolute inset-0 opacity-30 blur-md"
                          style={{ backgroundColor: skill.color }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </div>

                      {/* Level indicator */}
                      <motion.div
                        className="absolute -top-2 -right-2 bg-black rounded-full border border-gray-700 w-8 h-8 flex items-center justify-center text-xs font-bold"
                        animate={{
                          scale: [1, 1.1, 1],
                          backgroundColor: [
                            "rgba(0,0,0,0.8)",
                            skill.color + "33",
                            "rgba(0,0,0,0.8)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        {skill.level}
                      </motion.div>
                    </motion.div>

                    {/* Skill detail popup */}
                    <AnimatePresence>
                      {hoverSkill === skill.name && (
                        <motion.div
                          className="absolute top-full mt-2 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-3 rounded-lg border border-gray-700 z-20 w-48 shadow-xl"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-xs text-gray-300">
                            {skill.detail}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.1, 0.5, 0.1],
                      x: [0, Math.random() * 100 - 50, 0],
                      y: [0, Math.random() * 100 - 50, 0],
                    }}
                    transition={{
                      duration: 20 + Math.random() * 10,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom navigation */}
      </div>
    </div>
  );
};

export default SkillsComponent;
