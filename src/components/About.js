import React from "react";
import "./About.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const About = () => {

  return (
    <div className="page-container">
      <div className="title center">
        <h1>About Me!</h1>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="description grid-container">

        <div className="center info">
          <h2>Get to know me!</h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Also I'm an Informatic Engineer Student with 2 years of experience working for a big Tech Company.
          </p>
          <div className="links-container">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jose-fermin-fernandez-bridda-341b9a19a/"> <FaLinkedin /></a>
              <a href="https://www.instagram.com/ferminferb/"><FaInstagram /></a>
              <a href="https://github.com/FerminBD"><FaGithub/></a>
            </div>  
            <div className="download">
              <h4>Download Resume</h4>
              <a href="/Fernandez Bridda Jose Fermin - Resume.pdf">Resume</a>
            </div>    
          </div>   
        </div>

        <div className="center skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Bootstrap</span>
            <span>C</span>
            <span>C#</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
