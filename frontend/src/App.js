import React, { useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Technologies from './components/Technologies/Technologies';

function App() {

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutMe = document.getElementById('aboutMe');
  //     const technologies = document.getElementById('technologies');
  //     const experiences = document.getElementById('experiences');

  //     if (aboutMe) {
  //       if (window.scrollY > window.innerHeight / 2 && window.scrollY < window.innerHeight * 1.5) {
  //         aboutMe.style.opacity = 1;
  //       } else {
  //         aboutMe.style.opacity = 0;
  //       }
  //     }

  //     if (technologies) {
  //       if (window.scrollY > window.innerHeight * 1.5 && window.scrollY < window.innerHeight * 2.5)  {
  //         technologies.style.opacity = 1;
  //       } else {
  //         technologies.style.opacity = 0;
  //       }
  //     }

  //     if (experiences) {
  //       if (window.scrollY > window.innerHeight * 2.5) {
  //         experiences.style.opacity = 1;
  //       } else {
  //         experiences.style.opacity = 0;
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToSection = (elementId) => {
  //   const element = document.getElementById(elementId);
  //   if (element) {
  //     element.scrollIntoView({ behavior:'smooth' });
  //   }
  // }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className='main-page'>
        <div className='titles-container'>
          <div className='titles-text'>
            <h1>Alejandro Guerrero Aguilar</h1>
            <h2>Software Engineer</h2>
          </div>
        </div>
        <div className='options'>
          <ul>
            <li><a onClick={() => scrollToSection('aboutMe')}>About Me</a></li>
            <li><a onClick={() => scrollToSection('technologies')}>Technologies</a></li>
            <li><a onClick={() => scrollToSection('experiences')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
      <AboutMe />
      <Technologies />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
