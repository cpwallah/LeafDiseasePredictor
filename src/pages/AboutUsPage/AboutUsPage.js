import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { motion } from 'framer-motion';
import './AboutUsPage.css';
import ProfileCard from './../../Components/ProfileCard/ProfileCard';

const AboutUsPage = ({ variants, transition }) => {
  const team = [
    {
      name: "Vibhor Joshi",
      email: "vibhorjoshi40@gmail.com",
      role: "ML Developer / Backened Developer",
      github: "https://github.com/vibhorjoshi",
      linkedin: "https://www.linkedin.com/in/vibhor-joshi-b32138243/"
    },
    {
      name: "Samarth Sorot",
      email: "samsorot627@gmail.com",
      role: "Frontened Developer",
      github: "https://github.com/SAMARTH627",
      linkedin: "https://www.linkedin.com/in/samarth-sorot-52b071233/"
    },
    {
      name: "Shivansh Negi",
      email: "shivanshnegi2860@gmail.com",
      role: "MERN DEVELOPER",
      github: "https://github.com/cpwallah",
      linkedin: "https://www.linkedin.com/in/shivansh-42761122a/"
    },
    {
      name: "Pranav Kumar Mishra",
      email: "",
      role: "UI/UX Designer",
      github: "/",
      linkedin: "https://www.linkedin.com/in/pranavakrmishra/"
    },
    
  ];

  return (
    <div className="about-mega-container">
      <Navbar />
      <motion.div
        className="about-container"
        initial="out"
        animate="in"
        exit="exit"
        variants={variants}
        transition={transition}
      >
        <h2 className="profile-heading">End to End Machine Learning project</h2>
        <div className="profile-cards">
          {team.map((member, index) => (
            <ProfileCard data={member} key={index} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
