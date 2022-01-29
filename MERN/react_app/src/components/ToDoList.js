import React, { useState } from 'react';

const ToDoList = (props) => {

    const [task, setTask] = useState({
        name: "",
        completed: false
    });

    const [taskList, setTaskList] = useState([]);

    let taskStyle = "";

    const handleSubmitTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, task]);
        setTask({name: ""});
    }

    const deleteTask = (j) => {
        let newList = [];
        // newList = taskList.filter();
        // console.log( "j== ", j);
        for ( let i=0; i < taskList.length; i++ ) 
            if (i !== j) newList.push(taskList[i]);
        setTaskList(newList);
    }

    const changeCompleted = (index) => {
        let newList = taskList.map( (taskItem, i)=>{
            if (index === i) {
                taskItem.completed = !taskItem.completed;
                // console.log("Completed status after changing: ",taskItem.completed);
            }
            return taskItem } );

        setTaskList(newList);
    }

    return (<div>

        <h1>To-Do list:</h1>
        <form onSubmit = { (e)=>handleSubmitTask(e) }>
            <input type="text" onChange= { (e)=>setTask([e.target.value]) } value={task.name} />
            <button style={{margin: 10}} className="btn btn-primary">Add Task</button>
        </form>
        <ul className="mt-5">
        {
        taskList.map( (taskItem, i) => {
            return (
                
            <div key={i} style = {{ margin: 5, borderRadius: 10 }}>
                { taskItem.completed ? taskStyle = "completed" : taskStyle = "" }
                <input onChange={(event)=>changeCompleted(i)} checked={setTask.completed} type="checkbox"/>
                <li className={taskStyle}>{taskItem}</li>
                <button onClick={(event)=>deleteTask(i)} className="btn btn-success">Delete</button>
            </div> )
        }) }
        </ul>
        {}
    </div>)
}

export default ToDoList;