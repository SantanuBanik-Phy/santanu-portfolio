import React from 'react';
import { motion } from 'framer-motion';
import MernStack from '../assets/mernstack.png';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import ReduxLogo from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import NodeLogo from '../assets/NodeLogo.png';
import Mongodb from '../assets/mongodb.svg';
import Express from '../assets/Express.png';
import NextJs from '../assets/NextJs.png';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const skills = [
        { img: Html, label: 'HTML' },
        { img: Css, label: 'CSS' },
        { img: Javascript, label: 'JavaScript' },
        { img: ReactLogo, label: 'React' },
        { img: ReduxLogo, label: 'Redux' },
        { img: Tailwind, label: 'Tailwind CSS' },
        { img: Bootstrap, label: 'Bootstrap' },
        { img: NodeLogo, label: 'Node.js' },
        { img: Mongodb, label: 'MongoDB' },
        { img: Express, label: 'Express.js' },
        { img: NextJs, label: 'Next.js' },
    ];

    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-lg text-green-600 dark:text-green-400 font-bold uppercase tracking-wider">
                        About Me
                    </h2>
                    <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
                        Hi, I'm Santanu Banik
                    </p>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A Full-Stack Developer specializing in web development, WordPress, SEO, and the MERN stack.
                    </p>
                </motion.div>

                {/* Journey and Skills Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Journey Section */}
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                            My Journey
                        </h3>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            I began my development journey with a passion for crafting user-centric applications. Proficient in the MERN stack, I’ve built projects like a movie portal, service reviews, and more.
                        </p>
                        <div className="mt-8 relative flex justify-center lg:justify-start">
                            <motion.img
                                src={MernStack}
                                alt="MERN Stack"
                                className="rounded-lg w-64 shadow-xl"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            />
                            <div className="absolute -top-8 -right-8 h-24 w-24 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        className="p-8 bg-white dark:bg-gray-800 rounded-lg dark:shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:dark:shadow-white shadow-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 text-center mb-6">
                            Skills & Expertise
                        </h3>
                        <motion.div
                            className="grid grid-cols-3 gap-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.2 }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 150 }}
                                >
                                    <img src={skill.img} alt={skill.label} className="w-12 h-12" />
                                    <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {skill.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* More About Me Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        More About Me
                    </h3>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Beyond coding, I enjoy exploring new technologies and trends in web development. I also run a YouTube channel where I teach JavaScript, MERN Stack development, WordPress, and Digital Marketing to help others grow in the tech field.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
