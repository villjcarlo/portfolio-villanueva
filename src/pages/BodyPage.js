import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Row, Col, Container } from 'react-bootstrap';
import html5 from "../images/html5.png"
import css3 from "../images/css3.png"
import bootstrap from "../images/bootstrap.png"
import javascript from "../images/javascript.png"
import mongodb from "../images/mongodb.png"
import expressjs from "../images/expressjs.png"
import react from "../images/react.png"
import nodejs from "../images/nodejs.png"
import git from "../images/git.png"
import githubIcon from "../images/githubIcon.png"; 
import externalLinkIcon from "../images/externalLinkIcon.png"; 
import educHub from "../images/educHub.jpg"; 
import foodEcommerce from "../images/foodEcommerce.jpg"; 
import blog from "../images/blog.jpg"; 
import linkedinIcon from "../images/linkedinIcon.png"; 


const projects = [
  {
    name: "Static Language Learning Resource Hub (HTML, CSS, Bootstrap)",
    image: educHub,
    live: "https://villjcarlo.github.io/s82-educ-resource-hub/"
  },
  {
    name: "Food E-Commerce App (React.js, JavaScript)",
    image: foodEcommerce,
    live: "http://zuitt-bootcamp-prod-529-8531-villanueva.s3-website.us-east-1.amazonaws.com/"
  },
  {
    name: "Blog App (React.js, JavaScript)",
    image: blog,
    live: "https://blog-app-villanueva.vercel.app/"
  }
];


export default function BodyPage() {
    return (
      <>
        <div id="about">

          {/*ABOUT ME*/}
          <div className='d-flex flex column'>
            <div md={6} className='text-center'>
              <h1 className='py-3'>About Me</h1>
              <p className='mb-3'>Hello! I'm a Civil Engineer transitioning into the the tech industry. I’ve always been full of ideas regarding web development, but for the longest time, I was hesitant to act due to limited knowledge. That changed when I decided to dive into web development, turning my creativity into interactive and functional web experiences. While I know there’s still so much more to learn, that’s what makes the journey exciting. With every project, I’m exploring new techniques and pushing my skills further to create visually engaging and dynamic experiences. </p>
            </div>  
          </div>

          {/*SKILLS*/}
          <div className='mt-5'>
            <h1 className='py-3 text-center'>Skills</h1>
            <div className='row'>
              <div className='col-md'>
                <img src={html5}/>
                <p>HTML</p>
              </div>
              <div className='col-md'>
                <img src={css3}/>
                <p>CSS</p>
              </div>
              <div className='col-md'>
                <img src={bootstrap}/>
                <p>Bootstrap</p>
              </div>
              <div className='col-md'>
                <img src={javascript}/>
                <p>Javascript</p>
              </div>
              <div className='col-md'>
                <img src={mongodb}/>
                <p>MongoDB</p>
              </div>
              <div className='col-md'>
                <img src={expressjs}/>
                <p>Express.JS</p>
              </div>
              <div className='col-md'>
                <img src={react}/>
                <p>React</p>
              </div>
              <div className='col-md'>
                <img src={nodejs}/>
                <p>Node.JS</p>
              </div>
              <div className='col-md'>
                <img src={git}/>
                <p>Git</p>
              </div>
            </div>
          </div>

        </div>

      
        <div id="projects">
            <div className="container my-5">
              <h1 className="mb-4 text-center">Projects</h1>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                {projects.map((project, index) => (
                  <div key={index} className="col">
                    <div className="card project-card h-100">
                      <img src={project.image} alt={project.name} className="card-img-top" />
                      <div className="card-body text-center">
                        <h5 className="card-title text-light">{project.name}</h5>
                        <div className="d-flex justify-content-center gap-3">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <img src={externalLinkIcon} alt="Live Project" className="icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        <footer id="contact" className="text-center py-4">
          <h1 className="py-2">Contact</h1>
          <p>📍 Pasig City, Philippines</p>
          <p>✉️ <a href="mailto:villjcarlo@gmail.com" className="email-link">villjcarlo@gmail.com</a></p>
          
          <div className="social-icons mt-3">
            <a href="https://www.linkedin.com/in/johncarlovillanueva/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a href="https://github.com/villjcarlo" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
        </footer>
      </>
    );
}
