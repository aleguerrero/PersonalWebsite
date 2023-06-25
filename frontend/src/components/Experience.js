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

        setExperiences(response);
    };

    useEffect(() => {
        getExperiencesData();
    }, []);

    return (
        <div className="experiences">
            <ul>
                {experiences &&
                    experiences.map((experience, id) => (
                        <li className="experienceBlock" key={id}>
                            <ExperienceSummary
                                companyName={experience.companyName}
                                startedDate={experience.started}
                                endedDate={experience.ended}
                            />
                            <JobTasks tasks={experience.jobs} />
                        </li>
                    ))}
            </ul>
        </div>
    )

}

export default Experience;