import React, { Component } from 'react';
import './App.css';

class FormRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        };
        this.ChangeTitleTodo = this.ChangeTitleTodo.bind(this);
        this.ChangeDescriptionTodo = this.ChangeDescriptionTodo.bind(this);
        this.SubmitTodo = this.SubmitTodo.bind(this);
    }
    
    ChangeTitleTodo(event) {
        this.setState({title: event.target.value})
    }
    
    ChangeDescriptionTodo(event) {
        this.setState({ description: event.target.value })
    }
    
    SubmitTodo(event) {
        // alert(this.state.title)
        this.props.onAdd(this.state)
        this.setState({
          title: '',
          description: ''
        })
        event.preventDefault()
    }
  
    render() {
        return (
            <div>
                <form className="App-form">
                    <input
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.ChangeTitleTodo}
                    />
                    <textarea 
                        type="text" 
                        name="description" 
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.ChangeDescriptionTodo}
                    />
                    <button className="button" onClick={this.SubmitTodo}>登録</button>
                </form>
            </div>
        );
    }
}

export default FormRegister;