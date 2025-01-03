import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../assets/contact.jpg'; // Replace with your PNG image path
import { Helmet } from 'react-helmet';

const ContactMe = () => {
    return (
        <section className="bg-white dark:bg-gray-900 relative container mx-auto px-4 sm:px-8 lg:px-16 py-16">
            {/* Contact Image */}
            <motion.div
                className="flex justify-center mb-12 lg:mb-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={contactImage}
                    alt="Contact"
                    className="w-40 sm:w-52 lg:w-64 rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Section - Text */}
                <motion.div
                    className="space-y-6 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg font-semibold text-green-500 flex items-center justify-center lg:justify-start space-x-2">
                        <span>Say Hello</span> <span>👋</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                        Have a project in mind? Drop a message and let’s bring your ideas to life! I’m here to collaborate and build something amazing.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <i className="fa fa-envelope text-green-500 text-xl"></i>
                            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                                santanubanik2k@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <i className="fa fa-map-marker text-green-500 text-xl"></i>
                            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                                296/2, South Shahdebpur, Feni, Bangladesh
                            </p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <i className="fa fa-phone text-green-500 text-xl"></i>
                            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">0181753313</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section - Form */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <form className="space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                    Your Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                    Your Email
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                    Message
                                </span>
                            </label>
                            <textarea
                                placeholder="Type your message here"
                                className="textarea textarea-bordered w-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                            ></textarea>
                        </div>
                        <button className="btn  w-full bg-green-500 hover:bg-green-600 text-white text-lg  rounded-lg">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
            <Helmet> <title>Contact | Santanu's Portfolio</title></Helmet>
        </section>
    );
};

export default ContactMe;
