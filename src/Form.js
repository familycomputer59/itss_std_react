import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToTodos({
            ...this.state
        });
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: [e.target.value]});
    }
    render() {
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <input className="FormItem" type="text" name="title" placeholder="title" onChange={this.handleChange} />
                <textarea className="FormItem" type="text" name="description" placeholder="description" onChange={this.handleChange} />
                <input className="FormItem" type="submit" onpress={this.handleSubmit} value="登録" />
            </form>
        );
    }
}

export default Form;