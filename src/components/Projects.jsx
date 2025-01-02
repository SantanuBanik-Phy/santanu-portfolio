import React from 'react'
import { Link } from 'react-router-dom'; // To link to the projects page
import Cards from './Cards'

const Projects = () => {
  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: "",
      live: "https://rohitsingh93300-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio"
    },
    {
      title: 'Spicy Bites',
      desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
      image: "",
      live: "https://spicybites.netlify.app/",
      github: "https://github.com/rohitsingh93300/YtSpicyBites"
    },
    {
      title: 'YouTube Clone',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: "",
      live: "https://youtube-clone-93300.netlify.app/",
      github: "https://github.com/rohitsingh93300/YouTube-clone"
    },
    {
      title: 'Webelite builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: "",
      live: "https://www.webelitebuilders.com/",
      github: "#"
    },
    {
      title: 'Super Car',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: "",
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/rohitsingh93300/supercars"
    },
  ];

  return (
    <section id='projects' className='relative  py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
          {projectJson.map((items, index) => {
            return <Cards key={index} item={items} />;
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/projects">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
