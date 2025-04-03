import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchDevToBlogs = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=nerdincode"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDevToBlogs();
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-64"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-10"
      >
        <p className="text-red-500">Error: {error}</p>
      </motion.div>
    );
  }

  return (
    <div
      id="blogs"
      className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Blogs</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Thoughts, tutorials and insights about web development
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1,
                }}
                onHoverStart={() => setHoveredCard(blog.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg relative z-0"
              >
                {/* Hover overlay effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === blog.id ? 0.8 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 mix-blend-multiply z-10"
                />

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20"
                >
                  {blog.cover_image && (
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  )}

                  <div className="p-6 relative z-30">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {blog.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      className="text-gray-600 dark:text-gray-300 text-sm mb-4"
                    >
                      {new Date(blog.published_at).toLocaleDateString()} •{" "}
                      {blog.reading_time_minutes} min read
                    </motion.div>

                    <motion.p
                      className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3"
                      whileHover={{ color: "#ffffff" }}
                    >
                      {blog.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {blog.tag_list.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#3b82f6",
                            color: "#ffffff",
                          }}
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.a
              href={`https://dev.to/nerdincode`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Articles on Dev.to
              <motion.svg
                className="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
