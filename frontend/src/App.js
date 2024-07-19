import React, { useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
// import Experience from './components/Experience/Experience';
// import Hobbies from './components/Hobbies/Hobbies';
import Technologies from './components/Technologies/Technologies';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = document.getElementById('aboutMe');
      const technologies = document.getElementById('technologies');

      if (aboutMe) {
        if (window.scrollY > window.innerHeight / 2 && window.scrollY < window.innerHeight * 1.5) {
          aboutMe.style.opacity = 1;
        } else {
          aboutMe.style.opacity = 0;
        }
      }

      if (technologies) {
        if (window.scrollY > window.innerHeight / 1.5) {
          technologies.style.opacity = 1;
        } else {
          technologies.style.opacity = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrolllToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior:'smooth' });
    }
  }

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
            <li><a id="aboutMeScroll" onClick={() => scrolllToElement('aboutMe')}>About Me</a></li>
            <li><a id="aboutMeScroll" onClick={() => scrolllToElement('technologies')}>Technologies</a></li>
            {/* <li onClick={handleClickTechnologies}>Technologies</li>
            <li onClick={handleClickExperience}>Experience</li>
            <li onClick={handleClickHobbies}>Hobbies</li>
            <li onClick={handleClickContact}>Contact</li> */}
          </ul>
        </div>
      </div>
      {/* {isShownAboutMe && <AboutMe />} */}
      <AboutMe />
      <Technologies />
      {/*isShownExperience && <Experience />}
      {isShownHobbies && <Hobbies />}
      {isShownContact && "test"} */}
    </div>
  );
}

export default App;
