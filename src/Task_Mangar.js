import { useState } from "react";
import React from 'react';


const Task_Manager = () => {

    const [tasks, setTask] = useState(['complete reactjs', 'get the Job', 'get the Job1']);
    const [item, setItem] = useState('');

    const addTask = () => {
        const task = tasks;
        task.push(item);
        setTask(task);
        setItem('');
    }


    const deleteHandler = ( i) => {
        console.log(i)
        const task = [...tasks]      
        task.splice(i, 1); // task =  ['get the job']
        setTask(task)
    }

   
    return ( 
        <React.Fragment>
            <ul>
                {tasks.map((task, i) => (
                    
                     <div>
                        <li key={ i }>{task}</li>
                        <button data-index={ i }   onClick={ () => deleteHandler(i) }>Delete</button>
                    </div>
                   
                ))}


                </ul>

            <input value={ item } onChange={(e) => setItem(e.target.value)}/>
            <button onClick={ addTask }>AddTask</button>
        </React.Fragment>
        )
}

export default Task_Manager;