import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: ""
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeDesc = this.handleChangeDesc.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleChangeDesc = (event) => {
        this.setState({ description: event.target.value })
    }

    handleSubmit = (event) => {
        this.props.onAdd(this.state)
        this.setState({
            title: "",
            description: ""
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="ToDoForm form-group" style={{ width: "300px" }}>
                <div className="ToDoForm-title pb-2">
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                        placeholder="Title"
                    />
                </div>
                <div className="ToDoForm-description pb-2">
                    <textarea
                        className="form-control"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChangeDesc}
                        placeholder="Description"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success mb-4"
                    style={{ width: "100%" }}
                    onClick={this.handleSubmit}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default Form;