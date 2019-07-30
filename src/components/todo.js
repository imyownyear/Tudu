import React from "react"
import '../App.css';

function Todo(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through"
    }
        return(
            <div className="todo-item">
                <input 
                    name={props.id}
                    type="checkbox"
                    checked={props.completed}
                    onChange={ (event)=> props.handleChange(event)} />
                <p style={props.completed ? completedStyle : null}>{props.text}</p>
            </div>
        )
    
}

export default Todo