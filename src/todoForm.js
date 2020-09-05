import React from 'react'
import todoService from './todoService'

export default class TodoForm extends React.Component {

    initState = { todoText: ''}

    constructor(props){
        super(props)
        this.state = {
            todoText: ""
        };
    }

    createTodo = async event =>{
        event.preventDefault();
        const response = await todoService.createTodo(this.state.todoText);
        if ( ! ('error'in response) )
            alert('Created!');
        this.props.loadTodos();
    }

    handleChange = event => {
        this.setState({todoText: event.target.value});
    }

    render(){
        return (
            <div className="card" >
                <div className="card-content">
                    <span className="card-title">Create Todo</span>
                    <form name="addForm" onSubmit={this.createTodo}>
                        <div className="input-field">
                            <input type="text" name="addText" value={this.state.todoText} onChange={this.handleChange} placeholder="enter to-do" className="materialize-textarea"/>
                            <label htmlFor="addText">Enter todo Text</label>
                        </div>
                        <input className="blue btn white-text" type="submit" value="SAVE" />
                    </form>
                </div>
            </div>
        )
    }
}