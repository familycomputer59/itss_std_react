import React, { Component } from 'react'

class ToDoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }
  render() {
    const { addItem } = this.props;
    return (
      <div style={{ textAlign: "center", width: '100%' }}>
        <form onSubmit={(e) => {
          e.preventDefault()
          addItem({ title: this.state.title, description: this.state.description })
          this.setState({
            title: '',
            description: ''
          })
        }}>
          <div style={{ width: '100%' }}>
            <input style={{ width: '100%' }} value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} type="text" name="title" placeholder="title" />
          </div>
          <br />
          <div style={{ width: '100%' }}>
            <textarea style={{ width: '100%', minHeight: '50px' }} value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder="description">
            </textarea>
          </div>
          <br />
          <div style={{ width: '100%' }}>
            <input style={{ width: '100%' }} type="submit" value="登録" />
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoForm