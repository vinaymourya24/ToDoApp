import React, { useState } from 'react';
import './App.css';
import Todolist from './components/TodoList';

const App = () => {
  const [initialData, updatedata] = useState("");
  const [arr, updatearr] = useState([]);

  const Update = (event) => {
    updatedata(event.target.value);
  }

  const AddTask = () => {
    updatearr((oldarr) => {
      return ([...oldarr, initialData]);
    })
    updatedata("");
  }

  return (
    <>
      <div className="mainContainer">
        <header>
          <h1 className="headLine">What are Your Plans to Do?</h1>
        </header>
        <div className="cBody">
          <div className="centerComponent">
            <input type="text" placeholder="add a task you want to do.." value={initialData} onChange={Update}></input>
            <span onClick={AddTask}>+</span>
            <div className="ToDo">To Do Tasks</div>
            <hr></hr>
            <ol>
              {arr.map((task) => {
                return <Todolist val={task} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;