import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                    <div className="relative lg:mb-12">
                        <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                        <div className="pl-12 pr-6">
                            <Image className="relative" src="/Image/Amy.jpg" alt="" width={500} height={500}/>
                        </div>
                        <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
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
                        </div>
                    </div>

                    <div className="2xl:pl-16">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">What the organization desire</h2>
                        <p className="text-xl leading-relaxed text-gray-900 mt-9">The Many Faces of Karma Foundation (MFKF) is dedicated to empowering financially disadvantaged students through programs in education, self-development, and leadership. By providing financial support and essential resources, we help students unlock their potential and pursue meaningful career paths.</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-900">Our goal is to create a positive impact, shaping resilient, community-minded individuals for the future.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
