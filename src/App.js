import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';

function App() {

  const [isShownAboutMe, setIsShownAboutMe] = useState(false);
  const [isShownTechnologies, setIsShownTechnologies] = useState(false);
  const [isShownExperiencie, setIsShownExperience] = useState(false);
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
      <h3>Software Engineer</h3>
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
      </div>
    </div>
  );
}

export default App;
