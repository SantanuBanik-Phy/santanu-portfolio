import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from 'react-icons/fa'; // Example icons
import github from "../assets/github-1.png";

const stackIcons = {
    React: <FaReact className="text-white mr-2" />,
    NodeJS: <FaNodeJs className="text-white mr-2" />,
    CSS: <FaCss3Alt className="text-white mr-2" />,
    HTML: <FaHtml5 className="text-white mr-2" />,
    Database: <FaDatabase className="text-white mr-2" />,
   
};

const DetailsPage = () => {
    const project = useLoaderData();
    if (!project) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-800 dark:text-gray-200 text-xl">
                Project not found!
            </div>
        );
    }

    return (
        <div className="relative container mx-auto px-6 py-10 lg:py-16 max-w-5xl">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                />
                <div className="p-6 lg:p-10">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition duration-300">
                        {project.title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                        {project.desc}
                    </p>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-sm font-medium shadow-md"
                                >
                                    {stackIcons[tech] || null}
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Challenges & Improvements
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            {project.details}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-3 rounded-md text-lg font-medium hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition duration-300 shadow-lg"
                        >
                            Live Preview
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white px-5 py-3 rounded-md text-lg font-medium hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition duration-300 shadow-lg"
                        >
                            <img src={github} alt="GitHub" className="w-6 mr-2" />
                            GitHub Link
                        </a>
                    </div>
                    <Helmet> <title>{project.title} | Santanu's Portfolio</title></Helmet>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
