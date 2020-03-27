import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { TextArea } = Input;

export default class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title:"",
      description: ""
    }
  }

  changeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  changeDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  submit = (e) => {
    const { append } = this.props
    const { title, description } = this.state
    if (title && description) {
      append(this.state)
      this.setState({ title: "", description: "" })  
    }
  }

  render() {
    return (
      <Form style={{ width: 300 }}>
        <Form.Item>
          <Input
            placeholder="Title"
            onChange={this.changeTitle}
            value={this.state.title}
          />
        </Form.Item>
        <Form.Item>
          <TextArea 
            placeholder="Description" 
            onChange={this.changeDescription} 
            value={this.state.description}
          />
        </Form.Item>
        <Form.Item>
          <button 
            type="submit" 
            className="ant-btn ant-btn-primary ant-btn-block" 
            onClick={this.submit}
          >
            登録
          </button>
        </Form.Item>
      </Form>
    )
  }
}
