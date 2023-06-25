import React from 'react';

function ExperienceSummary(props) {

    const startedDate = new Date(props.startedDate).getDate();
    const startedMonth = new Date(props.startedDate).getMonth();
    const startedYear = new Date(props.startedDate).getFullYear();

    const endedDate = new Date(props.endedDate).getDate();
    const endedMonth = new Date(props.endedDate).getMonth();
    const endedYear = new Date(props.endedDate).getFullYear();

    return (
        <div className="experienceSummary">
               <div className="companyName">
                    <h3>
                        {props.companyName}
                    </h3>
                </div>
                <div className="startedDate">
                    <h5>Started Date:</h5> {startedDate + "/" + startedMonth + "/" + startedYear}
                </div>
                <div className="endedDate">
                    <h5>Ended Date:</h5>
                    {endedDate + "/" + endedMonth + "/" + endedYear}
                </div>
        </div>
    )

}

export default ExperienceSummary;