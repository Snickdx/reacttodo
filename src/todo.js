import React from "react";
import todoService from "./todoService";

export default class Todo extends React.Component {

    
    constructor(props){
        super(props)
        this.state = {done: props.done}
    }

    toggleDone = async _ => {
        this.setState( {done: !this.state.done});
        const response = await todoService.updateTodo(this.props.id, {done: this.props.done });
        if(response.message)
            alert(response.message)
        this.props.loadTodos();
    }


    deleteTodo = async _ => {
        const response = await todoService.deleteTodo(this.props.id);
        if(response.message)
            alert(response.message)
        this.props.loadTodos()
    }

    render(){

        return (
            <li className="card collection-item col s12 m4">
                <div className="card-content">
                    <span className="card-title">{this.props.text}
                        <label className="right">
                            <input type="checkbox" onChange={this.toggleDone} checked={this.state.done} />
                            <span>Done</span>
                        </label>
                    </span>
                </div>
                <div className="card-action">
                    <input type="button" value="delete" className="waves-effect waves-teal btn-flat" onClick={this.deleteTodo} />
                </div>
            </li>
        )
    } 
}