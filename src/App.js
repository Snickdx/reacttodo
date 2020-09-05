import React from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import './App.css';
import todoService from './todoService';

class App extends React.Component{

  constructor(){
    super()
    this.state = { todos: []}
  }

  async componentDidMount(){
    await todoService.login('bob', 'bobpass');
    this.loadTodos();
  }

  loadTodos = async _ => {
      const todos = (await todoService.getTodos()).reverse()
      this.setState({ todos })
  }

  render(){
    return (
      <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <TodoForm addTodo={this.addTodo} loadTodos={this.loadTodos}></TodoForm>
            </div>
        </div>
        <TodoList todos={this.state.todos} loadTodos={this.loadTodos}></TodoList>
      </div>
    );
  }

}

export default App;
