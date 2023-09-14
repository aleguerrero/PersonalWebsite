import React, {useState, useEffect} from 'react';
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
    
    return (
        <div>
            <div className="technologiesBlock">
                <TechsTypeData title="Programming Languages" techTypeList={programmingLanguages} />
                <TechsTypeData title="Databases" techTypeList={databases} />
                <TechsTypeData title="Public Cloud Providers" techTypeList={publicCloudProviders} />
                <TechsTypeData title="DevOps" techTypeList={devOps} />        
            </div>
        </div>
    );
}

export default Technologies;