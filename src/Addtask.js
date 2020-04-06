import React from "react";

class Addtask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      mieuta :'' 
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState(
      {
        [name]: value
      }
    )
  }

  handleSubmit(event) {

    this.props.handleClickParent(this.state);
    event.preventDefault();

  }

  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Add Task</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label >Title</label>
              <input 
              type="text" 
              className="form-control" 
              name = {this.state.title}
              onChange={this.handleChange}

              />
              <br />
              <label >Description</label>
              <textarea
                name={this.state.mieuta}
                className="form-control"
                rows="5"
                onChange={this.handleChange}
              ></textarea>
            </div>

            <button type="submit"  className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addtask;
