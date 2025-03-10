"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2or7zgk', 'template_yy7znzm', form.current, {
                publicKey: 'rCL0EUhIEHi_1DlgH',
            })
            .then(
                () => {
                    toast("Submitted Successfully!", {
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
                    toast.error("Submission Failed!", {
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
            );

        e.target.reset();
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger animations for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <>
            <ToastContainer />
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {/* Heading */}
                    <motion.div
                        className="max-w-2xl mx-auto text-center"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                            {"If you have any questions or concerns, please don't hesitate to contact us."}
                        </p>
                    </motion.div>

                    {/* Contact Cards */}
                    <motion.div
                        className="max-w-5xl mx-auto mt-12 sm:mt-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            {/* Phone Card */}
                            <motion.div
                                className="overflow-hidden bg-white rounded-xl"
                                variants={itemVariants}
                            >
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">+1-316-555-0116</p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">+1-446-526-0117</p>
                                </div>
                            </motion.div>

                            {/* Email Card */}
                            <motion.div
                                className="overflow-hidden bg-white rounded-xl"
                                variants={itemVariants}
                            >
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">contact@example.com</p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">hr@example.com</p>
                                </div>
                            </motion.div>

                            {/* Address Card */}
                            <motion.div
                                className="overflow-hidden bg-white rounded-xl"
                                variants={itemVariants}
                            >
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">8502 Preston Rd. Ingle, Maine 98380, USA</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            className="mt-6 overflow-hidden bg-white rounded-xl"
                            variants={itemVariants}
                        >
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                                <form action="#" method="POST" className="mt-14" ref={form} onSubmit={sendEmail}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        {/* Name Input */}
                                        <div>
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">Your name</label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="name" id="name" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600" />
                                            </div>
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">Email address</label>
                                            <div className="mt-2.5 relative">
                                                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600" />
                                            </div>
                                        </div>

                                        {/* Phone Input */}
                                        <div>
                                            <label htmlFor="number" className="text-base font-medium text-gray-900">Phone number</label>
                                            <div className="mt-2.5 relative">
                                                <input type="tel" name="number" id="number" placeholder="Enter your phone number" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600" />
                                            </div>
                                        </div>

                                        {/* Subject Input */}
                                        <div>
                                            <label htmlFor="subject" className="text-base font-medium text-gray-900">Subject</label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="subject" id="subject" placeholder="Enter subject" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600" />
                                            </div>
                                        </div>

                                        {/* Message Input */}
                                        <div className="sm:col-span-2">
                                            <label htmlFor="message" className="text-base font-medium text-gray-900">Message</label>
                                            <div className="mt-2.5 relative">
                                                <textarea name="message" id="message" placeholder="Enter your message" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-red-600 caret-red-600" rows="4"></textarea>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="sm:col-span-2">
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-red-400 border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-red-700">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Contact;