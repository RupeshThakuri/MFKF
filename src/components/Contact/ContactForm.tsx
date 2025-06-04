import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, Bounce } from 'react-toastify';
import FormInput from './FormInput';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_2or7zgk', 'template_yy7znzm', form.current, {
        publicKey: 'rCL0EUhIEHi_1DlgH',
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          console.error(error);
        },
      );

    if (form.current) {
      form.current.reset();
    }
  };

  const formFields = [
    { id: "name", label: "Your name", type: "text", placeholder: "Enter your full name", required: true },
    { id: "email", label: "Email address", type: "email", placeholder: "Enter your email", required: true },
    { id: "number", label: "Phone number", type: "tel", placeholder: "Enter your phone number", required: true },
    { id: "subject", label: "Subject", type: "text", placeholder: "Enter subject", required: true },
  ];

  return (
    <motion.div
      className="mt-10 overflow-hidden bg-white rounded-xl shadow-sm sm:mt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative">
        <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500" />
        <div className="px-6 py-12 sm:p-12">
          <h3 className="text-2xl font-semibold text-center text-gray-900 sm:text-3xl">
            Send us a message
          </h3>
          <p className="mt-3 text-center text-gray-600">
            {`We'll get back to you as soon as possible`}
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              {formFields.map((field) => (
                <FormInput
                  key={field.id}
                  id={field.id}
                  name={field.id}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us how we can help you"
                    className="block w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  className="w-full py-4 mt-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-teal-500 to-blue-500 border border-transparent rounded-lg shadow-sm hover:from-teal-600 hover:to-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;