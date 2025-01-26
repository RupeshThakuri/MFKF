"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                    {/* Left Column - Image and Quote */}
                    <div className="relative lg:mb-12">
                        {/* Dots Pattern */}
                        <motion.img
                            className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                            alt=""
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        />

                        {/* Main Image */}
                        <motion.div
                            className="pl-12 pr-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                className="relative"
                                src="/Image/Amy.jpeg"
                                alt=""
                                width={500}
                                height={500}
                            />
                        </motion.div>

                        {/* Quote Block */}
                        <motion.div
                            className="absolute left-0 pr-12 bottom-8 xl:bottom-20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-xs bg-red-400 rounded-lg sm:max-w-md xl:max-w-md">
                                <div className="px-3 py-4 sm:px-5 sm:py-8">
                                    <div className="flex items-start">
                                        <p className="text-3xl sm:text-4xl">👋</p>
                                        <blockquote className="ml-5">
                                            <p className="text-sm font-medium text-white sm:text-lg">“I desire to provide a good service to those who need it and sharpen their skills by working on different factors that helps them in self development.”</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        className="2xl:pl-16"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                            What the organization desire
                        </h2>
                        <motion.p
                            className="text-xl leading-relaxed text-gray-900 mt-9"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            The Many Faces of Karma Foundation (MFKF) is dedicated to empowering financially disadvantaged students through programs in education, self-development, and leadership. By providing financial support and essential resources, we help students unlock their potential and pursue meaningful career paths.
                        </motion.p>
                        <motion.p
                            className="mt-6 text-xl leading-relaxed text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Our goal is to create a positive impact, shaping resilient, community-minded individuals for the future.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;