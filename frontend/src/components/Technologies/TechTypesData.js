import React from "react";
import TechBlock from "./TechBlock";

function TechsTypeData(props) {
    return (
        <div className="techTypeBlock">
            <div className="titleTechs">
                <h3>{props.title}</h3>
            </div>
            <div className="namingsBlock">
                {props.techTypeList
                    && props.techTypeList.map((ttl) => (
                        <TechBlock name={ttl.name} dateLearned={ttl.dateLearned} frameworks={ttl.frameworks} tools={ttl.tools}/>
                    ))}
            </div>
        </div>

    );
}

export default TechsTypeData;