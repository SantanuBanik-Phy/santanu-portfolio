import React, { useState } from 'react';
import Cards from '../components/Cards';
import { Helmet } from 'react-helmet';

const AllProjects = () => {
  const projectJson = [
    { id: '1',
      title: 'Service Review',
      desc: 'This is a full-stack web application that allows users to review and interact with various services. Users can add services, write reviews, manage their reviews, and explore reviews of services they have added.',
      image: 'https://i.ibb.co.com/zNhF2jQ/Screenshot-2025-01-03-at-4-15-22-PM.png',
      live: 'https://github.com/SantanuBanik-Phy/service-review-project',
      github: 'https://b10-a11.web.app/',
    },
    { id: '2',
      title: 'Movie Portal',
      desc: 'This is a user-friendly movie portal built with React that allows users to explore movies, view details, add movies, delete movies, and manage their favorite movies.',
      image: 'https://i.ibb.co.com/FsxMsDp/Screenshot-2025-01-03-at-4-13-16-PM.png',
      live: 'https://rambunctious-plantation.surge.sh/',
      github: 'https://github.com/SantanuBanik-Phy/movie-portal-project',
    },
    { id: '3',
      title: 'Forest Expedition',
      desc: 'Forest Expeditions is a platform designed to connect nature enthusiasts with professional adventure consultants. These consultants specialize in creating custom outdoor experiences, whether it’s hiking through lush forests, camping under the stars, or exploring breathtaking landscapes.',
      image: 'https://i.ibb.co.com/tXBJvcD/Screenshot-2025-01-03-at-4-16-33-PM.png',
      live: 'https://confused-support.surge.sh/',
      github: 'https://github.com/SantanuBanik-Phy/forest-expidation-project',
    },
    { id: '4',
      title: 'Gadget Heaven',
      desc: 'An interactive gadget store web application that showcases a range of products, including featured items, discounts, and dynamic cart management. Users can browse through different categories, view product details, add items to their cart or wishlist, and experience real-time updates across different pages.',
      image: 'https://i.ibb.co.com/z7ndJmR/Screenshot-2025-01-03-at-4-17-41-PM-2.png',
      live: 'https://gadgets-heaven-shan.netlify.app/',
      github: 'https://github.com/SantanuBanik-Phy/gadget-heaven-project',
    },
    { id: '5',
      title: 'Cricket Team',
      desc: 'Cricket Dream Team Selection is a React-based web application that allows users to build their dream cricket team. Users can choose players based on their budget, role, and performance. The app ensures that users can only select up to 6 players while keeping within a fixed coin limit.',
      image: 'https://i.ibb.co.com/ZT8xBYy/Screenshot-2025-01-03-at-4-18-12-PM.png',
      live: 'https://festive-pest.surge.sh/',
      github: 'https://github.com/SantanuBanik-Phy/cricket-team-project',
    },
    { id: '6',
      title: 'Pet Adaptation',
      desc: 'Peddy is a web-based platform that connects pet lovers with pets in need of a forever home. Users can view available pets for adoption, sorted by categories such as dogs, cats, rabbits, and birds.',
      image: 'https://i.ibb.co.com/wQsPbLt/Screenshot-2025-01-03-at-4-18-45-PM.png',
      live: 'https://supercar123.netlify.app/',
      github: 'https://github.com/SantanuBanik-Phy/pet-adaptation-project',
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
       <div className='flex flex-col justify-center items-center'>
       <h2 className="text-4xl text-center  font-bold  mb-8 text-green-500 border-b border-green-500 w-max pb-4">
          My Projects
        </h2>
       </div>

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
      <Helmet> <title>AllProjects | Santanu's Portfolio</title></Helmet>
    </section>
  );
};

export default AllProjects;
