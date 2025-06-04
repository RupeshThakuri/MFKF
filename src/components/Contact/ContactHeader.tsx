"use client"

import React from 'react';
import { motion } from "framer-motion";

const ContactHeader: React.FC = () => {
  return (
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-red-400">
        Contact us
      </h2>
      <p className="max-w-xl mx-auto mt-5 text-base leading-relaxed text-gray-600">
        {`We'd love to hear from you. Please fill out the form below or reach out using one of our contact methods.`}
      </p>
    </motion.div>
  );
};

export default ContactHeader;