import React from 'react';
import './App.css';
import Todo from "./components/todo"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      toDos : [] ,
      todoText: ""
    }
    this.addTodo = this.addTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    //this.checkBoxHandleChange = this.checkBoxHandleChange.bind(this)
  }
  componentDidMount(){
    //api calls and what not
  }

  addTodo(todo){
    this.setState((prevState) =>  {
      console.log("clicked")
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
    type === "checkbox" ? this.setState(prevState => {
          const updatedTodos = prevState.toDos.map(todo =>{
            console.log(todo.props.id, name)
              if(todo.props.id.toString() === name){
                return (<Todo 
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
        }) : this.setState({ [name]: value})
  }

  render(){
    const todoItems = this.state.toDos
    return (
      <div className="todo-list">
        {todoItems}
        <form>
          <input 
            type="text"
            value={this.state.todoText}
            name="todoText"
            placeholder="Your TuDu"
            onChange={this.handleChange}
          />  
        </form>
        <button onClick={(e =>{this.addTodo(this.createTodo(this.state.todoText))})}>Add TuDu</button>
      </div>
    );
  }
}

export default App;

// this.setState({loading: true})
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     loading: false,
//                     character: data
//                 })
//             })
//     }