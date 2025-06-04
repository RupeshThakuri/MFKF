"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import ContactComp from '@/components/Contact/ContactComp';

// Components
import Breadcrumbs from '@/breadcrumbs/breadcrumbs';

// CSS
import style from "./contact.module.css";

// For toastify success after msg is sent
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2or7zgk', 'template_yy7znzm', form.current, 'rCL0EUhIEHi_1DlgH')
            .then((result) => {
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
            }, (error) => {
                toast.error("Submission Failed!" + error, {
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
            });

        e.target.reset();
    }

    return (
        <>
            <ToastContainer />
            <Breadcrumbs title="Contact" />

            {/* Contact with map section */}
            <section className="bg-gray-200">
                <div className="container px-6 py-12 mx-auto flex flex-col justify-center items-center">
                    <motion.div
                        className="grid grid-cols-1 mt-10 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }} // Animates only once
                    >
                        <ContactComp/>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto mt-12 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }} // Animates only once
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.9353699797939!2d85.36019741361537!3d27.72526716644506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bdc110b73f5%3A0xff54e650e7004d91!2sP9G6%2B4C4%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1730727805941!5m2!1sen!2snp" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                </div>
            </section>

            {/* More info about Us */}
            <motion.section
                className="w-full divide-y divide-slate-200 rounded border border-slate-200 bg-white px-20 py-12 sm:px-8 md:px-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }} // Animates only once
            >
                <div className='mb-6'>
                    <h1 className="mt-2 text-2xl font-semibold text-red-400 md:text-3xl text-center">More info about Us</h1>
                </div>
                <details className="group p-4" open>
                    <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6  shrink-0  stroke-emerald-500  "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac25 desc-ac25"
                        >
                            <title id="title-ac25">Leading icon</title>
                            <desc id="desc-ac25">Icon that describes the summary</desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                        </svg>
                        Do you have any social accounts?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac26 desc-ac26"
                        >
                            <title id="title-ac26">Open icon</title>
                            <desc id="desc-ac26">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Yes you can find different events we have done with some infomration of our important board members throught the blog section.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6  shrink-0  stroke-emerald-500  "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac31 desc-ac31"
                        >
                            <title id="title-ac31">Leading icon</title>
                            <desc id="desc-ac31">Icon that describes the summary</desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                        Is there any other way of communication?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac32 desc-ac32"
                        >
                            <title id="title-ac32">Open icon</title>
                            <desc id="desc-ac32">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Of course! If you want to donate and help the organization you can go to the facebook page of our founder. But try not to spam messages and bother the personal life of her.
                    </p>
                </details>
            </motion.section>
        </>
    )
}

export default Contact;