import React from "react";
import Github from "../assets/github-1.png";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="group relative max-w-md mx-auto my-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:dark:shadow-white">
      <div className="relative">
        <img
          src={item.image}
          alt="Project"
          className="rounded-t-lg w-full h-48 object-cover transition duration-300 ease-in-out transform group-hover:scale-110 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg opacity-0 group-hover:opacity-50 transition duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <Link to={`/details/${item.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            View Details
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{item.desc}</p>
        <div className="flex items-center justify-between">
          <a href={item.live} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Live Preview
          </a>
          <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            <img src={Github} alt="Github" className="w-6" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;