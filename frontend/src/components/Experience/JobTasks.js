import React from 'react';

function JobTasks(props) {

    return (
        <div className="jobTasks">
            {props.tasks.sort((a, b) => new Date(b.startedTimePosition) - new Date(a.startedTimePosition)) &&
                props.tasks.map((task) => (
                    <ul className='ulTasksSkillset'>
                        <h5>
                            {task.jobName}
                        </h5>
                        <div className="dates">
                            {new Date(task.startedTimePosition).getMonth() + 2}/{new Date(task.startedTimePosition).getFullYear()} - {new Date(task.endedTimePosition).getMonth() + 2}/{new Date(task.endedTimePosition).getFullYear()}
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
                                <div className='skillset-container'>
                                    {task.skillset &&
                                        task.skillset.map((skillset) => (
                                        <div className='skillset-name'>
                                            {skillset}
                                        </div>  
                                    ))}
                                </div>
                            </ul>
                        </li>
                    </ul>
                ))}
        </div>
    )
}

export default JobTasks;