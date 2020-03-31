import React, {Component} from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [
                    {
                        title: "title1",
                    description: "description1"
                    },
                {
                        title: "title2",
                    description: "description2"
                    },
                    {
                        title: "title3",
                    description: "description3"
                    }
            ],

        }
    }

    handleChangeData = (event) => {
        let input = event.target;
        console.log(event.target.value);
        this.setState({
            Item:
                {
                    ...this.state.Item,
                    [input.name]: input.value
                }
        });
    };

    handleSubmit() {
       this.state.listItem.push(this.state.Item);
        this.setState({listItem: this.state.listItem});
    }

    deleteItem(index) {
        this.state.listItem.splice(index, 1);
        this.setState({listItem:this.state.listItem});
    }

    render() {
        return (
            <div className="App">
                <form className="App-form">
                    <input type="text" id="title" name="title" placeholder="title" required
                           onChange={(event) => this.handleChangeData(event)}/>
                    <input type="text" id="description" name="description" placeholder="description" required
                           onChange={(event) => this.handleChangeData(event)}/>
                    <button type="submit" value="Submit" onClick={() => this.handleSubmit()}> Make</button>
                </form>
                <div>
                    {
                        this.state.listItem.map((x, index) => {
                            return (
                                <div style={{display: "inline"}}>
                                    <ToDoListItem title={x.title} description={x.description}
                                    />
                                    <button style={{display: "inline"}} onClick={() => this.deleteItem(index)}>X
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default App;