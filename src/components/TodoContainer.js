import React from 'react';
import '../App.css';
import Todo from "./TodoItem"
import TodoComponent from "./TodoComponent"

//handling the logical components
class TodoContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      toDos : [] ,
      todoText: ""
    }
    this.addTodo = this.addTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    //api calls and what not
  }

  addTodo(todo){
    this.setState((prevState) =>  {
      return{
        toDos: prevState.toDos.concat(todo),
        todoText: ""
      }
    })
  }

  //helper method to create a todo
  createTodo(text){
    const num = this.state.toDos.length + 1
    return(
      <Todo completed={false} text={text} handleChange={this.handleChange} id={num} key={num} />
    )
  }

  //Handles input change
  handleChange(event){
    const {name, value, type} = event.target
    if(type !== "checkbox"){
      return this.setState({ [name]: value})
    }
    return (this.setState(prevState => {
      const updatedTodos = prevState.toDos.map(todo =>{
          if(todo.props.id.toString() === name){
            return (
              <Todo 
                completed={!todo.props.completed}
                text={todo.props.text}
                handleChange={this.handleChange}
                id={todo.props.id}
                key={todo.props.id}
              />)
            }
            return todo
        })
        return{
          toDos: updatedTodos
        }
      })
    )
  }

  render(){
    return(
        <TodoComponent 
            handleChange={this.handleChange}
            {...this.state}
            addTodo={(e =>{this.addTodo(this.createTodo(this.state.todoText))})}
        />
    )
    
  }
}

export default TodoContainer;