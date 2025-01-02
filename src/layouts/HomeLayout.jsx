import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/Particle';

const HomeLayout = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light' // Load theme from localStorage or default to light
  );

  useEffect(() => {
    // Apply theme class to the root element
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Save theme preference
  }, [theme]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Pass theme to ParticleBackground */}
      <ParticleBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="min-h-[calc(100vh-100px)] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Content controlled by React Router */}
        <Outlet />
      </div>
      {/* Pass theme to Footer */}
      <Footer theme={theme} />
    </div>
  );
};

export default HomeLayout;
