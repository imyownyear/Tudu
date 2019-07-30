import React from 'react';
import '../App.css';

//handling the visual components
function TodoComponent(props){
    console.log(props.toDos)
    return(
        <div className="todo-list">
        {props.toDos}
        <form>
          <input 
            type="text"
            value={props.todoText}
            name="todoText"
            placeholder="Your TuDu"
            onChange={props.handleChange}
          />  
        </form>
        <button onClick={props.addTodo}>Add TuDu</button>
      </div>
    )
}

export default TodoComponent