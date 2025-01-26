"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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
                        className='flex flex-col items-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className={`${style.inTouch} font-medium text-red-500`}>Get in touch</p>
                        <h1 className="mt-2 text-2xl font-semibold text-red-400 md:text-3xl">Contact Us</h1>
                        <p className="mt-3 text-gray-500">Our friendly team would love to hear from you.</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 mt-10 lg:grid-cols-3 lg:ml-72 xl:ml-90"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                            {/* Email Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <span className="inline-block p-3 text-red-500 rounded-full bg-red-100/80">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
                                <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                                <p className="mt-2 text-sm text-red-500">hello@merakiui.com</p>
                            </motion.div>

                            {/* Office Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <span className="inline-block p-3 text-red-500 rounded-full bg-red-100/80">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800">Office</h2>
                                <p className="mt-2 text-sm text-gray-500">Come say hello at our office HQ.</p>
                                <p className="mt-2 text-sm text-red-500">100 Smith Street Collingwood VIC 3066 AU</p>
                            </motion.div>

                            {/* Phone Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <span className="inline-block p-3 text-red-500 rounded-full bg-red-100/80">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                                <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                <p className="mt-2 text-sm text-red-500">+1 (555) 000-0000</p>
                            </motion.div>
                        </div>

                        {/* Form Section */}
                        <motion.div 
                            className="p-4 py-6 rounded-lg bg-white md:p-8 mt-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm text-black">Full Name</label>
                                        <input type="text" placeholder="John Doe" name='name' className="block w-full px-5 py-2.5 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm text-gray-600">Phone Num</label>
                                        <input type="tel" placeholder="+977 98123123123" name='number' className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" name='email' className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-gray-600">Subject</label>
                                    <input type="text" placeholder="About donating and collaborating" name='subject' className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-gray-600">Message</label>
                                    <textarea name='message' className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                                    Send message
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div 
                        className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto mt-12 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
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
                        Yes! You can find us in facebook by going through our official page by clicking<a href='https://www.facebook.com/profile.php?id=61568107740024' className='!text-blue-400'> here </a>.
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
                            aria-labelledby="title-ac27 desc-ac27"
                        >
                            <title id="title-ac27">Leading icon</title>
                            <desc id="desc-ac27">Icon that describes the summary</desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                            />
                        </svg>
                        How can I communicate with your support team?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac28 desc-ac28"
                        >
                            <title id="title-ac28">Open icon</title>
                            <desc id="desc-ac28">
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
                        You can communicate with our team for support through our the official facebook page or sending message throug the contact form section provided in the home page and the form above this FAQ.
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
                            aria-labelledby="title-ac29 desc-ac29"
                        >
                            <title id="title-ac29">Leading icon</title>
                            <desc id="desc-ac29">Icon that describes the summary</desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                            />
                        </svg>
                        Do you have some pictures of the events and achieevments of the organization?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac30 desc-ac30"
                        >
                            <title id="title-ac30">Open icon</title>
                            <desc id="desc-ac30">
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