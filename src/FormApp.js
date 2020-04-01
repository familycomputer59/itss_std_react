import React, { Component } from 'react';
import './App.css';

class FormApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeTitle(event) {
        this.setState({title: event.target.value})
    }
    
    handleChangeDescription(event) {
        this.setState({ description: event.target.value })
    }
    
    handleSubmit(event) {
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
                        onChange={this.handleChangeTitle}
                    />
                    <textarea 
                        type="text" 
                        name="description" 
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChangeDescription}
                    />
                    <button className="button" onClick={this.handleSubmit}>登録</button>
                </form>
            </div>
        );
    }
}

export default FormApp;