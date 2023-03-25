import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [initialData, updatedata] = useState("");
  const [arr, updatearr] = useState([]);

  const Update = (event) => {
    updatedata(event.target.value);
  }

  const AddTask = () => {
    updatearr((oldarr) => {
      if(initialData==="")
      {
        alert("Please Write Something To Add");
        return ([...oldarr]);
      }
      return ([...oldarr, initialData]);
    })
    updatedata("");
  }

  const deleteItem = (id) =>{
     const updatedata = arr.filter((element,ind)=>{
         return (ind !== id);
     }); 

     updatearr(updatedata);
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
              {arr.map((task,ind) => {
                 return <li>{task}<div className="delete" onClick={()=>{deleteItem(ind)}}>-</div></li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;