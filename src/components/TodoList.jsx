import React from 'react'

const Todolist = (props) =>{
  return (
    <li>{props.val}<div className="delete">-</div></li>
  );
};

export default Todolist;