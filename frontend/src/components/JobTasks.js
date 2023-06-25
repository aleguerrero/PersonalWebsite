import React from 'react';

function JobTasks(props) {

    return (
        <div className="jobTasks">
            {props.tasks &&
                props.tasks.map((task) => (
                    <ul>
                        <h5>
                            {task.jobName}
                        </h5>
                        <div className="dates">
                            {new Date(task.startedTimePosition).getMonth()}/{new Date(task.startedTimePosition).getFullYear()} - {new Date(task.endedTimePosition).getMonth()}/{new Date(task.endedTimePosition).getFullYear()}
                        </div>
                        <li className="taskBlock">
                            
                        </li>
                    </ul>
                ))}
        </div>
    )
}

export default JobTasks;