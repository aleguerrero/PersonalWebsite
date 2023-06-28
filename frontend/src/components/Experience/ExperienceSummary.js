import React from 'react';

function ExperienceSummary(props) {

    let date = ""

    const startedMonth = new Date(props.startedDate).getMonth() + 2;
    const startedYear = new Date(props.startedDate).getFullYear();

    const endedMonth = new Date(props.endedDate).getMonth() + 2;
    const endedYear = new Date(props.endedDate).getFullYear();

    let isCurrent = props.companyName == "Accenture" ? true : false

    if (!isCurrent) {
        date = endedMonth + "/" + endedYear
    } else {
        date = ""
    }

    return (
        <div className="experienceSummary">
            <div className="companyName">
                <h3>
                    {props.companyName}
                </h3>
            </div>
            <div className="startedDate">
                <h5>Started Date:</h5> {startedMonth + "/" + startedYear}
            </div>
            <div className="endedDate">
                {!isCurrent ? (<h5>Ended Date</h5>) : ("")}
                {date}
            </div>
        </div>
    )

}

export default ExperienceSummary;