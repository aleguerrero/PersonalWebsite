import React from 'react';
import "./AboutMe.css"
import image from "./images/CL032.jpg" 

function AboutMe() {

    function getDiffYears(date) {
        var ageDiff = Date.now() - date;
        var ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <div className='AboutMeBlock'>
            <div className='myImage'>
                <img src={image} alt="Looking good" />
            </div>
            <div className='aboutMeText'>
                <h5>
                    Hello! Welcome to my website!
                </h5>
                <p>
                    I'm Alejandro Guerrero Aguilar, I'm a {getDiffYears(new Date("05/17/1998"))} years old Software Engineer from San José, Costa Rica, with {getDiffYears(new Date("01/01/2016"))} years of experience.
                    I am deeply appasionate for computers and how do they work to run stuff, so that is why I took myself to this career, challenging myself everyday to learn something new
                    professionally and personally.<br/> <br/>
                    I'm also a big fan of</p>
                    <ul className='hobbiesList'>
                        <li>
                            Cars
                        </li>
                        <li>
                            Music
                        </li>
                        <li>
                            Photography
                        </li>
                    </ul>
                    <p>
                        My hobbies are big part of what I like to do and what I am and what keeps me 
                    pushing everyday to learn more, explore new experiences, meet new people, and develop myself personally.
                    </p>
                    <p>
                        I made this website because I wanted to challange myself with JavaScript and it's frameworks, and CSS, since I haven't used before JavaScript and CSS.
                        Also I like having a website where I can promote myself and my work. 
                        <br/><br/>
                        For this website, I am using ReactJS in the front-end, Express for the back-end and MongoDB for the database.
                    </p>
            </div>
        </div>
    );
}

export default AboutMe;