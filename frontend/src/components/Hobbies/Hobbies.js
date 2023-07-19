import React from 'react';
import { useEffect, useState } from "react"
import "./Hobbies.css"
import HobbyImage from './HobbyImage';

function Hobbies() {
    const [hobbies, setHobbies] = useState();

    const getHobbiesData = async () => {
        const response = await fetch(
            "http://localhost:3000/api/hobbies"
        ).then((response) => response.json());

        setHobbies(response);
    };

    useEffect(() => {
        getHobbiesData();
    }, []);

    return (
        <div className="hobbies">
            <ul>
                {hobbies &&
                    hobbies.map((hobby, id) => (
                        <div className='hobbyBlock'>
                            <div className='hobbyText'>
                                <li key={id}>
                                    <h5 className='titleHobby'>
                                        {hobby.hobbyName}
                                    </h5>
                                    <span className='hobbyDescription'>
                                        {hobby.description}
                                    </span>
                                </li>
                            </div>
                            <HobbyImage imagePath={hobby.imagePath} />
                        </div>
                    ))}
            </ul>
        </div>
    );
}

export default Hobbies;