import React from 'react';
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
  return (
    <div className="max-w-md mx-auto my-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:dark:shadow-white hover:shadow-gray-500">
      <img
        src={item.image}
        alt="Project"
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{item.desc}</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 flex items-center gap-2">
            <img src={Github} alt="Github" className="w-6" />
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
