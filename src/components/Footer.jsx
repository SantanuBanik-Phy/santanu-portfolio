import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`relative border-t-2 ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"
      } py-8`}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center space-y-6 lg:space-y-0">
          {/* About Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              About Me
            </h2>
            <p>
              I’m a passionate full-stack developer and design enthusiast,
              committed to delivering high-quality digital experiences.
              Whether you need a sleek web application or a mobile-friendly
              solution, I’ve got you covered!
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/3 text-center">
            <h2
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/aboutme"
                  className={`hover:${theme === "dark" ? "text-green-500" : "text-green-600"} transition duration-300`}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={`hover:${theme === "dark" ? "text-green-500" : "text-green-600"} transition duration-300`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contactme"
                  className={`hover:${theme === "dark" ? "text-green-500" : "text-green-600"} transition duration-300`}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-1/3 text-center lg:text-right">
            <h2
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              Follow Me
            </h2>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${theme === "dark" ? "text-green-500" : "text-green-600"} transition duration-300`}
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${theme === "dark" ? "text-green-500" : "text-green-600"} transition duration-300`}
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${theme === "dark" ? "text-green-500" : "text-green-600"} transition duration-300`}
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Santanu Banik. All rights reserved.
          </p>
          <p
            className={`text-xs ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } mt-1`}
          >
            Designed and developed by Santanu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
