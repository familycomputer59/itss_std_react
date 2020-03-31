import React, { Component } from 'react';
import './App.css';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }    
    handleSubmit(event) {
        this.props.onAdd(this.state);
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
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Description"
                        onChange={this.handleChange}
                    />
                    <button className="button" onClick={this.handleSubmit}>登録</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;