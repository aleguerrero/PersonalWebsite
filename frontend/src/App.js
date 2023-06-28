import React from 'react';
import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies';
import Technologies from './components/Technologies';

function App() {

  const [isShownAboutMe, setIsShownAboutMe] = useState(false);
  const [isShownTechnologies, setIsShownTechnologies] = useState(false);
  const [isShownExperience, setIsShownExperience] = useState(false);
  const [isShownHobbies, setIsShownHobbies] = useState(false);
  const [isShownContact, setIsShownContact] = useState(false);

  const handleClickAboutMe = event => {
    setIsShownAboutMe(current => !current);
    setIsShownTechnologies(false);
    setIsShownExperience(false);
    setIsShownHobbies(false);
    setIsShownContact(false);
  }

  const handleClickTechnologies = event => {
    setIsShownTechnologies(current => !current);
    setIsShownAboutMe(false);
    setIsShownExperience(false);
    setIsShownHobbies(false);
    setIsShownContact(false);
  }

  const handleClickExperience = event => {
    setIsShownExperience(current => !current);
    setIsShownAboutMe(false);
    setIsShownTechnologies(false);
    setIsShownHobbies(false);
    setIsShownContact(false);
  }

  const handleClickHobbies = event => {
    setIsShownHobbies(current => !current);
    setIsShownAboutMe(false);
    setIsShownTechnologies(false);
    setIsShownExperience(false);
    setIsShownContact(false);
  }

  const handleClickContact = event => {
    setIsShownContact(current => !current);
    setIsShownAboutMe(false);
    setIsShownTechnologies(false);
    setIsShownExperience(false);
    setIsShownHobbies(false);
  }

  return (
    <div className="App">
      <h1>Alejandro Guerrero Aguilar</h1>
      <h2>Software Engineer</h2>
      <div className='options'>
        <ul>
          <li><a onClick={handleClickAboutMe}>About Me</a></li>
          <li onClick={handleClickTechnologies}>Technologies</li>
          <li onClick={handleClickExperience}>Experience</li>
          <li onClick={handleClickHobbies}>Hobbies</li>
          <li onClick={handleClickContact}>Contact</li>
        </ul>
        {isShownAboutMe && <AboutMe />}
        {isShownTechnologies && <Technologies />}
        {isShownExperience && <Experience />}
        {isShownHobbies && <Hobbies />}
        {isShownContact && "test"}
      </div>
    </div>
  );
}

export default App;
