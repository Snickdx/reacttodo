import React from 'react';
import Todo from './todo';


export default class TodoList extends React.Component {

    render(){
        return (
            <ul className="collection">
                {
                    this.props.todos.map( todo => <Todo key={todo.id} user={todo.user} loadTodos={this.props.loadTodos} id={todo.id} done={todo.done} text={todo.text} /> )
                }
            </ul>
        );
    }
}