import React, { useState } from 'react';
import Cards from '../components/Cards';

const AllProjects = () => {
  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: '',
      live: 'https://rohitsingh93300-portfolio.vercel.app/',
      github: 'https://github.com/rohitsingh93300/portfolio',
      category: 'Web Development',
    },
    {
      title: 'Spicy Bites',
      desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
      image: '',
      live: 'https://spicybites.netlify.app/',
      github: 'https://github.com/rohitsingh93300/YtSpicyBites',
      category: 'E-Commerce',
    },
    {
      title: 'YouTube Clone',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: '',
      live: 'https://youtube-clone-93300.netlify.app/',
      github: 'https://github.com/rohitsingh93300/YouTube-clone',
      category: 'Web Development',
    },
    {
      title: 'Webelite Builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: '',
      live: 'https://www.webelitebuilders.com/',
      github: '#',
      category: 'Business',
    },
    {
      title: 'Super Car',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: '',
      live: 'https://supercar123.netlify.app/',
      github: 'https://github.com/rohitsingh93300/supercars',
      category: 'Design',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectJson);

  // Handle Search and Filter
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterProjects(e.target.value, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterProjects(searchQuery, e.target.value);
  };

  const filterProjects = (query, category) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = projectJson.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(lowerCaseQuery) ||
        project.desc.toLowerCase().includes(lowerCaseQuery);
      const matchesCategory = category === 'All' || project.category === category;

      return matchesSearch && matchesCategory;
    });
    setFilteredProjects(filtered);
  };

  return (
    <section id="projects" className="relative py-10 px-4  dark:text-white">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center  font-bold  mb-8 text-green-500 border-b border-green-500 w-max pb-4">
          My Projects
        </h2>

        {/* Search and Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search projects..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            <option value="All">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Business">Business</option>
            <option value="Design">Design</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((items, index) => <Cards key={index} item={items} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No projects match your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
