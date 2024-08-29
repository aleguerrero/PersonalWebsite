import React, { useState, useEffect } from 'react';
import './Technologies.css';
import TechsTypeData from './TechTypesData';

function Technologies() {

    const [technologies, setTechnologies] = useState();

    const getTechnologiesData = async () => {
        const response = await fetch(
            "http://localhost:3000/api/technologies/"
        ).then((response) => response.json());

        setTechnologies(response);
    };

    useEffect(() => {
        getTechnologiesData();
    }, []);

    const programmingLanguages = []
    const databases = []
    const publicCloudProviders = []
    const devOps = []

    if (technologies) {
        for (let i = 0; i < technologies.length; i++) {
            if (technologies[i]["type"] === "ProgrammingLanguage") {
                programmingLanguages.push(technologies[i]);
            } else if (technologies[i]["type"] === "Database") {
                databases.push(technologies[i]);
            } else if (technologies[i]["type"] === "DevOps") {
                devOps.push(technologies[i]);
            } else {
                publicCloudProviders.push(technologies[i]);
            }
        }
    }

    const sortArray = (array) => {
        return array.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }

    return (
        <div>
            <div className="technologies container" id="technologies">
                <h2>Technologies</h2>
                <TechsTypeData title="Programming Languages" techTypeList={sortArray(programmingLanguages)} />
                <TechsTypeData title="Databases" techTypeList={sortArray(databases)} />
                <TechsTypeData title="Public Cloud Providers" techTypeList={sortArray(publicCloudProviders)} />
                <TechsTypeData title="DevOps" techTypeList={sortArray(devOps)} />
            </div>
        </div>
    );
}

export default Technologies;