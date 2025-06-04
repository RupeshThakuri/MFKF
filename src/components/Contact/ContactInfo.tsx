"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    },
  };

  const infoCards = [
    {
      icon: <PhoneCall className="w-7 h-7" />,
      title: "Call us",
      items: ["+1-316-555-0116", "+1-446-526-0117"],
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email us",
      items: ["contact@example.com", "hr@example.com"],
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Visit us",
      items: ["8502 Preston Rd. Ingle, Maine 98380, USA"],
    },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-12 sm:mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                {card.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-center text-gray-900">
                {card.title}
              </h3>
              <div className="mt-3 space-y-1 text-center">
                {card.items.map((item, idx) => (
                  <p key={idx} className="text-gray-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div 
              className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-teal-500/30 pointer-events-none transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;