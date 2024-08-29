import { useEffect, useState } from "react"
import './Experience.css'
import ExperienceSummary from "./ExperienceSummary";
import JobTasks from "./JobTasks";
import React from 'react';

function Experience() {
    const [experiences, setExperiences] = useState();

    const getExperiencesData = async () => {
        const response = await fetch(
            "http://localhost:3000/api/experiences"
        ).then((response) => response.json());

        setExperiences(response.reverse());
    };

    useEffect(() => {
        getExperiencesData();
    }, []);

    return (
        <div className="experiences container" id="experiences">
            <h2>Experience</h2>
            <div className="experiences-container">
                {experiences &&
                    experiences.map((experience, id) => (
                        <div className="experienceBlock box" key={id}>
                            <ExperienceSummary
                                companyName={experience.companyName}
                                startedDate={experience.started}
                                endedDate={experience.ended}
                            />
                            <JobTasks tasks={experience.jobs} />
                        </div>
                    ))}
            </div> 
        </div>
    )

}

export default Experience;