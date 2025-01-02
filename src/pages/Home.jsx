import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
 
            <About></About> 
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;