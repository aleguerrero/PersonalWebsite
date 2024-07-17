import React, { useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
// import Experience from './components/Experience/Experience';
// import Hobbies from './components/Hobbies/Hobbies';
// import Technologies from './components/Technologies/Technologies';

function App() {

  // const [isShownAboutMe, setIsShownAboutMe] = useState(false);
  // const [isShownTechnologies, setIsShownTechnologies] = useState(false);
  // const [isShownExperience, setIsShownExperience] = useState(false);
  // const [isShownHobbies, setIsShownHobbies] = useState(false);
  // const [isShownContact, setIsShownContact] = useState(false);

  // const handleClickAboutMe = event => {
  //   setIsShownAboutMe(current => !current);
  //   setIsShownTechnologies(false);
  //   setIsShownExperience(false);
  //   setIsShownHobbies(false);
  //   setIsShownContact(false);
  // }

  // const handleClickTechnologies = event => {
  //   setIsShownTechnologies(current => !current);
  //   setIsShownAboutMe(false);
  //   setIsShownExperience(false);
  //   setIsShownHobbies(false);
  //   setIsShownContact(false);
  // }

  // const handleClickExperience = event => {
  //   setIsShownExperience(current => !current);
  //   setIsShownAboutMe(false);
  //   setIsShownTechnologies(false);
  //   setIsShownHobbies(false);
  //   setIsShownContact(false);
  // }

  // const handleClickHobbies = event => {
  //   setIsShownHobbies(current => !current);
  //   setIsShownAboutMe(false);
  //   setIsShownTechnologies(false);
  //   setIsShownExperience(false);
  //   setIsShownContact(false);
  // }

  // const handleClickContact = event => {
  //   setIsShownContact(current => !current);
  //   setIsShownAboutMe(false);
  //   setIsShownTechnologies(false);
  //   setIsShownExperience(false);
  //   setIsShownHobbies(false);
  // }

  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = document.getElementById('aboutMe');
      if (window.scrollY > window.innerHeight / 2) {
        aboutMe.style.opacity = 1;
      } else {
        aboutMe.style.opacity = 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const aboutMe = document.getElementById('aboutMe');
    aboutMe.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
      <div className='main-page'>
        <div className='titles'>
          <h1>Alejandro Guerrero Aguilar</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className='options'>
          <ul>
            <li><a id="aboutMeScroll" onClick={handleClick}>About Me</a></li>
            {/* <li onClick={handleClickTechnologies}>Technologies</li>
            <li onClick={handleClickExperience}>Experience</li>
            <li onClick={handleClickHobbies}>Hobbies</li>
            <li onClick={handleClickContact}>Contact</li> */}
          </ul>
        </div>
      </div>
      {/* {isShownAboutMe && <AboutMe />} */}
      <AboutMe />
      {/* {isShownTechnologies && <Technologies />}
      {isShownExperience && <Experience />}
      {isShownHobbies && <Hobbies />}
      {isShownContact && "test"} */}
    </div>
  );
}

export default App;
