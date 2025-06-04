"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <motion.input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
};

export default FormInput;