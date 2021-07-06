import React, { useState } from 'react';
import './index.css';
import Zoom from 'react-reveal/Zoom';

// Main app function
const App = () => {
  const [tasks, setTasks] = useState('');
  const [taskContainer, setTaskContainer] = useState([]);


  // Function that will delete the task
  const removeTask = (id) => {
    let deleted = taskContainer.filter((task) => task.id !== id)
    setTaskContainer(deleted);
  
  }

  // Function that will get the date of task upon creation
  const todate = new Date();
  const taskDate = `${todate.getDate()}-${todate.getMonth()+1}-${todate.getFullYear()}`;

  // Function that will handle the main logic of the app
  const tasksHandler = (e) => {
    e.preventDefault();
    if (tasks) {
      const task = { 
        id: new Date().getTime().toString(),
        tasks,
      };
      setTaskContainer((taskContainer) => {
        return [...taskContainer, task];
      });
      setTasks('');
    } else {
      alert('please put some input')
    }
  }
  // The output or display goes here
  return (
    <>
      <section className="wrapper">
        <div className="input-wrapper"> 
          <input 
          className="input" 
          placeholder="Add some task here"
          maxLength="35"
          type="text" 
          id='text' 
          name='text' 
          value={tasks} 
          onChange={(e) => setTasks(e.target.value)}
          />
        <button className="button" type="submit" onClick={tasksHandler}>Add task</button>
        </div>
        
        {taskContainer.map((task, index) =>{
          const {id, tasks} = task;
          return (
             <Zoom>
                <div className="content-wrapper" key={id}>
                
                  <div className="content">
                    <p>{tasks}</p> 
                  </div>
                  
                  <div className="lineBreak"></div>
                  <div className="taskDate"><p><em>Task created on {taskDate}</em></p></div>
              
                  <button className="remove-button" onClick={() => removeTask(id)}>Remove</button>
                  
                </div>
              </Zoom>
          );
        })};
      </section>
    </>
  );
 
}

export default App;
