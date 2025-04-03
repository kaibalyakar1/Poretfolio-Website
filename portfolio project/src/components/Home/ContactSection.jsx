import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const phoneNumber = "7978797141";
  const email = "kaibalyakar7978@gmail.com";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const contactMethods = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      value: `+91 ${phoneNumber}`,
      action: `tel:+91${phoneNumber}`,
    },
    {
      icon: <FiMail className="w-6 h-6 text-red-500" />,
      title: "Email",
      value: email,
      action: gmailUrl, // Redirect to Gmail instead of default mail client
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      title: "WhatsApp",
      value: `+91 ${phoneNumber}`,
      action: whatsappUrl,
    },
  ];

  return (
    <div id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
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
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Reach out directly through these channels
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 dark:bg-gray-600 mb-4"
              >
                {method.icon}
              </motion.div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
              >
                {method.title === "WhatsApp"
                  ? "Message on WhatsApp"
                  : `Contact via ${method.title}`}
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-gray-600 dark:text-gray-400"
        >
          <p>Typically respond within 24 hours</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
