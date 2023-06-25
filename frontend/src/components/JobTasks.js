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
                            <ul>
                                {task.jobTasks &&
                                    task.jobTasks.map((jobTask) => (
                                       <li>
                                           {jobTask}
                                       </li>  
                                ))}
                                <h5 className="skillsetTitle">Skillset</h5>
                                {task.skillset &&
                                    task.skillset.map((skillset) => (
                                       <li>
                                           {skillset}
                                       </li>  
                                ))}
                            </ul>
                        </li>
                    </ul>
                ))}
        </div>
    )
}

export default JobTasks;