import React, { useState } from "react";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar } from "lucide-react";
import about from "../assets/hero-1.png"
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiWordpress,
  SiBootstrap,
  SiGithub,
  SiGit,
  SiNpm,
  SiFirebase,
  SiExpress
} from "react-icons/si";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const personalInfo = [
  { icon: <User2 size={20} />, text: "Santanu Banik" },
  { icon: <PhoneCall size={20} />, text: "01817533313" },
  { icon: <MailIcon size={20} />, text: "santanubanik2k@gmail.com" },
  { icon: <Calendar size={20} />, text: "Born on 22 Oct, 1999" },
  { icon: <GraduationCap size={20} />, text: "BSc in Physics" },
  { icon: <HomeIcon size={20} />, text: "296/2, South Shahadebpur, Feni, Bangladesh" },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabContent = {
    personal: (
      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">About Me</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Passionate Full Stack Developer with expertise in React, Next.js, and other modern web technologies.
          Constantly learning and pushing the boundaries of technology to deliver innovative and scalable solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personalInfo.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="text-green-600">{item.icon}</div>
              <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    qualifications: (
      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">My Awesome Journey</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-medium text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Experience
            </h4>
            {/* <ul className="mt-4 space-y-4">
              {[
                { company: "ABC Inc", position: "Software Engineer", years: "2021-2022" },
                { company: "ABC Inc", position: "Software Engineer", years: "2022-2023" },
                { company: "ABC Inc", position: "Software Engineer", years: "2023-2024" },
              ].map((exp, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.position}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.years}</p>
                  </div>
                </motion.li>
              ))}
            </ul> */}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-xl font-medium text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.25m0-2.25H6.636M12 12v1.5" />
              </svg>
              Education
            </h4>
            <ul className="mt-4 space-y-4">
              {[
                { school: "Notre Dame College,Dhaka", degree: "HSC in Science", years: "2016-2018" },
                { school: "Jagannath Univarsity,Dhaka", degree: "Bsc Honors,Physics", years: "2018-present" },
               
              ].map((edu, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.degree}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.years}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    ),
    skills: (
      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Tools I Use Everyday</h3>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <h4 className="text-xl font-medium text-gray-900 dark:text-white">Skills</h4>
          <ul className="list-disc text-gray-700 dark:text-gray-300 ml-6 space-y-2">
            <li className="flex items-center"> <SiHtml5 className="mr-2 text-orange-500 text-xl" /> HTML, CSS</li>
            <li className="flex items-center"> <SiReact className="mr-2 text-blue-400 text-xl" /> Reactjs, <SiTailwindcss className="mx-2 text-blue-400 text-xl" /> Tailwind CSS, <SiRedux className="mx-2 text-purple-500 text-xl" /> Redux Toolkit</li>
            <li>Front-end Development</li>
            <li className="flex items-center"> <SiJavascript className="mr-2 text-yellow-400 text-xl" /> Javascript</li>
            <li>Back-end Development</li>
            <li className="flex items-center"> <SiNextdotjs className="mr-2 text-gray-800 text-xl" /> Nextjs, <SiNodedotjs className="mx-2 text-green-500 text-xl" /> Nodejs, <SiExpress className="mx-2 text-gray-800 text-xl" /> Expressjs</li>
            <li>Full Stack Developer</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <h4 className="text-xl font-medium text-gray-900 dark:text-white">Tools</h4>
          <div className="flex items-center gap-4 mt-4">
            <SiWordpress className="text-3xl text-gray-700" />
            <SiBootstrap className="text-3xl text-purple-600" />
            <SiGithub className="text-3xl text-gray-800" />
            <SiNpm className="text-3xl text-red-500" />
            <SiFirebase className="text-3xl text-orange-400" />
          </div>
        </motion.div>
      </motion.div>
    ),
  };

  return (
    <section className="relative bg-gray-100 dark:bg-gray-800 py-24 transition-all ease-in-out">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 dark:text-white transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-2 text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Learn more about my personal and professional journey.
          </motion.p>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row gap-6 items-start">
          <div className="lg:w-1/3  relative rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl">
            <motion.img 
              src={about} 
              alt="About Me" 
              className="w-full h-full  object-cover transition-all transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-900 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="tabs tabs-boxed flex items-center justify-center mb-8 space-x-10">
              <button
                className={`tab btn rounded-lg px-6 py-3 text-lg font-medium transition-all ${activeTab === "personal" ? "bg-green-500 text-white shadow-lg scale-105" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-green-600 hover:text-white"}`}
                onClick={() => setActiveTab("personal")}
              >
                Personal Info
              </button>
              <button
                className={`tab btn rounded-lg px-6 py-3 text-lg font-medium transition-all ${activeTab === "qualifications" ? "bg-green-500 text-white shadow-lg scale-105" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-green-600 hover:text-white"}`}
                onClick={() => setActiveTab("qualifications")}
              >
                Qualifications
              </button>
              <button
                className={`tab btn rounded-lg px-6 py-3 text-lg font-medium transition-all ${activeTab === "skills" ? "bg-green-500 text-white shadow-lg scale-105" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-green-600 hover:text-white"}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
            </div>
            <div>{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
      <Helmet> <title>About | Santanu's Portfolio</title></Helmet>
    </section>
  );
};

export default AboutMe;
